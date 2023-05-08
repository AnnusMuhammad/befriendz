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

const rejectFriendRequest = async (req, res, next) => {
  try {
    let response = await FriendsService.rejectFriendRequest(req);
    response.message = `Friend Request Rejected`;
    createResponse(res, response);
  } catch (e) {
    createError(res, e, next);
  }
}
const cancelFriendRequest = async (req, res, next) => {
  try {
    let response = await FriendsService.cancelFriendRequest(req);
    response.message = `Friend Request Cancelled`;
    createResponse(res, response);
  } catch (e) {
    createError(res, e, next);
  }
}
const acceptFriendRequest = async (req, res, next) => {
  try {
    let response = await FriendsService.acceptFriendRequest(req);
    response.message = `Friend Request Accepted`;
    createResponse(res, response);
  } catch (e) {
    createError(res, e, next);
  }
}
const unfriend = async (req, res, next) => {
  try {
    let response = await FriendsService.unfriend(req);
    response.message = `User Unfriend Successfuly`;
    createResponse(res, response);
  } catch (e) {
    createError(res, e, next);
  }
}


const FriendsController = {
  sendFriendRequest,
  acceptFriendRequest,
  rejectFriendRequest,
  cancelFriendRequest,
  unfriend
};

export default FriendsController;