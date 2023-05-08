import React from "react";

const Communation = (props) => {
  const { text, image, baseColor } = props.content;
  return (
    <>
      <div className="text-xs flex cursor-pointer flex-col items-center justify-between">
        <div
          className={`flex flex-col rounded-full h-10 w-10 items-center justify-center bg-[${baseColor}]`}
          style={{ background: baseColor }}
        >
          <div>{image}</div>
        </div>
        <div>{text}</div>
      </div>
    </>
  );
};

export default Communation;
