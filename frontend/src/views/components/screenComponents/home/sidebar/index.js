import FilterFeed from "../filterFeed";
import GoPremium from "../goPremium";
import PinnedGroups from "../pinnedGroups";
import WebinarsAndTraining from "../webinarsAndTraining";
const SideBar = () => {
  return (
    <div className="space-y-5">
      <GoPremium />
      <FilterFeed />
      <WebinarsAndTraining />
      <PinnedGroups />
    </div>
  );
};

export default SideBar;
