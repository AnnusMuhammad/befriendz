import express from "express";
import UserController from "../controllers/web/user.controller.js";
import FriendsController from "../controllers/web/friends.controller.js";
import { update_profile_validation } from "./validation/user.route.validation.js";

const UserRouter = express.Router();

UserRouter.get("/all-friends-list", FriendsController.fetchAllFriendsList); // Fetch All Friends i.e Suggested, Friend Requests, My Friends
UserRouter.put("/:user/send-friend-request", FriendsController.sendFriendRequest);

UserRouter.post("/update-profile", update_profile_validation, UserController.updateProfile);
UserRouter.get("/", UserController.getProfile);
UserRouter.get("/:username", UserController.getProfile);

export default UserRouter;
