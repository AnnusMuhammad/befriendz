import React from "react";
import ChatBox from "./ChatBox";

const ChatObjs = [{ chatDetails: 1 }, { chatDetails: 1 }];

const Chat = () => {
  const isMobile = /Mobile/.test(navigator.userAgent);

  return (
    <>
      <div className={`fixed bottom-1 z-100 right-1`}>
        <div className="relative flex flex-row gap-1">
          {/* to restrict 1 chatbox in mobile screen */}
          {ChatObjs.slice(0, isMobile ? 1 : ChatObjs.length).map(() => (
            <ChatBox />
          ))}
        </div>
      </div>
    </>
  );
};

export default Chat;
