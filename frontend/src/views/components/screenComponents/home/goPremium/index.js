import { Images } from "config/images";
import React from "react";
const { medalStarIcon } = Images;
const GoPremium = () => {
  return (
    <section>
      <div className="rounded-2xl bg-c_FD6769 flex items-center">
        <div className="px-5 py-6 flex w-full items-center space-x-2">
          <div className="bg-white rounded-md w-[28px] h-[28px] flex justify-center items-center">
            <img src={medalStarIcon.default} />
          </div>
          <div className="text-white flex flex-col">
            <span className="text-[12px] font-openSans_bold">Go Premium</span>
            <span className="text-[8px] font-openSans_regular">
              Join Us and Let’s Talk
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoPremium;
