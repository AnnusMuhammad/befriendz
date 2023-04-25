import { Images } from "config/images";
import React, { useEffect, useRef, useState } from "react";
import EmojiPicker from "emoji-picker-react";

import ChatHeader from "./ChatHeader";
import ChatMessage from "./ChatMessage";

const ChatBox = () => {
  const { sendIcon, voiceIcon } = Images;
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [chatInput, setChatInput] = useState("");
  let msgs = [
    { sender: true, audio: false, text: "How are you?" },
    { sender: false, audio: false, text: "How are you?" },
    { sender: true, audio: false, text: "How are you?" },

    { sender: true, audio: false, text: "How are you?" },

    { sender: false, audio: true, text: "How are you?" },

    { sender: true, audio: false, text: "How are you?" },
  ];
  const [messages, setMessages] = useState(msgs);

  const [isOpen, setIsOpen] = useState(true);

  const divRef = useRef(null);
  const scrollDown = () => {
    divRef.current.scrollTop = divRef.current.scrollHeight;
  };
  useEffect(() => {
    scrollDown();
  }, []);

  useEffect(() => {
    scrollDown();
  }, [messages]);

  const handleEmoji = (e) => {
    setChatInput(chatInput + e.emoji);
  };
  const handleChange = (e) => {
    setChatInput(e.target.value);
  };

  const handleSentMessage = (e) => {
    e.preventDefault();
    setMessages([...messages, { text: chatInput, audio: false, sender: true }]);
    setChatInput("");
  };
  return (
    <>
      {isOpen && (
        <div className={` z-100 group flex justify-center`}>
          <div className="flex h-[500px] w-[450px] antialiased text-gray-800">
            <div className="flex flex-row h-full w-full overflow-x-hidden">
              <div className="flex flex-col flex-auto h-full p-3">
                <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-white h-full p-4 shadow-sm border-2 border-[#f7f7f7]">
                  <div>
                    <ChatHeader setIsOpen={setIsOpen} />
                  </div>
                  <div
                    className="flex flex-col h-full overflow-x-auto mb-4 "
                    ref={divRef}
                  >
                    <div className="flex flex-col h-full">
                      <div className="grid grid-cols-12 gap-y-2">
                        {messages.map((msg) => (
                          <ChatMessage
                            sender={msg.sender}
                            audio={msg.audio}
                            text={msg.text}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-2">
                    <div className="flex-grow ml-4">
                      <div className="relative w-full">
                        <div className="absolute flex items-center w-12 left-2 top-1 h-full">
                          <div className="relative  flex-row">
                            <button
                              onClick={() => {
                                setShowEmojiPicker(!showEmojiPicker);
                              }}
                              className="   w-12  text-gray-400 hover:text-gray-600"
                            >
                              <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                            </button>
                            <div className="absolute bottom-10 left-0">
                              {showEmojiPicker && (
                                <EmojiPicker
                                  className=" absolute top-0 z-100"
                                  height={400}
                                  onEmojiClick={handleEmoji}
                                />
                              )}
                            </div>
                          </div>
                        </div>
                        <form onSubmit={handleSentMessage}>
                          <input
                            type="text"
                            placeholder="Type here your message..."
                            value={chatInput}
                            onChange={handleChange}
                            className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 px-10 h-10 text-[#858EAD] font-openSans_regular text-[12px]"
                          />
                        </form>
                        <button className="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600">
                          <img src={voiceIcon.default} className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                    <div className="ml-4">
                      <button
                        onClick={handleSentMessage}
                        className="flex items-center justify-center rounded-xl text-white px-1 py-1 flex-shrink-0"
                      >
                        <img src={sendIcon.default} className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBox;
