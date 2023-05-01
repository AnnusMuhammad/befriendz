import React from "react";

const ProfileTabs = ({ activeTab, setActiveTab }) => {
  const handleClick = (item) => {
    setActiveTab(item);
  };
  return (
    <div className="relative isolate bg-white rounded-2xl p-4 space-y-5">
      <div className="flex flex-wrap space-x-10 items-center justify-between w-full">
        {["My Posts", "Liked Posts", "Webinars", "Training"]?.map((item) => (
          <button
            onClick={() => handleClick(item)}
            className={`${
              activeTab === item
                ? "bg-[#FD6769] text-white "
                : "bg-white text-[#949494]"
            } h-[42px] w-[123px] rounded-full flex justify-center items-center outline-none`}
          >
            <span className="text-[18px] font-openSans_semiBold ">{item}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProfileTabs;
