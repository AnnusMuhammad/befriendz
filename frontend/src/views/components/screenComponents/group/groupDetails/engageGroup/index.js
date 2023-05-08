import React from "react";
import { Link } from "react-router-dom";

const EngageGroup = () => {
  return (
    <section>
      <div className="rounded-2xl bg-[#0493A3] text-[#FFFFFF] space-y-3 p-5">
        <div>
          <span className="font-openSans_regular text-[18px]">
            Engage Group
          </span>
        </div>
        <div>
          <span className="font-openSans_regular text-[12px]">
            Let’s share with community what going on your mind. or what you
            like...
          </span>
        </div>
        <div>
          <div className="flex justify-between flex-wrap gap-2">
            <Link to="/add-post">
              <button className="outline-none bg-[#FD6769] text-white text-[14px] font-openSans_regular flex justify-center items-center min-h-[40px] min-w-[132px] rounded">
                <span>Create Post</span>
              </button>
            </Link>
            <Link to="/training-live">
              <button className="outline-none bg-white text-[#0493A3] text-[14px] font-openSans_regular flex justify-center items-center min-h-[40px] min-w-[132px] rounded">
                <span>Go Live</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngageGroup;
