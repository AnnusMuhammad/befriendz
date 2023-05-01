import { Fragment } from "react";
import PlaceAd from "views/components/shared/placeAd";
import CreateGroup from "../createGroup";
import GroupCards from "../groupCards";
import PageTabs from "../../tabs";
import Search from "views/components/shared/search";

const MainContent = ({ activeTab, setActiveTab }) => {
  const rightSide = () => (
    <>
      <CreateGroup />
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
                  <Search placeholder="Find Any Group Here..." />
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
                  {Array?.from({ length: 9 })?.map(() => (
                    <GroupCards />
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
