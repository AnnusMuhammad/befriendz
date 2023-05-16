import express from "express";
import PostController from "../controllers/web/post.controller.js";
import { add_post_validation } from "./validation/post.route.validation.js";
import { FILE_CONSTANT } from "../utils/constants/file.js";
import { uploadFile, fileHandling } from "../utils/file.upload.js";

const PostRouter = express.Router();

PostRouter.post("/add",   
    (req, res, next) => {    
    // File Size And Ext Configration for each route
    const upload =  uploadFile(FILE_CONSTANT.SIZE['10MB'], FILE_CONSTANT.EXT.IMAGE,  false);
    upload.fields([
      {
        name: 'coverImage', maxCount: 1,
      },
    ])(req, res, err => {
      fileHandling(req, res, err, next)
    })    
  }, add_post_validation,  PostController.addPost);
PostRouter.get("/:postid",  PostController.viewPost);

export default PostRouter;
