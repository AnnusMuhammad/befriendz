import express from "express";
import TopicController from "../controllers/web/topic.controller.js";

const TopicRouter = express.Router();

TopicRouter.get("/", TopicController.topicLists);

export default TopicRouter;
