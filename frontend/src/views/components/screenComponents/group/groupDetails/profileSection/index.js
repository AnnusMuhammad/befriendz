import { Images } from "config/images";
import React from "react";

const { leaveIcon, shareIcon } = Images;
const ProfileSection = () => {
  return (
    <div className="p-3 bg-white rounded-2xl mb-3">
      <div className="">
        <img
          className="rounded-2xl h-[174px] w-full object-cover"
          src="https://images.unsplash.com/photo-1517340650606-17091f8e86ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        />
      </div>
      <div className="py-5">
        <div className="flex justify-between items-center">
          <div className="flex space-x-3 items-center">
            <div>
              <img
                className="w-[70px] h-[70px] rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0vId0JXtXVNijOf5Z3vppWV1DAoJPBhN6tw&usqp=CAU"
              />
            </div>
            <div>
              <div>
                <span className="text-[#3F4354] text-[26px] font-openSans_regular leading-none">
                  Football Lovers
                </span>
              </div>
              <div>
                <span className="text-[#97989D] text-[14px] font-openSans_semiBold  leading-none">
                  Created by{" "}
                  <span className="text-[#3F4354]">Demarai Gray</span>
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="flex space-x-3">
              <button className="bg-[#0493A3] text-white text-[12px] font-openSans_medium flex items-center justify-center space-x-2 h-[40px] w-[84px] rounded">
                <div>
                  <img src={shareIcon.default} />
                </div>
                <div>
                  <span>Share</span>
                </div>
              </button>
              <button className="bg-[#F5F5F5] text-[#515165] text-[12px] font-openSans_medium flex items-center justify-center space-x-2 h-[40px] w-[84px] rounded">
                <div>
                  <img src={leaveIcon.default} />
                </div>
                <div>
                  <span>Leave</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
