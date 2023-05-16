import PostService from "../../services/web/post.service.js";
import { createError, createResponse } from "../../utils/helper.js";

const addPost = async (req, res, next) => {
  try {
    let response = await PostService.addPost(req);
    response.message = `Post Inserted`;
    createResponse(res, response);
  } catch (e) {
    createError(res, e, next);
  }
};
const viewPost = async (req, res, next) => {
  try {
    let response = await PostService.fetchByID(req);
    response.message = `Post Fetched`;
    createResponse(res, response);
  } catch (e) {
    createError(res, e, next);
  }
};
const PostController = {
  addPost,
  viewPost
};

export default PostController;
