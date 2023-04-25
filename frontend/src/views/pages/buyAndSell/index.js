import { Images } from "../../../config/images";
import { Link } from "react-router-dom";
const user = {
  name: "Chelsea Hagon",
  email: "chelsea.hagon@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

const whoToFollow = [
  {
    name: "Leonard Krasner",
    handle: "leonardkrasner",
    href: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Leonard Krasner",
    handle: "leonardkrasner",
    href: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Leonard Krasner",
    handle: "leonardkrasner",
    href: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Leonard Krasner",
    handle: "leonardkrasner",
    href: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Leonard Krasner",
    handle: "leonardkrasner",
    href: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  // More people...
];

const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
    imageUrl:
      "https://c.shld.net/rpx/i/s/i/spin/10167833/prod_19782326212?hei=350&wid=350&op_sharpen=1",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
    },
  },
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
    },
  },
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
    },
  },
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
    },
  },
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
    },
  },
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
    },
  },
  // More posts...
];
const {
  arrowRightIcon,
  checkIcon,
  crossIcon,
  medalStarIcon,
  newIcon,
  starIcon,
  friendsIcon,
  musicIon,
  likeIcon,
  shoppingCartIcon,
} = Images;

const Post = ({ post }) => {
  return (
    <article className="relative isolate flex flex-col gap-6 lg:flex-row bg-white rounded-2xl p-[1rem]">
      <div className="absolute top-6 right-4 cursor-pointer">
        <img src={likeIcon.default} />
      </div>
      <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-[160px] lg:h-full lg:shrink-0 shadow-sm rounded-lg">
        <img
          src={
            "https://c.shld.net/rpx/i/s/i/spin/10167833/prod_19782326212?hei=350&wid=350&op_sharpen=1"
          }
          className="absolute inset-0 h-full w-full rounded-2xl object-contain border-none shadow-none"
        />
        <div className="absolute inset-0 rounded-2xl" />
      </div>
      <div>
        <div className="group relative max-w-xl">
          <h3 className="mt-2.5 text-[18px] text-dark font-openSans_bold flex w-full justify-between">
            <span className="">
              <span className="absolute inset-0" />
              Air Fryer
            </span>
            <span className="text-[#FD6769]">$20.99</span>
          </h3>
        </div>
        <div className="flex items-center gap-x-3 mt-[10px]">
          <span className="font-openSans_regular text-c_[#949494] text-[12px]">
            An air fryer is a small countertop convection oven designed to
            simulate deep frying without submerging the food in oil. A fan
            circulates hot air at high speed, producing a crisp layer via
            browning reactions such as the Maillard reaction{" "}
            <span className="text-[#0493A3] cursor-pointer">read more...</span>
          </span>
        </div>
        <div className="mt-3 flex flex-wrap justify-between items-start">
          <div className="relative flex items-center  gap-x-3">
            <img
              src={post?.author.imageUrl}
              alt=""
              className="h-[40px] w-[40px] rounded-full"
            />
            <div>
              <div>
                <div className="leading-[2px] text-[14px] font-openSans_semiBold text-c_515165 space-x-3">
                  <span>Ryan Bass</span>
                </div>
                <span className="font-openSans_regular text-c_949494 text-[10px]">
                  3 weeks ago
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-end items-center gap-x-3">
            <div>
              <span className="font-openSans_regular text-c_949494 text-[12px]">
                651,324 Views
              </span>
            </div>
            <div>
              <span className="font-openSans_regular text-c_949494 text-[12px]">
                36,6545 Likes
              </span>
            </div>
            <div>
              <span className="font-openSans_regular text-c_949494 text-[12px]">
                56 Sales
              </span>
            </div>
          </div>
          <div>
            <button
              type="button"
              className="inline-flex justify-center items-center rounded-md bg-c_0493A3 py-[5px] px-[20px] text-[12px] font-openSans_semiBold text-white focus-visible:outline-none hover:brightness-110 min-h-[40px] space-x-2"
            >
              <span>
                <img src={shoppingCartIcon.default} />
              </span>
              <span>Add To Cart</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
const CartItem = () => (
  <li className="flex w-full justify-between py-[0.5rem]">
    <div className="flex items-center space-x-3">
      <div className="flex-shrink-0 flex justify-center items-center h-[60px] w-[60px] shadow-sm rounded-3xl">
        <img
          className="h-full w-full object-contain"
          src={
            "https://c.shld.net/rpx/i/s/i/spin/10167833/prod_19782326212?hei=350&wid=350&op_sharpen=1"
          }
          alt=""
        />
      </div>
      <div className="flex flex-col">
        <span className="text-[#515165] font-openSans_semiBold">Air Fryer</span>
        <span className="text-[#515165] font-openSans_regular">$20.99</span>
      </div>
    </div>
    <div className="flex justify-end items-center">
      <div className="bg-[#F5F5F5] rounded-xl font-openSans_medium min-w-[105px] min-h-[45px] flex justify-evenly items-center">
        <spna className="text-[#515165]">-</spna>
        <spna className="text-[#2A2A2A]">01</spna>
        <spna className="text-[#FD6769]">+</spna>
      </div>
    </div>
  </li>
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
const Center = () => (
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
            placeholder="What are you looking for...."
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
      {posts.map((post) => (
        <Link to="/view-product"><Post post={post} /></Link>
      ))}
    </div>
  </main>
);
const Right = () => (
  <aside className="xl:col-span-3 xl:block">
    <div className="sticky top-4 space-y-4">
      <section>
        <div className="rounded-2xl bg-white min-h-[800px] flex flex-col justify-between">
          <div className="p-[1.2rem] h-full">
            <div>
              <h2 className="font-openSans_bold text-c_515165 text-[16px] flex space-x-3 items-center">
                <span>Your Carts</span>
                <span>
                  <img src={arrowRightIcon.default} />
                </span>
              </h2>
              <div className="mt-[1rem] flow-root">
                <ul role="list" className="-my-4">
                  {Array.from({ length: 4 }).map((user) => (
                    <CartItem />
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="divide-y divide-[#E6F4F6] font-openSans_medium text-[12px] p-[1.2rem] space-y-5 ">
            <div className="border-t border-[#E6F4F6]">
              <div className="flex w-full justify-between py-[10px]">
                <div>
                  <span className="text-[#949494]">Subtotal</span>
                </div>
                <div>
                  <span className="text-[#515165]">$40.99</span>
                </div>
              </div>
              <div className="flex w-full justify-between py-[10px]">
                <div>
                  <span className="text-[#949494]">Shipping Fee </span>
                </div>
                <div>
                  <span className="text-[#515165]">$5.99</span>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex w-full justify-between py-[10px]">
                <div>
                  <span className="text-[#949494]">Total(USD) </span>
                </div>
                <div>
                  <span className="text-[#515165]">$46.00</span>
                </div>
              </div>
              <button
                type="button"
                className="inline-flex justify-center items-center rounded-md bg-[#FD6769] py-[5px] px-[20px] text-[12px] font-openSans_semiBold text-white focus-visible:outline-none hover:brightness-110 min-h-[40px] space-x-2 w-full mt-6"
              >
                <span>Buy Now!</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </aside>
);
const Left = () => (
  <div className="hidden lg:col-span-3 lg:block xl:col-span-2 ">
    <nav aria-label="Sidebar" className="sticky top-4 space-y-4">
      <section>
        <div className="rounded-2xl bg-white flex items-center flex-col space-y-3 py-3 px-2">
          <div className="p-[5px] flex w-full items-center space-x-2 rounded-md">
            <div className="bg-c_F5F5F5 rounded-md p-[10px]">
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
            <div className="bg-white rounded-md p-[10px]">
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
            <div className="bg-c_F5F5F5 rounded-md p-[10px]">
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
          </div>
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
export default function BuyAndSell() {
  return (
    <>
      <PageLayOut center={<Center />} right={<Right />} left={<Left />} />
    </>
  );
}
