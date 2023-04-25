import { Switch } from "@headlessui/react";
import { useState } from "react";
import Checkbox from "views/components/shared/form-elements/checkbox";
import NotificationCheckBox from "../notificationCheckBox";
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
            <Switch
              checked={enabled}
              onChange={setEnabled}
              className={classNames(
                enabled ? "bg-[#30B52D]" : "bg-[#F5F5F5]",
                "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none"
              )}
            >
              <span className="sr-only">Use setting</span>
              <span
                aria-hidden="true"
                className={classNames(
                  enabled
                    ? "bg-white translate-x-5"
                    : "bg-[#949494] translate-x-0",
                  "pointer-events-none inline-block h-5 w-5 transform rounded-full shadow ring-0 transition duration-200 ease-in-out"
                )}
              />
            </Switch>
          </div>
        </div>
      </div>
      <div className="mt-5 space-y-2 max-w-sm">
        {checkBoxArray?.map((item) => (
          <NotificationCheckBox label={item} className={`${!enabled && "opacity-50"}`}/>
        ))}
      </div>
    </div>
  );
};

export default NotificationListItem;
