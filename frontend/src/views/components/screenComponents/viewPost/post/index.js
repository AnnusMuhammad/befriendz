import { Images } from "config/images";
import React from "react";
import ReactQuill from "react-quill";
import Comments from "../comments";

const { startIcon } = Images;

const Post = (props) => {
  const { postDetails } = props;
  var data = postDetails ;
  return (
    <section className="bg-white rounded-2xl">
      <div>
        {data.coverImage ? <div>
          <img
            className="h-[273px] w-full object-cover object-top rounded-t-2xl"
            src={data.coverImage}
            alt={data.title}
          />
        </div> : null}
        
        <div className="p-[15px]">
          <div className="flex">
            <div className="p-2 md:p-5 flex justify-center items-start">
              <img src={startIcon.default} className="mt-[10px]" />
            </div>
            <div className="w-full">
              <div>
                <h1 className="text-[26px] font-openSans_bold text-[#515165]">
                  {data.title}
                </h1>
              </div>
              {data?.tags?.length > 0 ? <div className="flex space-x-5 mt-[15px]">
                {data.tags?.map((item) => (
                  <span className="font-openSans_regular text-[#FD6769] text-[16px]">
                    #{item.name}
                  </span>
                ))}
              </div> : null}
              <ReactQuill
                value={data.content}
                readOnly={true}
                theme={"bubble"}
              />
            </div>
          </div>
        </div>
      </div>
      <Comments />
    </section>
  );
};

export default Post;
