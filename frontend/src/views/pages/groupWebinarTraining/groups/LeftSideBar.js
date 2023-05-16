import React from "react";
import FilterItems from "views/pages/buyAndSell/components/FilterItems";
import Sell from "views/pages/buyAndSell/components/Sell";
import { Images } from "config/images";
import { Link } from "react-router-dom";

const SideHeader = (props) => {
  const { title, icon, backgroundColor } = props;
  return (
    <div
      className={`p-2 py-3 flex flex-col w-full items-center space-x-2 rounded-xl ${backgroundColor}`}
    >
      <div className="flex flex-row w-full items-center gap-1 ml-3">
        <div className="">
          <img src={icon.default} />
        </div>

        <span className="text-c_515165 text-md font-openSans_semiBold">
          {title}
        </span>
      </div>
      <span className="text-c_949494 text-[8px] font-openSans_regular">
        List updated daily at midnight PST.
      </span>
    </div>
  );
};

const GroupListItem = () => {
  return (
    <div className="flex items-center space-x-3 w-full">
      <div className="flex-shrink-0">
        <img
          className="h-[40px] w-[40px] rounded-full"
          src={
            "https://th.bing.com/th/id/OIP.yd8H6xp_oq4OYbfQmz25eQAAAA?pid=ImgDet&w=300&h=300&rs=1"
          }
          alt=""
        />
      </div>
      <div className="min-w-0 flex-1">
        <p className="font-openSans_semiBold text-[#2A2A2A] text-[14px] mb-0">
          Dance Drama
        </p>
        <p className="max-w-[150px] font-openSans_regular truncate text-c_949494 text-[10px] mb-0">
          Share how to succeed and Share how to succeed and
        </p>
      </div>
    </div>
  );
};
const LeftSideBar = () => {
  const { newIcon, starIcon, fastestGrowingIcon, doubleArrowRightBlueIcon } =
    Images;
  return (
    <div className=" lg:col-span-3 lg:block xl:col-span-2 ">
      <nav aria-label="Sidebar" className="sticky top-4 space-y-4">
        <div className=" lg:col-span-3 lg:block xl:col-span-2 ">
          <nav aria-label="Sidebar" className="sticky top-4 space-y-4">
            <section>
              <div className="rounded-2xl bg-white flex items-center flex-col gap-4 space-y-3 py-3 px-2">
                <div className="flex flex-col w-full items-center gap-2 ">
                  <SideHeader
                    backgroundColor="bg-[#E6F4F6]"
                    icon={fastestGrowingIcon}
                    title="Fastest Growing"
                  />
                  {Array(3)
                    .fill(0)
                    .map((_, index) => (
                      <GroupListItem />
                    ))}
                  <Link
                    to="/group-details"
                    className="flex justify-center items-center space-x-2 cursor-pointer"
                  >
                    <span className=" text-c_0493A3 text-[12px] font-openSans_light">
                      See More
                    </span>
                    <img src={doubleArrowRightBlueIcon.default} />
                  </Link>
                </div>
                <div className="bg-[#E6F4F6] h-[1px] w-full " />

                <div className="flex flex-col w-full items-center gap-2 ">
                  <SideHeader
                    backgroundColor="bg-[#FFF5E5]"
                    icon={starIcon}
                    title="Most Popular"
                  />
                  {Array(3)
                    .fill(0)
                    .map((_, index) => (
                      <GroupListItem />
                    ))}
                  <Link
                    to="/group-details"
                    className="flex justify-center items-center space-x-2 cursor-pointer"
                  >
                    <span className=" text-c_0493A3 text-[12px] font-openSans_light">
                      See More
                    </span>
                    <img src={doubleArrowRightBlueIcon.default} />
                  </Link>
                </div>
                <div className="bg-[#E6F4F6] h-[1px] w-full " />

                <div className="flex flex-col w-full items-center gap-2 ">
                  <SideHeader
                    backgroundColor="bg-[#EAF8EA]"
                    icon={newIcon}
                    title="Newly Launched"
                  />
                  {Array(3)
                    .fill(0)
                    .map((_, index) => (
                      <GroupListItem />
                    ))}
                  <Link
                    to="/group-details"
                    className="flex justify-center items-center space-x-2 cursor-pointer"
                  >
                    <span className=" text-c_0493A3 text-[12px] font-openSans_light">
                      See More
                    </span>
                    <img src={doubleArrowRightBlueIcon.default} />
                  </Link>
                </div>
              </div>
            </section>
          </nav>
        </div>
      </nav>
    </div>
  );
};

export default LeftSideBar;
