import React from "react";

const SuggestionFriends = () => {
  return (
    <li className="flex items-center space-x-3 py-[0.5rem]">
      <div className="flex-shrink-0">
        <img
          className="h-[40px] w-[40px] rounded-full"
          src={
            "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          }
          alt=""
        />
      </div>
      <div className="min-w-0 flex-1">
        <p className="font-openSans_semiBold text-[#2A2A2A] text-[14px] mb-0">
          John Cooper
        </p>
        <p className="font-openSans_regular text-c_949494 text-[10px] mb-0">
          @skublaven01
        </p>
      </div>
      <div className="flex-shrink-0">
        <button
          type="button"
          className="inline-flex rounded-md bg-c_0493A3 py-[8px] px-[18px] text-[12px] font-openSans_semiBold text-white focus-visible:outline-none hover:brightness-110"
        >
          Befriend
        </button>
      </div>
    </li>
  );
};

export default SuggestionFriends;
