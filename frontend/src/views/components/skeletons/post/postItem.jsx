import React from "react";
const PostItemSkeleton = ({ post }) => {
  return (
    <article className="animate-pulse relative isolate flex flex-col gap-5 lg:flex-row bg-white rounded-2xl p-4">
      <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-[156px] lg:h-full lg:shrink-0 w-12/12">
        <div className=" bg-gray-200 rounded-2xl h-full w-full flex items-center justify-center flex-shrink-0 flex">
          <svg
            className=" bg-gray-50 h-[50px] inset-0 mx-auto object-cover rounded-2xl w-[50px]  text-[#97989D]"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 640 512"
          >
            <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
          </svg>
        </div>
        <div className="absolute inset-0 rounded-2xl" />
      </div>
      <div className="w-[100%] flex flex-col justify-around">
        <div className="group relative">
          <h3 className="mt-2 w-11/12 text-[18px] text-dark font-openSans_bold">
            <span className="">
              <span className="absolute inset-0 " />
              <span style={{ width: "95%" }} className=" ">
                <div className="h-[16px] bg-gray-200 rounded-full w-[350px] mt-3 mb-2"></div>
              </span>
            </span>
          </h3>
        </div>
        <div className="mt-3 flex flex-wrap justify-between items-start ">
          <div className="relative flex items-center gap-x-3">
            <div className="flex items-center justify-center flex-shrink-0 flex rounded-full bg-gray-200 w-[40px] h-[40px]">
              <svg
                className="w-[20px] h-[20px] rounded-full text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 640 512"
              >
                <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
              </svg>
            </div>
            <div>
              <div>
                <div className="leading-[2px] text-[14px] font-openSans_semiBold text-c_515165 space-x-3">
                  <span>
                    <div className="h-[13px] bg-gray-200 rounded-full w-[150px] mt-3 mb-2"></div>
                  </span>
                  {/* <span className="text-c_FD6769">Music</span> */}
                </div>
                <span className="font-openSans_regular text-c_949494 text-[10px]">
                  <div className="h-[8px] bg-gray-200 rounded-full w-[40px] mt-3 mb-2"></div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PostItemSkeleton;
