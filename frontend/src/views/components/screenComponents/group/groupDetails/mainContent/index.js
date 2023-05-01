import { Fragment } from "react";
import PlaceAd from "views/components/shared/placeAd";
import Post from "views/components/shared/post";
import Attendees from "../attendees";
import EngageGroup from "../engageGroup";
import LiveHost from "views/components/shared/liveHost";
import { Images } from "config/images";
import ProfileSection from "../profileSection";
import Explore from "../explore";
const { shareIcon, leaveIcon } = Images;
const MainContent = () => {
  const right = () => (
    <>
      <EngageGroup />
      <LiveHost
        heading="Join Live"
        name="Bella craig is live now"
        image="https://media.licdn.com/dms/image/C4D03AQGg7qCuHavEdg/profile-displayphoto-shrink_200_200/0/1521010848026?e=1684972800&v=beta&t=dHLiCBHVZ8eXFgRx5RvfuTKIPuhhN0gf2q9cYsEivjU"
      />
      <PlaceAd />
      <Attendees />
      <PlaceAd />
    </>
  );
  return (
    <Fragment>
      <div className="mx-auto xl:grid xl:grid-cols-7 px-3 lg:px-4 lg:gap-8">
        <div className="col-span-5">
          <div>
            <div className="xl:space-y-0 space-y-10 ">
              <aside className="xl:hidden space-y-6">{right()}</aside>
              <div>
                <ProfileSection />
                <Explore />
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
          {right()}
        </aside>
      </div>
    </Fragment>
  );
};
export default MainContent;
