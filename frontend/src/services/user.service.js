import axios from "axios";
import { apiUrl } from "../shared/helper";

const API_URL = apiUrl("user");

// Update Profile
const updateProfile = (data, token) => {
  return axios.post(
    API_URL + "/update-profile",
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

// Fetch Profile
const getProfile = (token, username = null) => {
  //If has usrename then fetch profile by username else fetch current user profile
  const url = username !== null ? `/${username}` : '' 

  return axios.get(
   API_URL + url,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

const UserService = { 
  updateProfile,
  getProfile,
 };
export default UserService;
