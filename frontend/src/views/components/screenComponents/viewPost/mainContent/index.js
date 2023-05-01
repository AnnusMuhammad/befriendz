import { Fragment } from "react";
import Post from "../post";
import Comments from "../comments";
import AuthorProfile from "../authorProfile";
import MorePost from "views/components/shared/morePost";

const MainContent = () => {
  const rightSide = () => (
    <>
      <AuthorProfile />
      <MorePost postBy="Skubla Ven"/>
    </>
  );
  return (
    <Fragment>
      <div className="mx-auto xl:grid xl:grid-cols-7 px-3 lg:px-4 lg:gap-8">
        <div className="col-span-5">
          <div>
            <div className="xl:space-y-0 space-y-10 ">
              <aside className="xl:hidden space-y-6">{rightSide()}</aside>
              <div className="space-y-5">
                <Post />
              </div>
            </div>
          </div>
        </div>
        <aside className="hidden xl:block col-span-2 space-y-6">
          {rightSide()}
        </aside>
      </div>
    </Fragment>
  );
};
export default MainContent;
