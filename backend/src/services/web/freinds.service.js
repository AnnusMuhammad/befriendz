import mongoose from "mongoose";
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
              as: 'fromUser'
            }
          },
          {
            $lookup: {
              from: 'users',
              localField: 'to',
              foreignField: '_id',
              as: 'toUser'
            }
          },
          { $unwind: '$fromUser' },
          { $unwind: '$toUser' },
          { $project: { 
            'fromUser._id': 1,
            'fromUser.username': 1,
            'fromUser.first_name': 1,
            'fromUser.last_name': 1,
            'fromUser.type': 1,
            'fromUser.business_name': 1,
            'fromUser.business_type': 1,
            'fromUser.email': 1,
            'fromUser.profileImage': {
              $cond: {
                if: { $eq: ['$fromUser.profileImage', null] },
                then: IMAGES.AVATAR,
                else: { $concat: [FILE_URL.UPLOADS, '$fromUser.profileImage'] },
              }
            },
            'toUser._id': 1,
            'toUser.username': 1,
            'toUser.first_name': 1,
            'toUser.last_name': 1,
            'toUser.type': 1,
            'toUser.business_name': 1,
            'toUser.business_type': 1,
            'toUser.email': 1,
            'toUser.profileImage': {
              $cond: {
                if: { $eq: ['$toUser.profileImage', null] },
                then: IMAGES.AVATAR,
                else: { $concat: [FILE_URL.UPLOADS, '$toUser.profileImage'] },
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

const getFriendStatus = async (req, res, next) => {
    const {currentUser, user} = req;
    let friendStatus = false;
    friendStatus = await friendRequestModel.find({
        $or: [
            { from:  mongoose.Types.ObjectId(currentUser), to:  mongoose.Types.ObjectId(user._id) },
            { to:  mongoose.Types.ObjectId(currentUser), from:  mongoose.Types.ObjectId(user._id) }
        ]
    })
    .sort({ createdAt: -1 }).limit(1);     
    if(friendStatus && friendStatus[0]){
        friendStatus = friendStatus[0]; 
    }
    else friendStatus = {status: FRIEND_STATUS.not_friend};
    return friendStatus;
}

const FriendsService = {
  sendFriendRequest,
  getFriendStatus,
  fetchFriendRequests
};
export default FriendsService;
