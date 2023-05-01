import { Images } from "config/images";
import React from "react";

const FilterFeed = () => {
  const { newIcon, starIcon, friendsIcon } = Images;

  return (
    <div className="hidden lg:col-span-3 lg:block xl:col-span-2 ">
      <nav aria-label="Sidebar" className="sticky top-4 space-y-4">
        <section>
          <div className="rounded-2xl bg-white flex items-center flex-col space-y-3 py-3 px-2">
            <div className="p-[5px] flex w-full items-center space-x-2 rounded-md">
              <div className="bg-c_F5F5F5 rounded-md p-[10px]">
                <img src={newIcon.default} />
              </div>
              <div className="text-white flex flex-col">
                <span className="text-c_515165 text-[12px] font-openSans_bold">
                  New Feeds
                </span>
                <span className="text-c_949494 text-[8px] font-openSans_regular">
                  Find the latest update
                </span>
              </div>
            </div>
            <div className="p-[5px] bg-c_FFF5E6 flex w-full items-center space-x-2 rounded-md">
              <div className="bg-white rounded-md p-[10px]">
                <img src={starIcon.default} />
              </div>
              <div className=" flex flex-col">
                <span className="text-c_515165 text-[12px] font-openSans_bold">
                  Wall of Fame
                </span>
                <span className="text-c_949494 text-[8px] font-openSans_regular">
                  Shots featured today by curators
                </span>
              </div>
            </div>
            <div className="p-[5px] flex w-full items-center space-x-2 rounded-md">
              <div className="bg-c_F5F5F5 rounded-md p-[10px]">
                <img src={friendsIcon.default} />
              </div>
              <div className=" flex flex-col">
                <span className="text-c_515165 text-[12px] font-openSans_bold">
                  From Friends{" "}
                  <span className="p-0.5 px-1 text-xs bg-tahiti-600 rounded-md text-white">
                    12
                  </span>
                </span>

                <span className="text-c_949494 text-[8px] font-openSans_regular">
                  Explore from your favorite people
                </span>
              </div>
            </div>
          </div>
        </section>
      </nav>
    </div>
  );
};

export default FilterFeed;
