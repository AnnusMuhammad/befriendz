import React from "react";
import UserAvatarNamePostType from "../userAvatarNamePostType";
import { Images } from "config/images";
import PostComment from "../postComment.js/index.js";
import PostStats from "../postStats";
import PostTags from "../postTags";
import { removeHTMLAndLimitString } from "shared/helper";
import { Link } from "react-router-dom";

const { likeIcon } = Images;

const Post2 = ({post}) => {
  return (
    <Link to={`/${post._id}`} className="block">
    <article className="relative isolate flex flex-col gap-5 bg-white rounded-2xl p-4 cursor-pointer">
      <div className="flex w-full justify-between items-center flex-wrap gap-2">
        <div>
          <UserAvatarNamePostType post={post}/>
        </div>
        <div>
          <PostTags postType={2}  tags={post.tags || []}/>
        </div>
      </div>

      <div>
        <div className="">
          <div>
            <span className="text-[#515165] text-[18px] font-openSans_bold">
              {post.title}
            </span>
          </div>
          <div>
            <span className="text-[#949494] text-[14px] font-openSans_regular font-medium">
             {removeHTMLAndLimitString(post.content)?.length > 218 ? 
              <>
              {removeHTMLAndLimitString(post.content, 218)}...{" "}
              <span className="text-[#0493A3] font-openSans_semiBold ">
                READ MORE
              </span>
              </>
              :
              removeHTMLAndLimitString(post.content)
              }

            </span>
          </div>
        </div>
      </div>

      <div className="relative">
        { post.coverImage ? <div>
          <img
            className="w-full max-h-[402px] rounded-[8px] object-cover object-top"
                        src={ post.coverImage}
              alt={post.title}
            />
          </div>: <div style={{height: '20px'}}></div>}
        <div className="absolute sm:-bottom-6 -bottom-20 w-full flex justify-center">
          <div>
            <PostStats postType={2} />
          </div>
        </div>
      </div>
      <div className="sm:my-2 my-8"></div>
      <div>
        <PostComment />
      </div>
    </article></Link>
  );
};

export default Post2;
