import userModel from "../../database/models/user.model.js";
import UserUpdateProfileDto from "../../dto/userUpdateProfile.dto.js";
import UserDto from "../../dto/user.dto.js";
import mongoose from "mongoose";
import FriendsService from './freinds.service.js'
import { config } from "dotenv";
config();

const updateUser = async (req, res, next) => {
  const { currentUser } = req;
  const data = UserUpdateProfileDto(req.body);
  const user = await userModel.findById(
        currentUser
    );
    if(data.email || data.username){
        if(data.email && data.email != user.email){
        const emailExist = await userModel.findOne({ email: data.email });
        if (emailExist) {
            const error = new Error(`Email already exist`);
            error.statusCode = 400;
            throw error;
        }
    }
    if(data.username && data.username != user.username){
        const usernameExist = await userModel.findOne({ username: data.username });
        if (usernameExist) {
            const error = new Error(`Username already exist`);
            error.statusCode = 400;
            throw error;
        }
    }
  }
  const updatedUser = await userModel.findByIdAndUpdate(
    currentUser,
    data,
    { new: true, populate: { path: "interests" } }
  );
  
  return { data: { user: UserDto(updatedUser), friendStatus: false } };
};

const fetchUser = async (req, res, next) => {
  const { currentUser } = req;
  const username = req.params.username;
  let friendStatus = false;
  const query = username ? { username } : { _id: currentUser };
  const user = await userModel.findOne(query).populate('interests').exec();

  // Check if is freind, or has friend request by current user
  if(username && user){
    req.user = user;
    friendStatus = await FriendsService.getFriendStatus(req);
    friendStatus = friendStatus?.data?.friendStatus;
  }

  if (!user) {
      const error = new Error(`User not found`);
      error.statusCode = 404;
      throw error;
  }
  
  return { data: { user: UserDto(user), friendStatus } };
}
const fetchUserInterestsIdsAsArray = async (req, res, next) => {
  const { currentUser } = req;
  const user = await userModel.findOne({_id: currentUser})
  .select('interests');
  if (!user) {
    const error = new Error(`User not found`);
    error.statusCode = 404;
    throw error;
  } 
  const topicIds = user.interests.map((topic) => mongoose.Types.ObjectId(topic.toString()));
  return { data: { topicIds, } };
}

const UserService = {
  updateUser,
  fetchUser,
  fetchUserInterestsIdsAsArray
};
export default UserService;
