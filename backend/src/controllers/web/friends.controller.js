import FriendsService from "../../services/web/freinds.service.js";
import { createError, createResponse } from "../../utils/helper.js";

const sendFriendRequest = async (req, res, next) => {
  try {
    let response = await FriendsService.sendFriendRequest(req);
    createResponse(res, response);
  } catch (e) {
    createError(res, e, next);
  }
};

// Fetch All Friends i.e Suggested, Friend Requests, My Friends
const fetchAllFriendsList = async (req, res, next) => {
  try {
    let friendRequests = await FriendsService.fetchFriendRequests(req);
    let response = {data: {friendRequests: friendRequests.data}};
    response.message = `Friends Fetched`;
    createResponse(res, response);
  } catch (e) {
    createError(res, e, next);
  }
};

const FriendsController = {
  sendFriendRequest,
  fetchAllFriendsList
};

export default FriendsController;