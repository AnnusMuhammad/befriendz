import { Images } from "config/images";
import React from "react";
const { profileAdIcon } = Images;
const SideBar = () => {
  return (
    <section>
      <div className="rounded-2xl bg-white space-y-5 py-5 px-5">
        <div>
          <span className="text-[#3F4354] text-[16px] font-openSans_bold">
            Moderators
          </span>
        </div>

        <div className="space-y-5">
          {Array.from({ length: 5 })?.map((item) => (
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <img
                  className="w-[30px] h-[30px] rounded-full object-cover"
                  src="https://media.istockphoto.com/id/493483718/photo/beautiful-woman.jpg?s=612x612&w=0&k=20&c=livpJZTkkIp_AI63T_FwIG6d7jcNgiCXKgNvIf4g-oI="
                />
                <div>
                  <span className="text-[#3F4354] text-[14px] font-openSans_medium">
                    Soham
                  </span>
                </div>
              </div>
              <div>
                <div className="bg-[#E6F4F6] w-[30px] h-[30px] rounded-full flex justify-center items-center cursor-pointer">
                  <img src={profileAdIcon.default} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SideBar;
