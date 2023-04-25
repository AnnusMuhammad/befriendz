import userModel from "../../database/models/user.model.js";
import UserUpdateProfileDto from "../../dto/userUpdateProfile.dto.js";
import UserDto from "../../dto/user.dto.js";
import { config } from "dotenv";
config();

const updateProfile = async (req, res, next) => {
  const { currentUser } = req;
  const data = UserUpdateProfileDto(req.body);
  const user = await userModel.findById(
        currentUser
    );
    if(data.email || data.username){
        if(data.email && data.email != user.email){
        const emailExist = await userModel.findOne({ email: data.email });
        if (emailExist) {
            const error = new Error(`Email already exist`);
            error.statusCode = 400;
            throw error;
        }
    }
    if(data.username && data.username != user.username){
        const usernameExist = await userModel.findOne({ username: data.username });
        if (usernameExist) {
            const error = new Error(`Username already exist`);
            error.statusCode = 400;
            throw error;
        }
    }
  }
  const updatedUser = await userModel.findByIdAndUpdate(
    currentUser,
    data,
    { new: true, populate: { path: "interests" } }
  );
  
  return { data: { user: UserDto(updatedUser) } };
};
const UserService = {
  updateProfile,
};
export default UserService;
