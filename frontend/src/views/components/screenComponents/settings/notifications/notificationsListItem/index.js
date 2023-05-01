import { Switch } from "@headlessui/react";
import { useState } from "react";
import Checkbox from "views/components/shared/form-elements/checkbox";
import NotificationCheckBox from "../notificationCheckBox";
import CustomGreenCheckbox from "views/components/shared/CustomGreenCheckbox";
import CustomSwitch from "./CustomSwitch";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const checkBoxArray = ["New Notifications", "Direct Messages", "Mentions"];
const NotificationListItem = ({ item, ...rest }) => {
  const [enabled, setEnabled] = useState(true);

  return (
    <div className="py-2" {...rest}>
      <div>
        <div className="flex justify-between items-center w-full">
          <h3 className="text-[#2A2A2A] font-openSans_bold text-[18px]">
            {item?.label}
          </h3>
          <div>
            <CustomSwitch enabled={enabled} setEnabled={setEnabled} />
          </div>
        </div>
      </div>
      <div className="mt-5 space-y-2 max-w-sm">
        {checkBoxArray?.map((item) => (
          <NotificationCheckBox
            label={item}
            className={`${!enabled && "opacity-50"}`}
            disabled={!enabled}
          />
        ))}
      </div>
    </div>
  );
};

export default NotificationListItem;
