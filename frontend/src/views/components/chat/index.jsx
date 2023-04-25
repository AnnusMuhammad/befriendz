import React from "react";
import ChatBox from "./ChatBox";

const ChatObjs = [{ chatDetails: 1 }, { chatDetails: 1 }];

const Chat = () => {
  return (
    <>
      <div className={`fixed bottom-1 z-100 right-1`}>
        <div className="relative flex flex-row gap-1">
          {ChatObjs.map(() => (
            <ChatBox />
          ))}
        </div>
      </div>
    </>
  );
};

export default Chat;
