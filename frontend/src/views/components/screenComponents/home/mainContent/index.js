import { Fragment } from "react";
import PlaceAd from "views/components/shared/placeAd";
import Post from "views/components/shared/post";
import MeetNewPeople from "../meetNewPeople";
import WantToBeFriends from "../wantToBeFriends";
import AddPost from "../addPost";

const MainContent = ({data, isFetching}) => {
  const rightSide = () => (
    <>
      {data?.totalRequests?.[0]?.total > 0 && <WantToBeFriends friendRequests={data?.friendRequests} />}
      <PlaceAd />
      <MeetNewPeople />
      <PlaceAd />
    </>
  );
  return (
    <Fragment>
      <div className="mx-auto xl:grid xl:grid-cols-7 px-3 lg:px-4 lg:gap-8">
        <div className="col-span-5">
          <div>
            <div className="xl:space-y-0 space-y-10 ">
              <aside className="xl:hidden space-y-6">
                {!isFetching ? rightSide(): null}
              </aside>
              <div className="space-y-5">
                <div>
                  <AddPost />
                </div>
                {Array?.from({ length: 10 })?.map(() => (
                  <Post linkTo="/view-post" />
                ))}
                {Post}
              </div>
            </div>
          </div>
        </div>
        <aside className="hidden xl:block col-span-2 space-y-6">
          {!isFetching ? rightSide(): null}
        </aside>
      </div>
    </Fragment>
  );
};
export default MainContent;
