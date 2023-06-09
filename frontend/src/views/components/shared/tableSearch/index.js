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
    <div className="flex items-center gap-2 flex-wrap md:flex-nowrap">
      <div className="w-full">
        <div className="relative">
          <input
            placeholder="Search"
            className="text-[#949494] bg-[#F5F5F5] px-3 h-[46px] w-full rounded outline-none"
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
          <div className="flex items-center gap-1">
            <span className="text-[14px] text-[#2A2A2A] font-openSans_semiBold">
              Filter by Date
            </span>
            <svg
              width="12"
              height="7"
              viewBox="0 0 12 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.33657 6.84913C6.24717 6.94573 6.12593 7 5.99952 7C5.87311 7 5.75188 6.94573 5.66248 6.84913L0.139104 0.879073C0.0726452 0.807014 0.0274105 0.715302 0.00910282 0.615497C-0.00920486 0.515691 0.00023365 0.412262 0.0362291 0.318246C0.0722246 0.224231 0.133166 0.143839 0.21137 0.0872035C0.289574 0.0305686 0.381539 0.000226021 0.475674 9.53674e-07L11.5224 9.53674e-07C11.6168 -0.000181198 11.7092 0.0299401 11.7877 0.0865474C11.8663 0.143155 11.9275 0.223699 11.9637 0.317968C11.9998 0.412237 12.0093 0.515986 11.9908 0.616063C11.9723 0.716139 11.9268 0.808036 11.8599 0.880103L6.33657 6.84913Z"
                fill="#2A2A2A"
              />
            </svg>
          </div>
        </button>
        {/* <input type="date"  ref={datePickerRefF} /> */}
      </div>
    </div>
  );
};

export default TableSearchAndFilter;
