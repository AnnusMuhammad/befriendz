import { Fragment } from "react";
import PlaceAd from "views/components/shared/placeAd";
import WebinarTraining from "views/components/shared/webinarTraining";
import PageTabs from "../../tabs";
import CreateWebinar from "../createWebinar";
import Search from "views/components/shared/search";

const MainContent = ({ activeTab, setActiveTab }) => {
  const rightSide = () => (
    <>
      <CreateWebinar />
      <PlaceAd />
      <PlaceAd />
      <PlaceAd />
    </>
  );
  return (
    <Fragment>
      <div className="mx-auto xl:grid xl:grid-cols-7 px-3 lg:px-4 lg:gap-8">
        <div className="col-span-5 flex flex-col space-y-6">
          <PageTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          <div>
            <div className="xl:space-y-0 space-y-10 ">
              <aside className="xl:hidden space-y-6">{rightSide()}</aside>
              <div>
                <div className="mb-5">
                  <Search placeholder="Find Webinars" />
                </div>
                <div className="space-y-5 ">
                  {Array?.from({ length: 9 })?.map(() => (
                    <WebinarTraining linkTo={"/webinar-details"} />
                  ))}
                </div>
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
