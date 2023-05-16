import mongoose from "mongoose";
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    content: {
      type: String,
      default: null,
    },
    coverImage: {
      type: String,
      default: null,
    },
    tags: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "topics",
      },
    ],
    author: 
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",        
        require: true,
    },
    group: 
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "groups",
    },
  },
  { timestamps: true }
);

const PostModel = mongoose.model("posts", postSchema);
export default PostModel;
