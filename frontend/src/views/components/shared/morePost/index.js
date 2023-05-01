import React from "react";

const MorePost = ({ postBy = "" }) => {
  return (
    <section className="space-y-5">
      <div className="rounded-2xl bg-white">
        <div className="p-5 divide-y divide-[#F5F5F5]">
          <div className="pb-3">
            <span className="text-[#515165] text-[16px] font-openSans_semiBold">
              More posts from {postBy}
            </span>
          </div>
          {Array.from({ length: 3 })?.map((item) => (
            <div className="py-3">
              <div>
                <span className="text-[12px] font-openSans_semiBold">
                  Self-Taught Guitarists , Week 6: Strumming Patterns and Sing
                  Along
                </span>
              </div>
              <div>
                <span className="text-[#949494] text-[12px] font-openSans_semiBold">
                  #music #beginners #singalong
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MorePost;
