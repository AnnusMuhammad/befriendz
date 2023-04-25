import axios from "axios";
import { apiUrl } from "../shared/helper";

const API_URL = apiUrl("topics");

const listAll = (token = null) => {
  return axios.get(`${API_URL}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

const TopicService = { listAll };

export default TopicService;
