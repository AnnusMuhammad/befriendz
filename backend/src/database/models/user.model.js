import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    first_name: {
      type: String,
      default: null,
    },
    last_name: {
      type: String,
      default: null,
    },
    business_name: {
      type: String,
      default: null,
    },
    business_type: {
      type: String,
      default: null,
    },
    business_address: {
      type: String,
      default: null,
    },
    phoneNumber: {
      type: String,
      default: null,
    },
    username: {
      type: String,
      default: null,
    },
    email: {
      type: String,
      default: null,
    },
    profileImage: {
      type: String,
      require: false,
      default: null,
    },
    images: [
      {
        type: String,
        require: false,
        default: null,
      },
    ],
    gender: {
      type: String,
      default: null,
    },
    occupation: {
      type: String,
      default: null,
    },
    about: {
      type: String,
      default: null,
    },
    dob: {
      type: Object,
      default: null,
    },
    status: {
      type: String,
      require: true,
      enum: ["notVerifiedEmail", "profilePending", "completed"],
      default: "notVerifiedEmail",
    },
    type: {
      type: String,
      require: true,
      enum: ["personal", "business"],
      default: "personal",
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    password: {
      type: String,
      default: null,
      require: true,
    },
    interests: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "topics",
      },
    ],
  },
  { timestamps: true }
);

const UserModel = mongoose.model("users", userSchema);
export default UserModel;
