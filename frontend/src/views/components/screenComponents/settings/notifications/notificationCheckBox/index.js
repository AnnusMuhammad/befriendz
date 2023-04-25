import React from "react";

const NotificationCheckBox = (props) => {
  const { label = "", labelClass = "", className = "", ...rest } = props;
  return (
    <div className={`flex justify-between items-center w-full ${className}`}>
      <div>
        <span
          className={`text-[#515165] text-[14px] font-openSans_medium ${labelClass}`}
        >
          {label}
        </span>
      </div>
      <div>
        <input
          type="checkbox"
          className={`h-[20px] w-[20px] rounded-md accent-[#30B52D] text-white checked:bg-white checked:text-white`}
        />
      </div>
    </div>
  );
};

export default NotificationCheckBox;
