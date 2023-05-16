import express from "express";
import DashboardController from "../controllers/web/dashboard.controller.js";

const DashboardRouter = express.Router();
DashboardRouter.get("/", DashboardController.home); 
DashboardRouter.get("/friends", DashboardController.friends); 
DashboardRouter.get("/friends/posts", DashboardController.friendsPosts); 
DashboardRouter.get("/user", DashboardController.profile);
DashboardRouter.get("/user/:username", DashboardController.profile);

export default DashboardRouter;
