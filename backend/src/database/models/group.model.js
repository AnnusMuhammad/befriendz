import mongoose from "mongoose";
const Schema = mongoose.Schema;

const groupSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    cover: {
      type: String,
      require: true,
    },
    banner: {
      type: String,
      require: true,
    },    
    about: {
      type: String,
      require: true,
    },
    topics: [
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
  },
  { timestamps: true }
);

const GroupModel = mongoose.model("groups", groupSchema);
export default GroupModel;
