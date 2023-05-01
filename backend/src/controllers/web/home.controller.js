import FriendsService from "../../services/web/freinds.service.js";
import { createError, createResponse } from "../../utils/helper.js";

const home = async (req, res, next) => {
  try {
    let friendRequests = await FriendsService.fetchFriendRequests(req);
    let response = {data: {friendRequests: friendRequests.data}};
    response.message = `Friends Fetched`;
    createResponse(res, response);
  } catch (e) {
    createError(res, e, next);
  }
};

const HomeController = {
  home,
};

export default HomeController;
