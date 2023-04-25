import React from "react";
import AudioChatPlayer from "./AudioChatPlayer";
import Avatar from "./Avatar";

const ChatMessage = (props) => {
  const { sender, audio, text } = props;

  if (sender) {
    return (
      <div className="col-start-1 col-end-10 p-3">
        <div className="flex flex-row items-center">
          <Avatar />
          <div className="relative ml-3 z-0 text-sm bg-[#FFE1E1] text-[#FD6769] font-openSans_semiBold py-2 px-4 rounded-md rounded-tl-none">
            {audio ? <AudioChatPlayer /> : <div>{text}</div>}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="col-start-4 col-end-13 p-3">
      <div className="flex items-center justify-start flex-row-reverse">
        <Avatar />
        <div className="relative mr-3 z-0 text-sm bg-[#FD6769] text-white py-2 px-4 rounded-md rounded-tr-none font-openSans_regular">
          {audio ? <AudioChatPlayer /> : <div>{text}</div>}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
