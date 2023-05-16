import moment from 'moment';
import { USER_TYPE } from "../utils/constants/user.js";
import { IMAGES } from "../utils/constants/images.js";
import {FILE_URL} from "../utils/constants/file.js"


const PostDto = (data, friendStatus = false, hasAuthor = true) => {
  var filteredData =  {
    _id: data && data?._id ? data._id : null,
    coverImage: data && data?.coverImage ? FILE_URL.UPLOADS + data.coverImage : null,
    title: data && data?.title ? data.title : null,
    tags: data && data?.tags ? data.tags.map(item => ({_id: item._id, name: item.name})) : [],
    content: data && data?.content ? data.content : null,
    createdAt: data && data?.createdAt ? moment(data?.createdAt).fromNow() : null,
  };
 
  if(hasAuthor){ //Filter Author Detials if has author details
    let authorSpecificFields = {};
    if (hasAuthor && data?.author?.type === USER_TYPE.business) {
      authorSpecificFields = {
        business_name: data && data?.author?.business_name ? data.author?.business_name : null,
        business_type: data && data?.author?.business_type ? data.author?.business_type : null,
      };
    } else if (hasAuthor && data?.author?.type === USER_TYPE.personal) {
      authorSpecificFields = {
        first_name: data && data?.author?.first_name ? data.author?.first_name : null,
        last_name: data && data?.author?.last_name ? data.author?.last_name : null,
        occupation: data && data?.author?.occupation ? data.author?.occupation : null,
      };
    }
    if(friendStatus){ //Get Relation of current user with post author
      authorSpecificFields= {...authorSpecificFields, friendStatus}
    } 
    filteredData.author = {
      ...authorSpecificFields,
      username: data && data?.author?.username ? data.author?.username : null,
      _id: data && data?.author?._id ? data.author?._id : null,
      type: data && data?.author?.type ? data.author?.type : null,
      profileImage: data && data?.author?.profileImage ?  FILE_URL.UPLOADS + data.author?.profileImage : IMAGES.AVATAR,    
      createdAt: data && data?.author?.createdAt ? moment(data?.author.createdAt).fromNow() : null,
    }
  }
  else{
    filteredData.author = data && data?.author ? data.author : null
  }
  
  return filteredData;
};

export default PostDto;
