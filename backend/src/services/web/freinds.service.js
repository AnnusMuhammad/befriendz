import mongoose from "mongoose";
import userModel from "../../database/models/user.model.js";
import friendRequestModel from "../../database/models/friendRequest.model.js";
import { FRIEND_STATUS } from "../../utils/constants/user.js";
import { APP_CONSTANT } from "../../utils/constants/app.js";
import { IMAGES } from "../../utils/constants/images.js";
import { FILE_URL } from "../../utils/constants/file.js";
import { config } from "dotenv";
config();

const sendFriendRequest = async (req, res, next) => {
  const { currentUser } = req;
  const user = req.params.user;
  const friendRequests = await friendRequestModel.find({
    $or: [
      { from:  mongoose.Types.ObjectId(currentUser), to:  mongoose.Types.ObjectId(user) },
      { to:  mongoose.Types.ObjectId(currentUser), from:  mongoose.Types.ObjectId(user) }
    ]
  }).sort({ createdAt: -1 }).limit(1);
  if(friendRequests && friendRequests[0]){
    if(friendRequests[0].status === FRIEND_STATUS.pending){
      const error = new Error(`Request already sent`);
      error.statusCode = 400;
      throw error;
    }
    if(friendRequests[0].status === FRIEND_STATUS.accepted){
      const error = new Error(`You are already befriend`);
      error.statusCode = 400;
      throw error;
    }
  }
  const requestDetails = await friendRequestModel.create(
    {
      from: currentUser,
      to: user,
      status: 'pending',
    }
  );

  return { data:{requestDetails}, message: `Befriend Request Sent`}
};

const fetchFriendRequests = async (req, res, next) => {
  const {currentUser} = req;
  const page = req.params.page || 1;
  const status = req.params.status || FRIEND_STATUS.pending
  const [result] = await friendRequestModel.aggregate([
    { $match: {  to: mongoose.Types.ObjectId(currentUser), status } },
    { $sort: { createdAt: -1 } },
    {
      $facet: {
        data: [
          { $skip: (page - 1) * APP_CONSTANT.FRIEND_REQUESTS_LIMIT },
          { $limit: APP_CONSTANT.FRIEND_REQUESTS_LIMIT },
          {
            $lookup: {
              from: 'users',
              localField: 'from',
              foreignField: '_id',
              as: 'from'
            }
          },
          {
            $lookup: {
              from: 'users',
              localField: 'to',
              foreignField: '_id',
              as: 'to'
            }
          },
          { $unwind: '$from' },
          { $unwind: '$to' },
          { $project: { 
            'from._id': 1,
            'from.username': 1,
            'from.first_name': 1,
            'from.last_name': 1,
            'from.type': 1,
            'from.business_name': 1,
            'from.business_type': 1,
            'from.email': 1,
            'from.profileImage': {
              $cond: {
                if: { $eq: ['$from.profileImage', null] },
                then: IMAGES.AVATAR,
                else: { $concat: [FILE_URL.UPLOADS, '$from.profileImage'] },
              }
            },
            'to._id': 1,
            'to.username': 1,
            'to.first_name': 1,
            'to.last_name': 1,
            'to.type': 1,
            'to.business_name': 1,
            'to.business_type': 1,
            'to.email': 1,
            'to.profileImage': {
              $cond: {
                if: { $eq: ['$to.profileImage', null] },
                then: IMAGES.AVATAR,
                else: { $concat: [FILE_URL.UPLOADS, '$to.profileImage'] },
              }
            },
             status: 1, createdAt: 1 
          } }
        ],
        total: [{ $count: 'total' }]
      }
    }
  ]);
  return { data: {friendRequests: result.data || [], totalRequests: result.total  || 0}  };
}

