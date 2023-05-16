import axios from "axios";
import { apiUrl } from "../shared/helper";

const API_URL = apiUrl("posts");

const addPost = (token = null, data) => {
  return axios.post(`${API_URL}/add`, data, {
    headers: {
      Authorization: `Bearer ${token}`, 
      'content-type': 'multipart/form-data',
     },
  });
};

const viewPost = (token = null, postid) => {
  return axios.get(`${API_URL}/${postid}`,  {
    headers: { 
      Authorization: `Bearer ${token}`, 
    }
  });
};

const PostService = { addPost, viewPost };

export default PostService;
