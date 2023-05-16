import React from "react";
import UserAvatarNamePostType from "../userAvatarNamePostType";
import { Images } from "config/images";
import PostComment from "../postComment.js";
import PostStats from "../postStats";
import PostTags from "../postTags";
import { Link } from "react-router-dom";
import { removeHTMLAndLimitString } from "shared/helper";
const { likeIcon } = Images;

const Post1 = ({post}) => {
  return (
    
    <Link to={`/${post._id}`} className="block">
    <article className="relative isolate flex flex-col gap-5 bg-white rounded-2xl p-4 cursor-pointer">
      <div className="flex w-full justify-between items-center flex-wrap gap-2">
        <div>
          <UserAvatarNamePostType post={post} />
        </div>
        <div>
          <PostTags tags={post.tags || []} />
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
      <div>
        { post.coverImage ? <div className="relative">
          <div>
            <img
              className="w-full rounded-[8px] max-h-[402px] object-cover object-top"
              src={ post.coverImage}
              alt={post.title}
            />
          </div>
          {/* <div className="absolute sm:bottom-6 bottom-4 sm:right-6 right-4 w-full flex justify-end">
            <div className="w-[118px] h-[37px] flex justify-center items-center backdrop-blur-xl rounded-full">
              <div className="w-[115px] h-[34px] flex justify-center items-center bg-[#B4AC9C] rounded-full">
                <span className="text-white text-[12px] font-openSans_medium">
                  tap me twice
                </span>
              </div>
            </div>
          </div> */}
        </div>: null}
      </div>
      <div>
        <PostStats />
      </div>
      <div>
        <PostComment />
      </div>
    </article></Link>
  );
};

export default Post1;
