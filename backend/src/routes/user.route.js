import express from "express";
import UserController from "../controllers/web/user.controller.js";
import FriendsController from "../controllers/web/friends.controller.js";
import { update_profile_validation } from "./validation/user.route.validation.js";

const UserRouter = express.Router();

UserRouter.put("/:user/send-friend-request", FriendsController.sendFriendRequest);
UserRouter.put("/:user/unfriend", FriendsController.unfriend);
UserRouter.put("/:freindrequest/cancel", FriendsController.cancelFriendRequest);
UserRouter.put("/:freindrequest/reject", FriendsController.rejectFriendRequest);
UserRouter.put("/:freindrequest/accept", FriendsController.acceptFriendRequest);
UserRouter.post("/update-profile", update_profile_validation, UserController.updateProfile);

export default UserRouter;
