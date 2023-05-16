import React from "react";

const PostComment = () => {
  return (
    <div>
      <div className="flex">
        <div className="min-w-[50px] flex justify-center items-center">
          <img
            className="h-[40px] w-[40px] rounded-full"
            src={
              "https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
            }
            alt=""
          />
        </div>
        <div className="w-full px-[10px]">
          <input
            className="bg-white border border-[#C5D0E6] min-h-[44px] w-full px-[15px] rounded-full focus:outline-none text-[16px] font-openSans_regular"
            placeholder="Type your comments here..."
          />
        </div>
      </div>
    </div>
  );
};

export default PostComment;
