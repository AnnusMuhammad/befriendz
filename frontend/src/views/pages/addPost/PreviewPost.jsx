import React from "react";

const PreviewPost = () => {
  return (
    <div className="flex flex-row items-center gap-2 ">
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 2C4.62907 2 0 7.36622 0 10.0003C0 12.6343 4.62907 18.0005 10 18.0005C15.3709 18.0005 20 12.6343 20 10.0003C20 7.36622 15.3709 2 10 2ZM10 16.5C5.59979 16.5 1.5 11.4703 1.5 10.0003C1.5 8.53024 5.59979 3.5 10 3.5C14.4002 3.5 18.5 8.53024 18.5 10.0003C18.5 11.4703 14.4002 16.5 10 16.5Z"
          fill="#515165"
        />
        <path
          d="M10.0005 6.5C8.93959 6.5 8.25067 6.74978 7.50049 7.49996C6.7503 8.25014 6.5 8.93906 6.5 9.99996C6.5 11 7 12 7.5 12.5C8.1083 13.1082 9 13.5 10 13.5C10.9537 13.4999 11.9036 13.0964 12.5 12.5C13.0964 11.9035 13.5 11 13.5 9.99996C13.5 9.06636 13 8 12.5 7.5C12 7 11 6.5 10.0005 6.5ZM10.0005 12.0001C9.47012 12.0001 8.96136 11.7893 8.58618 11.4143C8.21118 11.0391 8.0004 10.5304 8.0004 10C8.0004 9.46964 8.21118 8.96087 8.58618 8.58569C8.96135 8.21069 9.47012 7.99991 10.0005 7.99991C10.5309 7.99991 11.0396 8.21069 11.4148 8.58569C11.7898 8.96087 12.0006 9.46964 12.0006 10C12.0006 10.5304 11.7898 11.0391 11.4148 11.4143C11.0396 11.7893 10.5309 12.0001 10.0005 12.0001Z"
          fill="#515165"
        />
      </svg>

      <span className="text-[#949494] font-openSans_regular text-[16px]">
        Preview
      </span>
    </div>
  );
};

export default PreviewPost;