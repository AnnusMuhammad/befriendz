import React from "react";
import { USER_TYPE } from "constants/user.constant";
import { Link } from "react-router-dom";

const UserAvatarNamePostType = ({post}) => {
  return (
    <Link to={`/profile/${post.author.username}`}> <div className="flex items-center gap-x-3">
      <div>
        <div className="w-[60px] h-[60px] rounded-full flex justify-center items-center border border-[#FD6769]">
          <img
            className="w-[51px] h-[51px] rounded-full object-cover object-center"
            src={post.author.profileImage}
            alt={post.author.username}
            title={post.author.username}
          />
        </div>
      </div>
      <div>
        <div>
          <span className="text-[#FD6769] text-[16px] font-openSans_bold leading-none">
            {post.author?.type === USER_TYPE?.PERSONAL
                ? `${post.author?.first_name} ${post.author?.last_name}`
                : post.author?.business_name}
          </span>
        </div>
        <div className="space-x-1">
          {post?.group ? <><span className="text-[#949494] text-[10px] font-openSans_regular capitalize">
            in group
          </span>
          <span className="text-[#0493A3] text-[10px] font-openSans_bold">
            MUSIC
          </span>
          <span className="text-[#949494] text-[10px] font-openSans_bold">
            |
          </span>
          </>: null}
          <span className="text-[#949494] font-medium text-[10px] font-openSans_regular">
           {post.createdAt}
          </span>
        </div>
      </div>
    </div></Link>
  );
};

export default UserAvatarNamePostType;
