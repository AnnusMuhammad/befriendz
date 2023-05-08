import { Fragment } from "react";
import FindFriends from "../findFriends";
import FreindListItem from "views/components/shared/friendRequest";
import FriendRequestSkeleton from "views/components/skeletons/friends/friendRequest";
import Search from "views/components/shared/search";

const MainContent = ({ isFetching, friends, friendRequests, activeOPtion, onFriendStatusChange }) => {
  const right = () => (
    <>
      <FindFriends />
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
                <div>
                  <Search placeholder="Find Friends" />
                </div>

                <div className="space-y-5 mt-5">
                  <div className="relative isolate gap-6 bg-white rounded-2xl p-[1rem]">
                    <div>
                      <h1 className="text-[#515165] text-[24px] font-openSans_bold">
                         {activeOPtion === "suggestions"  && 'Suggested For You'}
                            {activeOPtion === "friends" && 'My Friends'}
                            {activeOPtion === "request" && 'Friend Requests'}
                      </h1>
                    </div>
                    <div>
                      <ul className="my-[15px] divide-y divide-[#E6F4F6]">
                        {!isFetching ? (
                          <>
                            {/* {activeOPtion === "suggestions" ? (
                              <SuggestionFriends />
                            ) : null} */}
                            {activeOPtion === "friends" ? (
                              <>
                                {friends &&
                                friends.friends &&
                                friends.friends.length > 0 ? (
                                  friends.friends.map(
                                    (item, index) => (                                      
                                      <FreindListItem onFriendStatusChange={onFriendStatusChange} friendRequest={item} key={index} />
                                    )
                                  )
                                ) : (
                                  <p className="font-openSans_semiBold text-c_949494 text-[14px] m-0">
                                    You dont have any friend.
                                  </p>
                                )}
                              </>
                            ) : null}
                            {activeOPtion === "request" ? (
                              <>
                                {friendRequests &&
                                friendRequests.friendRequests &&
                                friendRequests.friendRequests.length > 0 ? (
                                  friendRequests.friendRequests.map(
                                    (item, index) => (
                                      <FreindListItem onFriendStatusChange={onFriendStatusChange} friendRequest={item}  key={index} />
                                    )
                                  )
                                ) : (
                                  <p className="font-openSans_semiBold text-c_949494 text-[14px] m-0">
                                    You dont have any friend request.
                                  </p>
                                )}
                              </>
                            ) : null}
                          </>
                        ) : (
                          <>
                            {Array.from({ length: 10 }).map((item, index) => (
                              <FriendRequestSkeleton key={index}/>
                            ))}
                          </>
                        )}
                      </ul>
                    </div>
                  </div>
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
