import axios from "axios";
import { apiUrl } from "../shared/helper";

const API_URL = apiUrl("user");

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

const UserService = { updateProfile };
export default UserService;
