import { Images } from "config/images";
import React, { useRef } from "react";
const { searchIcon } = Images;
const TableSearchAndFilter = () => {
  const datePickerRefF = useRef(null);
  const handleClick = () => {
    datePickerRefF.current.focus();
    datePickerRefF.current.focus();
  };
  return (
    <div className="flex items-center gap-2">
      <div className="w-full">
        <div className="relative">
          <input
            placeholder="Search"
            className="text-[#949494] bg-[#F5F5F5] px-3 h-[46px] w-[313.6px] rounded outline-none"
          />
          <div className="absolute top-0 right-0 bg-[#F5F5F5] h-full flex items-center p-2">
            <img className="cursor-pointer" src={searchIcon.default} />
          </div>
        </div>
      </div>
      <div className="w-full">
        <button
          onClick={() => handleClick()}
          className="text-[#949494] bg-[#F5F5F5] px-3 h-[46px] w-[131px] rounded outline-none"
        >
          <span className="text-[14px] text-[#2A2A2A] font-openSans_semiBold">
            Filter by Date
          </span>
        </button>
        {/* <input type="date"  ref={datePickerRefF} /> */}
      </div>
    </div>
  );
};

export default TableSearchAndFilter;
