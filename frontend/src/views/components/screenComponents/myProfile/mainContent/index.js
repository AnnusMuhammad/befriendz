import { Fragment, useState } from "react";
import Post from "views/components/shared/post";
import FaceTimeAndPhoneCall from "../faceTimePhoneCall";
import FaceRequest from "../faceRequest";
import FaceTimeLogs from "../faceTimeLogs";
import ProfileTabs from "../profileTabs";
import { useParams } from "react-router-dom";

const MainContent = ({isMyProfile}) => {
  const [activeTab, setActiveTab] = useState("My Posts");
  const right = () => (
    <>
      {isMyProfile ? (
        <>
          <FaceTimeAndPhoneCall />
          <FaceRequest />
          <FaceTimeLogs />
        </>
      ) : (
        <></>
      )}
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
                <div className="space-y-5">
                  <div>
                    <ProfileTabs
                      activeTab={activeTab}
                      setActiveTab={setActiveTab}
                    />
                  </div>
                  {Array?.from({ length: 4 })?.map((item, index) => (
                    <Post key={index} />
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
