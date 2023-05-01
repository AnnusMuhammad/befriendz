import axios from "axios";
import { apiUrl } from "../shared/helper";

const API_URL = apiUrl("user");

// Send Friend Request
const sendFriendReuest = (token, user) => {
  const url = `/${user}/send-friend-request`;
  return axios.put(
   API_URL + url,
   {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

// Fetch All Friends i.e Suggested, Friend Requests, My Friends
const fetchAllFriendList = (token) => {
  const url = `/all-friends-list`;
  return axios.get(
   API_URL + url,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

const FriendsService = { 
  sendFriendReuest,
  fetchAllFriendList
 };
export default FriendsService;
