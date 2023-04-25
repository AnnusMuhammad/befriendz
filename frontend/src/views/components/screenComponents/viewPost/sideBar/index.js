import PostStats from "../postStats";
import PostedBy from "../postedBy";
const SideBar = () => {
  return (
    <div className="space-y-5 mt-16">
      <PostStats />
      <PostedBy />
    </div>
  );
};

export default SideBar;
