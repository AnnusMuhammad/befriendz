import { Images } from "config/images";
import React from "react";
const { arrowRightIcon, musicIon, doubleArrowRightBlueIcon } = Images;

const PinnedGroupsList = () => (
  <div className="flex items-center space-x-3">
    <div className="flex-shrink-0">
      <div className="h-[32px] w-[32px] bg-c_FFE1E1 rounded-md flex items-center justify-center">
        <img className=" " src={musicIon.default} alt="" />
      </div>
    </div>
    <div className="">
      <p className="font-openSans_semiBold text-[#2A2A2A] text-[12px] mb-0">
        Music
      </p>
      <p className="font-openSans_regular text-c_949494 text-[10px] mb-0">
        82,645 posts
      </p>
    </div>
  </div>
);

const PinnedGroups = () => {
  return (
    <section className="space-y-5">
      <div className="rounded-2xl bg-white space-y-5 p-5">
        <>
          <div className="flex space-x-2 items-center">
            <span className="text-[#515165] font-openSans_bold text-[16px] leading-none">
              Pinned Groups
            </span>
            <span>
              <img src={arrowRightIcon.default} />
            </span>
          </div>
          <div className="space-y-4">
            {Array.from({ length: 5 })?.map((item) => (
              <PinnedGroupsList />
            ))}

            <div className="flex justify-center items-center space-x-2 cursor-pointer">
              <span className=" text-c_0493A3 text-[12px] font-openSans_light">
                Explore
              </span>
              <img src={doubleArrowRightBlueIcon.default} />
            </div>
          </div>
        </>
      </div>
    </section>
  );
};

export default PinnedGroups;
