import React from "react";
import { Images } from "../../../config/images";
import Avatar from "./Avatar";

const ChatHeader = (props) => {
  const { setIsOpen } = props;
  const { callIcon, videoIcon, minimizeIcon, expandIcon } = Images;

  return (
    <>
      <div className="flex sm:items-center justify-between py-1 border-b border-[#F5F5F5]">
        <div className="relative flex items-center space-x-4">
          <div className="relative">
            <Avatar />
          </div>
          <div className="flex flex-col leading-tight">
            <div className=" mt-1 flex items-center">
              <span className="text-gray-700 mr-2 text-sm font-semibold">
                Anderson Vanhron
              </span>
            </div>
            <span className="text-xs text-c_30B52D">Online</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg h-6 w-8 "
          >
            <img src={callIcon.default} />
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg h-6 w-8 "
          >
            <img src={videoIcon.default} />
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg h-6 w-8 "
          >
            <img src={expandIcon.default} />
          </button>
          <button
            type="button"
            onClick={() => {
              setIsOpen(false);
            }}
            className="inline-flex items-center justify-center rounded-lg h-6 w-8 "
          >
            <img src={minimizeIcon.default} />
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatHeader;
