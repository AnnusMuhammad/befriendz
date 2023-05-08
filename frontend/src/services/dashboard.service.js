import axios from "axios";
import { apiUrl } from "../shared/helper";

const API_URL = apiUrl();


const friends = (token) => {
  const url = `friends`;
  return axios.get(
   API_URL + url,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

const home = (token) => {
  const url = ``;
  return axios.get(
   API_URL + url,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};


const DashboardService = { 
  friends,
  home
 };
export default DashboardService;
