import express from "express";
import UserController from "../controllers/web/user.controller.js";
import { update_profile_validation } from "./validation/user.route.validation.js";

const UserRouter = express.Router();
UserRouter.post("/update-profile", update_profile_validation, UserController.updateProfile);

export default UserRouter;