const fetchFriends = async (req, res, next) => {
  const {currentUser} = req;
  const user = req.params.user || currentUser;
  const page = req.params.page || 1;
  const status = req.params.status || FRIEND_STATUS.accepted
  const [result] = await friendRequestModel.aggregate([
    { $match: {  $or: [
      {to: mongoose.Types.ObjectId(user)},
      {from: mongoose.Types.ObjectId(user)}
    ], status } },
    { $sort: { createdAt: -1 } },
    {
      $facet: {
        data: [
          { $skip: (page - 1) * APP_CONSTANT.FRIEND_REQUESTS_LIMIT },
          { $limit: APP_CONSTANT.FRIEND_REQUESTS_LIMIT },
          {
            $lookup: {
              from: 'users',
              localField: 'from',
              foreignField: '_id',
              as: 'from'
            }
          },
          {
            $lookup: {
              from: 'users',
              localField: 'to',
              foreignField: '_id',
              as: 'to'
            }
          },
          { $unwind: '$from' },
          { $unwind: '$to' },
          { $project: { 
            'from._id': 1,
            'from.username': 1,
            'from.first_name': 1,
            'from.last_name': 1,
            'from.type': 1,
            'from.business_name': 1,
            'from.business_type': 1,
            'from.email': 1,
            'from.profileImage': {
              $cond: {
                if: { $eq: ['$from.profileImage', null] },
                then: IMAGES.AVATAR,
                else: { $concat: [FILE_URL.UPLOADS, '$from.profileImage'] },
              }
            },
            'to._id': 1,
            'to.username': 1,
            'to.first_name': 1,
            'to.last_name': 1,
            'to.type': 1,
            'to.business_name': 1,
            'to.business_type': 1,
            'to.email': 1,
            'to.profileImage': {
              $cond: {
                if: { $eq: ['$to.profileImage', null] },
                then: IMAGES.AVATAR,
                else: { $concat: [FILE_URL.UPLOADS, '$to.profileImage'] },
              }
            },
             status: 1, createdAt: 1 
          } }
        ],
        total: [{ $count: 'total' }]
      }
    }
  ]);
  return { data: {friends: result.data || [], totalFriends: result.total  || 0}  };
}

const getFriendStatus = async (req, res, next) => {
    const {currentUser, user} = req;
    let friendStatus = false;
    friendStatus = await friendRequestModel.findOne({
        $or: [
            { from:  mongoose.Types.ObjectId(currentUser), to:  mongoose.Types.ObjectId(user._id) },
            { to:  mongoose.Types.ObjectId(currentUser), from:  mongoose.Types.ObjectId(user._id) }
        ]
    })
    .sort({ createdAt: -1 }).limit(1);     
    if(!friendStatus) friendStatus = {status: FRIEND_STATUS.not_friend};
    return {data: {friendStatus}};
}

const rejectFriendRequest = async (req, res, next) => {
  const {currentUser} = req;
  const {freindrequest} = req.params;
  const friendRequest = await friendRequestModel.findOneAndUpdate({_id: freindrequest, to: currentUser, status: FRIEND_STATUS.pending},
  {
    status: FRIEND_STATUS.rejected,
  }, { new: true });
  
  if(!friendRequest){
      const error = new Error(`Request not found`);
      error.statusCode = 400;
      throw error;
  }
  return {data: {friendRequest}}
}

const cancelFriendRequest = async (req, res, next) => {
  const {currentUser} = req;
  const {freindrequest} = req.params;
  const friendRequest = await friendRequestModel.findOneAndUpdate({_id: freindrequest, from: currentUser, status: FRIEND_STATUS.pending}, {
    status: FRIEND_STATUS.cancelled,
  }, { new: true });

  if(!friendRequest){
      const error = new Error(`Request not found`);
      error.statusCode = 400;
      throw error;
  }

  return {data: {friendRequest}}
}

const acceptFriendRequest = async (req, res, next) => {
  const {currentUser} = req;
  const {freindrequest} = req.params;
  const friendRequest = await friendRequestModel.findOneAndUpdate({
    _id: freindrequest,
    status: FRIEND_STATUS.pending,
    $or: [
      { from: currentUser },
      { to: currentUser }
    ],
  }, {
    status: FRIEND_STATUS.accepted,
  }, { new: true });

  if(!friendRequest){
      const error = new Error(`Request not found`);
      error.statusCode = 400;
      throw error;
  }
  return {data: {friendRequest}}
}

const unfriend = async (req, res, next) => {
  const {currentUser} = req;
  const user = req.params.user;

  const friendRequest = await friendRequestModel.findOneAndUpdate({
    status: FRIEND_STATUS.accepted,
    $or: [
      { from: currentUser, to: user },
      { to: currentUser, from: user },
    ],
  }, {
    status: FRIEND_STATUS.not_friend,
  }, { new: true });

  if(!friendRequest){
      const error = new Error(`You are not friend`);
      error.statusCode = 400;
      throw error;
  }


  return {data: {friendRequest}}
}

const FriendsService = {
  getFriendStatus,
  fetchFriendRequests,
  fetchFriends,
  rejectFriendRequest,
  cancelFriendRequest,
  acceptFriendRequest,
  sendFriendRequest,
  unfriend,
};
export default FriendsService;
