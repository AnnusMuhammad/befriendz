import { useState } from "react";
import { Images } from "../../../config/images";

const { arrowRightIcon, friendsProfileIcon, profileTickIcon, profileAdIcon } =
  Images;

const SuggestedLitItem = () => (
  <li className="flex items-center space-x-3 py-[0.5rem]">
    <div className="flex-shrink-0">
      <img
        className="h-[40px] w-[40px] rounded-full"
        src={
          "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        }
        alt=""
      />
    </div>
    <div className="min-w-0 flex-1">
      <p className="font-openSans_semiBold text-[#2A2A2A] text-[14px] mb-0">
        John Cooper
      </p>
      <p className="font-openSans_regular text-c_949494 text-[10px] mb-0">
        @skublaven01
      </p>
    </div>
    <div className="flex-shrink-0">
      <button
        type="button"
        className="inline-flex rounded-md bg-c_0493A3 py-[8px] px-[18px] text-[12px] font-openSans_semiBold text-white focus-visible:outline-none hover:brightness-110"
      >
        Befriend
      </button>
    </div>
  </li>
);
const FriendLitItem = () => (
  <li className="flex items-center space-x-3 py-[0.5rem]">
    <div className="flex-shrink-0">
      <img
        className="h-[40px] w-[40px] rounded-full"
        src={
          "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        }
        alt=""
      />
    </div>
    <div className="min-w-0 flex-1">
      <p className="font-openSans_semiBold text-[#2A2A2A] text-[14px] mb-0">
        John Cooper
      </p>
      <p className="font-openSans_regular text-c_949494 text-[10px] mb-0">
        @skublaven01
      </p>
    </div>
    <div className="flex-shrink-0">
      <button
        type="button"
        className="inline-flex rounded-md bg-[#F5F5F5] py-[8px] px-[18px] text-[12px] font-openSans_semiBold text-[#515165] focus-visible:outline-none hover:brightness-95"
      >
        Unfriend
      </button>
    </div>
  </li>
);
const FriendRequestLitItem = () => (
  <li className="flex items-center space-x-3 py-[0.5rem]">
    <div className="flex-shrink-0">
      <img
        className="h-[40px] w-[40px] rounded-full"
        src={
          "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        }
        alt=""
      />
    </div>
    <div className="min-w-0 flex-1">
      <p className="font-openSans_semiBold text-[#2A2A2A] text-[14px] mb-0">
        John Cooper
      </p>
      <p className="font-openSans_regular text-c_949494 text-[10px] mb-0">
        @skublaven01
      </p>
    </div>
    <div className="flex-shrink-0 space-x-3">
      <button
        type="button"
        className="inline-flex rounded-md bg-[#30B52D] py-[8px] px-[18px] text-[12px] font-openSans_semiBold text-white focus-visible:outline-none hover:brightness-110"
      >
        Accept
      </button>
      <button
        type="button"
        className="inline-flex rounded-md bg-[#F5F5F5] py-[8px] px-[18px] text-[12px] font-openSans_semiBold text-[#515165] focus-visible:outline-none hover:brightness-95"
      >
        Decline
      </button>
    </div>
  </li>
);
const Users = ({ activeOPtion }) => (
  <div className="relative isolate gap-6 bg-white rounded-2xl p-[1rem]">
    <div>
      <h1 className="text-[#515165] text-[24px] font-openSans_bold">
        {activeOPtion?.title}
      </h1>
    </div>
    <div>
      <ul role="list" className="my-[15px] divide-y divide-[#E6F4F6]">
        {Array.from({ length: 10 }).map((user) => (
          <>
            {activeOPtion?.option === "suggestions" ? (
              <SuggestedLitItem />
            ) : null}
            {activeOPtion?.option === "friends" ? <FriendLitItem /> : null}
            {activeOPtion?.option === "request" ? (
              <FriendRequestLitItem />
            ) : null}
          </>
        ))}
      </ul>
    </div>
  </div>
);

const PageLayOut = ({ center, left, right }) => (
  <>
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}

      <div className="py-10">
        <div className="mx-auto sm:px-6 lg:grid lg:grid-cols-12 lg:gap-8 lg:px-8">
          {left}
          {center}
          {right}
        </div>
      </div>
    </div>
  </>
);
const Center = ({ activeOPtion, setActiveOption }) => (
  <main className="lg:col-span-9 xl:col-span-7">
    <div className="bg-white p-[1rem] rounded-2xl ">
      <div className="grid grid-cols-12 w-full ">
        <div className="col-span-10 justify-self-center w-full">
          <input
            type="text"
            name="text"
            id="text"
            className=" bg-c_F5F5F5 block w-full rounded-md placeholder:text-c_949494 placeholder:font-openSans_regular placeholder:text-[14px] text-[14px] focus:outline-none py-2.5 px-[12px]
  "
            placeholder="Find Friends"
          />
        </div>
        <div className="col-span-2 justify-self-end">
          <button
            type="button"
            className="rounded-md bg-[#0493A3] py-2.5 px-6 text-[14px] font-openSans_semiBold text-white focus-visible:outline-none hover:brightness-110"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div className="mt-[1rem] space-y-5">
      <Users activeOPtion={activeOPtion} setActiveOption={setActiveOption} />
    </div>
  </main>
);
const Right = () => (
  <aside className="hidden xl:col-span-3 xl:block">
    <div className="sticky top-4 space-y-4">
      <section>
        <div className="rounded-2xl bg-white">
          <div className="p-[1.2rem] h-full">
            <div>
              <h2 className="font-openSans_bold text-c_515165 text-[16px] flex space-x-3 items-center">
                <span>Find Friends by</span>
                <span>
                  <img src={arrowRightIcon.default} />
                </span>
              </h2>
              <div className="mt-[1rem] flow-root"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </aside>
);
const leftMenuOptionArray = [
  {
    title: "Suggested For You",
    icon: profileTickIcon,
    iconClass: "bg-[#C5EBC4]",
    itemClass: "bg-[#EAF8EA]",
    subtitle: "Meet New People",
    option: "suggestions",
  },
  {
    title: "My Friends",
    icon: friendsProfileIcon,
    iconClass: "bg-[#FFE3B8]",
    itemClass: "bg-[#FFF5E6]",
    subtitle: "See list of all your friends",
    option: "friends",
  },
  {
    title: "Friend Requests",
    icon: profileAdIcon,
    iconClass: "bg-[#B9E1E5]",
    itemClass: "bg-[#E6F4F6]",
    subtitle: "See who wants to be your friends",
    option: "request",
  },
];
const Left = ({ activeOPtion, setActiveOption }) => (
  <div className="hidden lg:col-span-3 lg:block xl:col-span-2 ">
    <nav aria-label="Sidebar" className="sticky top-4 space-y-4">
      <section>
        <div className="rounded-2xl bg-white flex items-center flex-col space-y-3 py-3 px-2">
          {leftMenuOptionArray?.map((item) => (
            <div
              onClick={() => setActiveOption(item)}
              className={`cursor-pointer p-[5px] flex w-full items-center space-x-2 rounded-md ${
                activeOPtion?.option === item?.option ? item?.itemClass : ""
              }`}
            >
              <div
                className={`bg-c_F5F5F5 rounded-md w-[28px] h-[28px] flex justify-center items-center ${
                  activeOPtion?.option === item?.option ? item?.iconClass : ""
                }`}
              >
                <img src={item?.icon?.default} />
              </div>
              <div className="text-white flex flex-col">
                <span className="text-c_515165 text-[12px] font-openSans_bold">
                  {item?.title}
                </span>
                <span className="text-c_949494 text-[8px] font-openSans_regular">
                  {item?.subtitle}
                </span>
              </div>
            </div>
          ))}
          {/* <div className="p-[5px] flex w-full items-center space-x-2 rounded-md">
            <div className="bg-c_F5F5F5 rounded-md w-[28px] h-[28px] flex justify-center items-center">
              <img src={newIcon.default} />
            </div>
            <div className="text-white flex flex-col">
              <span className="text-c_515165 text-[12px] font-openSans_bold">
                New Feeds
              </span>
              <span className="text-c_949494 text-[8px] font-openSans_regular">
                Find the latest update
              </span>
            </div>
          </div>
          <div className="p-[5px] bg-c_FFF5E6 flex w-full items-center space-x-2 rounded-md">
            <div className="bg-white rounded-md w-[28px] h-[28px] flex justify-center items-center">
              <img src={starIcon.default} />
            </div>
            <div className="text-white flex flex-col">
              <span className="text-c_515165 text-[12px] font-openSans_bold">
                Wall of Fame
              </span>
              <span className="text-c_949494 text-[8px] font-openSans_regular">
                Shots featured today by curators
              </span>
            </div>
          </div>
          <div className="p-[5px] flex w-full items-center space-x-2 rounded-md">
            <div className="bg-c_F5F5F5 rounded-md w-[28px] h-[28px] flex justify-center items-center">
              <img src={friendsIcon.default} />
            </div>
            <div className="text-white flex flex-col">
              <span className="text-c_515165 text-[12px] font-openSans_bold">
                From Friends
              </span>
              <span className="text-c_949494 text-[8px] font-openSans_regular">
                Explore from your favorite people
              </span>
            </div>
          </div> */}
        </div>
      </section>

      {/* <div className="space-y-1 pb-8">
{navigation.map((item) => (
<a
  key={item.name}
  href={item.href}
  className={classNames(
    item.current
      ? "bg-gray-200 text-gray-900"
      : "text-gray-700 hover:bg-gray-50",
    "group flex items-center rounded-md px-3 py-2 text-sm font-medium"
  )}
  aria-current={item.current ? "page" : undefined}
>
  <item.icon
    className={classNames(
      item.current
        ? "text-gray-500"
        : "text-gray-400 group-hover:text-gray-500",
      "-ml-1 mr-3 h-6 w-6 flex-shrink-0"
    )}
    aria-hidden="true"
  />
  <span className="truncate">{item.name}</span>
</a>
))}
</div> */}
      {/* <div className="pt-10">
<p
className="px-3 text-sm font-medium text-gray-500"
id="communities-headline"
>
Communities
</p>
<div
className="mt-3 space-y-2"
aria-labelledby="communities-headline"
>
{communities.map((community) => (
  <a
    key={community.name}
    href={community.href}
    className="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
  >
    <span className="truncate">{community.name}</span>
  </a>
))}
</div>
</div> */}
    </nav>
  </div>
);
export default function Friends() {
  const [activeOPtion, setActiveOption] = useState({
    title: "Suggested For You",
    icon: profileTickIcon,
    iconClass: "bg-[#C5EBC4]",
    itemClass: "bg-[#EAF8EA]",
    subtitle: "Meet New People",
    option: "suggestions",
  });
  return (
    <>
      <PageLayOut
        center={
          <Center
            activeOPtion={activeOPtion}
            setActiveOption={setActiveOption}
          />
        }
        right={<Right />}
        left={
          <Left activeOPtion={activeOPtion} setActiveOption={setActiveOption} />
        }
      />
    </>
  );
}
