import FriendsService from "../../services/web/freinds.service.js";
import UserService from "../../services/web/user.service.js";
import PostService from "../../services/web/post.service.js";
import { createError, createResponse } from "../../utils/helper.js";

const home = async (req, res, next) => {
  try {
    let friendRequests = await FriendsService.fetchFriendRequests(req);
    let fetchNewsFeed = await PostService.fetchReleventPosts(req);
    let response = {data: {...friendRequests.data, ...fetchNewsFeed.data }, message: `Friends Fetched`};
    createResponse(res, response);
  } catch (e) {
    createError(res, e, next);
  }
};
const friendsPosts = async (req, res, next) => {
  try {
    let friendRequests = await FriendsService.fetchFriendRequests(req);
    let fetchNewsFeed = await PostService.fetchFriendsPosts(req);
    let response = {data: {...friendRequests.data, ...fetchNewsFeed.data }, message: `Friends Fetched`};
    createResponse(res, response);
  } catch (e) {
    createError(res, e, next);
  }
};

const friends = async (req, res, next) => {
  try {
    let friendRequests = await FriendsService.fetchFriendRequests(req);
    let fetchFriends = await FriendsService.fetchFriends(req);
    let response = {data: {friendRequests: friendRequests.data, friends: fetchFriends.data}};
    response.message = `Friends Fetched`;
    createResponse(res, response);
  } catch (e) {
    createError(res, e, next);
  }
};

const profile = async (req, res, next) => {
  try {
    let fetchUser = await UserService.fetchUser(req);
    req.params.user = fetchUser?.data?.user?._id;
    let fetchFriends = await FriendsService.fetchFriends(req);    
    let fetchPosts = await PostService.fetchByUser(req);    
    const response = {message: `Profile Fetched`, data: { ...fetchUser?.data, ...fetchFriends?.data, ...fetchPosts.data}};
    createResponse(res, response);
  } catch (e) {
    createError(res, e, next);
  }
};

const DashboardController = {
  home,
  friends,
  profile,
  friendsPosts
};

export default DashboardController;
