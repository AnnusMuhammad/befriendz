import { Images } from "config/images";
import React from "react";
const { friendsIcon } = Images;
const ActionBar = () => {
  return (
    <section>
      <div className="rounded-2xl bg-white flex items-center flex-col space-y-3 py-3 px-2">
        {[1, 1, 1, 1]?.map((item) => (
          <div className="p-[5px] flex w-full items-center space-x-2 rounded-md">
            <div className="bg-c_F5F5F5 rounded-md w-[28px] h-[28px] flex justify-center items-center">
              <img src={friendsIcon.default} />
            </div>
            <div className="text-white flex flex-col">
              <span className="text-c_949494 text-[14px] font-openSans_regular">
                3086 Comments
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ActionBar;
