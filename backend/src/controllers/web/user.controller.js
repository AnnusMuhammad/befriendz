import UserService from "../../services/web/user.service.js";
import { createError, createResponse } from "../../utils/helper.js";

const updateProfile = async (req, res, next) => {
  try {
    let response = await UserService.updateProfile(req);
    response.message = `Profile Updated`;
    createResponse(res, response);
  } catch (e) {
    createError(res, e, next);
  }
};

const UserController = {
  updateProfile,
};

export default UserController;
