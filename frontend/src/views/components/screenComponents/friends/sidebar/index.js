import { Images } from "config/images";
import React from "react";
const { profileAdIcon, profileTickIcon, Friends, friendsProfileIcon } = Images;
const leftMenuOptionArray = [
  {
    title: "Suggested For You",
    icon: profileTickIcon,
    iconClass: "bg-[#C5EBC4]",
    itemClass: "bg-[#EAF8EA]",
    subtitle: "Meet New People",
    option: "suggestions",
  },
  {
    title: "My Friends",
    icon: friendsProfileIcon,
    iconClass: "bg-[#FFE3B8]",
    itemClass: "bg-[#FFF5E6]",
    subtitle: "See list of all your friends",
    option: "friends",
  },
  {
    title: "Friend Requests",
    icon: profileAdIcon,
    iconClass: "bg-[#B9E1E5]",
    itemClass: "bg-[#E6F4F6]",
    subtitle: "See who wants to be your friends",
    option: "request",
  },
];
const SideBar = ({ activeOPtion, setActiveOption }) => {
  return (
    <section>
      <div className="space-y-5">
        <div className="rounded-2xl bg-white flex items-center flex-col space-y-3 py-3 px-2">
          {leftMenuOptionArray?.map((item) => (
            <div
              onClick={() => setActiveOption(item)}
              className={`cursor-pointer p-[5px] flex w-full items-center space-x-2 rounded-md ${
                activeOPtion?.option === item?.option ? item?.itemClass : ""
              }`}
            >
              <div
                className={`bg-c_F5F5F5 rounded-md w-[28px] h-[28px] flex justify-center items-center ${
                  activeOPtion?.option === item?.option ? item?.iconClass : ""
                }`}
              >
                <img src={item?.icon?.default} />
              </div>
              <div className="text-white flex flex-col">
                <span className="text-c_515165 text-[12px] font-openSans_bold">
                  {item?.title}
                </span>
                <span className="text-c_949494 text-[8px] font-openSans_regular">
                  {item?.subtitle}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SideBar;
