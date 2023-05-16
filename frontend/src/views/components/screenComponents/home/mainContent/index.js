import { Fragment } from "react";
import PlaceAd from "views/components/shared/placeAd";
import Post from "views/components/shared/post";
import MeetNewPeople from "../meetNewPeople";
import WantToBeFriends from "../wantToBeFriends";
import AddPost from "../addPost";
import RightSideBar from "views/components/skeletons/rightSidebar/rightSidebar";
import PostItemSkeleton from "views/components/skeletons/post/postItem";
import Post1 from "views/components/shared/post/post1";
import Post2 from "views/components/shared/post/post2";
import { USER_TYPE } from "constants/user.constant";

const MainContent = ({ data, isFetching, posts }) => {
  const rightSide = () => (
    <>
      {data?.totalRequests?.[0]?.total > 0 && (
        <WantToBeFriends friendRequests={data?.friendRequests} />
      )}
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
                {!isFetching ? rightSide() : null}
              </aside>
              <div className="space-y-5">
                <div>
                  <AddPost />
                </div>
                {!isFetching ?
                  <>
                    {posts.posts?.length > 0 ? 
                    posts.posts?.map((item, index) => (item.author.type === USER_TYPE.BUSINESS) ? <Post2 post={item} key={index}/> : <Post1 post={item} key={index}/> )
                    : <p className="font-openSans_semiBold text-c_949494 text-[14px] m-0">No post found to show</p>}
                  </>
                  : Array.from({ length: 10 }).map((item, index) => (
                    <PostItemSkeleton  key={index}/>
                  ))}

              </div>
            </div>
          </div>
        </div>
        <aside className="hidden xl:block col-span-2 space-y-6">
          {!isFetching ? rightSide() : <RightSideBar />}
        </aside>
      </div>
    </Fragment>
  );
};
export default MainContent;
