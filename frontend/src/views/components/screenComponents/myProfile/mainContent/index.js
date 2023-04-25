import { Fragment } from "react";
import Post from "views/components/shared/post";

const MainContent = () => {
  return (
    <Fragment>
      <div className="mx-auto xl:grid xl:grid-cols-7 px-3 lg:px-4 lg:gap-8">
        <div className="col-span-5">
          <div className="space-y-5">
            {Array?.from({ length: 10 })?.map(() => (
              <Post />
            ))}
            {Post}
          </div>
        </div>
        <aside className="hidden xl:block col-span-2"></aside>
      </div>
    </Fragment>
  );
};
export default MainContent;
