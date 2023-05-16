import FilterFeed from "../filterFeed";
import GoPremium from "../goPremium";
import PinnedGroups from "../pinnedGroups";
import WebinarsAndTraining from "../webinarsAndTraining";
const SideBar = ({fetching}) => {
  return (
    <div className="space-y-5">
      {!fetching && 
        <>
          <GoPremium />
          <FilterFeed />
          <WebinarsAndTraining />
          <PinnedGroups />
        </>
      }
    </div>
  );
};

export default SideBar;
