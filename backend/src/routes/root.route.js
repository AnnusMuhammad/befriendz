import express from "express";
import TopicRouter from "./topic.route.js";
import AuthRouter from "./auth.route.js";
import UserRouter from "./user.route.js";
import WebAuthMiddleware from "../middlewares/web-auth.js";
const rootRouter = express.Router();

rootRouter.use("/auth", AuthRouter);
rootRouter.use("/topics", WebAuthMiddleware, TopicRouter);
rootRouter.use("/user", WebAuthMiddleware, UserRouter);

export default rootRouter;
