import { config } from "dotenv";
import mongoose from "mongoose";
import PostModel from "../../database/models/post.model.js";
import PostDto from "../../dto/post.dto.js";
import FriendsService from "./freinds.service.js";
import UserService from "./user.service.js";
import { APP_CONSTANT } from "../../utils/constants/app.js";
config();

const addPost = async (req, res, next) => {
  const { currentUser } = req;
  const { title, content, coverImage, tags } = req.body;
  var parsedTags = tags ? tags.split(",") : []
  const post = await PostModel.create(
    {
        title,
        content,
        tags: parsedTags,
        coverImage: coverImage ? coverImage : null,
        author: mongoose.Types.ObjectId(currentUser)
    }
  );
  return {data: {post: {_id: post._id}}}
};

const fetchByID = async (req, res, next) => {
  const { currentUser } = req;
  const postid = req.params.postid;
  const post = await PostModel.findById(postid).populate('author').populate('tags').exec();
  if (!post) {
    const error = new Error("Post Not found!");
    error.statusCode = 404;
    throw error;
  }
  let friendStatus = false;
  req.user = post.author;
  friendStatus = await FriendsService.getFriendStatus(req);
  friendStatus = friendStatus?.data?.friendStatus;

  var relatedPosts = await PostModel.find(
    {
      author:  mongoose.Types.ObjectId(post.author._id),
       _id: { $ne: mongoose.Types.ObjectId(post._id) }
    }
  ).populate('tags')
  .sort({ createdAt: -1 })
  .limit(3).exec();
  if(relatedPosts?.length > 0){
    relatedPosts = relatedPosts.map(item => PostDto(item, false, false))
  }
  return {data: {post: PostDto(post, friendStatus), relatedPosts}}
};

const fetchByUser = async (req, res, next) => {
  const { user } = req.params;
  const page = req.query.page || 1;
  const limit = req.query.limit || APP_CONSTANT.POST_LIMIT;
  const [result] = await PostModel.aggregate([
    { $match: {  author: mongoose.Types.ObjectId(user) } },
    { $sort: { createdAt: -1 } },
    {
      $facet: {
        data: [
          { $skip: (page - 1) * limit },
          { $limit: limit },
          {
            $lookup: {
              from: 'users',
              localField: 'author',
              foreignField: '_id',
              as: 'author'
            }
          },
          {
            $lookup: {
              from: 'topics',
              localField: 'tags',
              foreignField: '_id',
              as: 'tags'
            }
          },
          { $unwind: '$author' },
        ],
        total: [{ $count: 'total' }]
      }
    }
  ]);
  if(result.data?.length > 0){
    result.data = result.data.map(item => PostDto(item, false))
  }
  return { data: {posts: result.data || [], totalPosts: result.total  || 0}  };
};

const fetchReleventPosts =  async (req, res, next) => {
  const { currentUser } = req;
  const page = req.query.page || 1;
  const limit = req.query.limit || APP_CONSTANT.POST_LIMIT;

  const  topicids = await UserService.fetchUserInterestsIdsAsArray(req);
  let friendIDs = await FriendsService.fetchAllFriendsIDsAsArray(req);
  friendIDs.data.friendIds.push(mongoose.Types.ObjectId(currentUser))
  const [result] = await PostModel.aggregate([
    { $match: { $or: [
      {author: { $in: friendIDs.data.friendIds }},
      {tags: {$in: topicids.data.topicIds}} 
    ] },},
    { $sort: { createdAt: -1 }, },
    {
      $facet: {
        data: [
          { $skip: (page - 1) * limit },
          { $limit: limit },
          {
            $lookup: {
              from: 'users',
              localField: 'author',
              foreignField: '_id',
              as: 'author'
            }
          },
          {
            $lookup: {
              from: 'topics',
              localField: 'tags',
              foreignField: '_id',
              as: 'tags'
            }
          },
          { $unwind: '$author' },
        ],
        total: [{ $count: 'total' }]
      }
    }
  ]);
  if(result.data?.length > 0){
    result.data = result.data.map(item => PostDto(item, false))
  }
  return { data: {posts: result.data || [], totalPosts: result.total  || 0}  };
};
const fetchFriendsPosts =  async (req, res, next) => {
  const { currentUser } = req;
  const page = req.query.page || 1;
  const limit = req.query.limit || APP_CONSTANT.POST_LIMIT;
  let friendIDs = await FriendsService.fetchAllFriendsIDsAsArray(req);
  const [result] = await PostModel.aggregate([
    { $match: { author: { $in: friendIDs.data.friendIds } },},
    { $sort: { createdAt: -1 }, },
    {
      $facet: {
        data: [
          { $skip: (page - 1) * limit },
          { $limit: limit },
          {
            $lookup: {
              from: 'users',
              localField: 'author',
              foreignField: '_id',
              as: 'author'
            }
          },
          {
            $lookup: {
              from: 'topics',
              localField: 'tags',
              foreignField: '_id',
              as: 'tags'
            }
          },
          { $unwind: '$author' },
        ],
        total: [{ $count: 'total' }]
      }
    }
  ]);
  if(result.data?.length > 0){
    result.data = result.data.map(item => PostDto(item, false))
  }
  return { data: {posts: result.data || [], totalPosts: result.total  || 0}  };
};

const PostService = {
  addPost,
  fetchByID,
  fetchByUser,
  fetchReleventPosts,
  fetchFriendsPosts
};
export default PostService;
