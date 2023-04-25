import GoPremium from "../goPremium";
import PinnedGroups from "../pinnedGroups";
import WebinarsAndTraining from "../webinarsAndTraining";
const SideBar = () => {
  return (
    <div className="space-y-5 mt-16">
      <GoPremium />
      <WebinarsAndTraining />
      <PinnedGroups />
    </div>
  );
};

export default SideBar;
