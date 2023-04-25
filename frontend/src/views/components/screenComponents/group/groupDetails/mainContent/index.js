import { Fragment } from "react";
import PlaceAd from "views/components/shared/placeAd";
import Post from "views/components/shared/post";
import Attendees from "../attendees";

const MainContent = () => {
  return (
    <Fragment>
      <div className="mx-auto xl:grid xl:grid-cols-7 px-3 lg:px-4 lg:gap-8">
        <div className="col-span-5">
          <div>
            <div className="xl:space-y-0 space-y-10 ">
              <aside className="xl:hidden space-y-6">
                <PlaceAd />
                <Attendees />
                <PlaceAd />
              </aside>
              <div>
                <div className="space-y-5">
                  {Array?.from({ length: 4 })?.map(() => (
                    <Post />
                  ))}
                  {Post}
                </div>
              </div>
            </div>
          </div>
        </div>
        <aside className="hidden xl:block col-span-2 space-y-6">
          <PlaceAd />
          <Attendees />
          <PlaceAd />
        </aside>
      </div>
    </Fragment>
  );
};
export default MainContent;
