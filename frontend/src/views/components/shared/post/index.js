import { Images } from "config/images";
import React from "react";
import { useNavigate } from "react-router-dom";

const { likeIcon } = Images;
const Post = ({ linkTo = null }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (linkTo) {
      navigate(linkTo);
    }
  };
  return (
    <article
      onClick={() => handleClick()}
      className="relative isolate flex flex-col gap-5 lg:flex-row bg-white rounded-2xl p-4 cursor-pointer"
    >
      <div className="absolute top-6 right-4 cursor-pointer p-1">
        <img src={likeIcon.default} />
      </div>
      <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-[156px] lg:h-full lg:shrink-0 w-11/12">
        <img
          src={
            "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80"
          }
          alt=""
          className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
        />
        <div className="absolute inset-0 rounded-2xl" />
      </div>
      <div>
        <div className="group relative">
          <h3 className="mt-2 w-11/12 text-[18px] text-dark font-openSans_bold">
            <span className="">
              <span className="absolute inset-0 " />
              <span style={{ width: "95%" }}>
                Ultimate Guide For Beginners looking to play guitar like a Pro
                in 6 weeks
              </span>
            </span>
          </h3>
        </div>
        <div className="flex items-center gap-x-3 mt-3">
          {[1, 2]?.map((item) => (
            <span className="rounded-2xl bg-c_F5F5F5 py-2 px-4 font-openSans_semiBold text-c_515165 text-[8px]">
              Music
            </span>
          ))}
        </div>
        <div className="mt-3 flex justify-between items-start">
          <div className="relative flex items-center gap-x-3">
            <img
              src={
                "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
              }
              alt=""
              className="h-[40px] w-[40px] rounded-full"
            />
            <div>
              <div>
                <div className="leading-[2px] text-[14px] font-openSans_semiBold text-c_515165 space-x-3">
                  <span>Ryan Bass</span>
                  <span className="text-c_FD6769">Music</span>
                </div>
                <span className="font-openSans_regular text-c_949494 text-[10px]">
                  3 weeks ago
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-end items-center gap-x-3">
            <div>
              <span className="font-openSans_regular text-c_949494 text-[12px]">
                651,324 Views
              </span>
            </div>
            <div>
              <span className="font-openSans_regular text-c_949494 text-[12px]">
                36,6545 Likes
              </span>
            </div>
            <div>
              <span className="font-openSans_regular text-c_949494 text-[12px]">
                56 comments
              </span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Post;
