import React from "react";
import ReactQuill from "react-quill";
import { Images } from "../../../config/images";
const { startIcon } = Images;
const tempPostData = {
  coverImage:
    "https://musicindustryhowtoimages.s3.amazonaws.com/wp-content/uploads/2018/04/11123809/The-best-online-guitar-lessons-for-beginners-compared.jpg",
  title:
    "Ultimate Guide For Beginners looking to play guitar like a Pro in 6 weeks",
  tags: ["beginner", "music", "guitar"],
  content: `
    <div>
      <p className="text-[14px] text-[#949494] font-openSans_regular mt-[20px]">
        Lorem ipsum dolor sit amet consectetur. Laoreet odio urna donec nibh.
        Justo velit netus ut nam. Purus turpis blandit non neque non fusce in
        eget. Nulla ornare non ornare varius pellentesque non. Aliquam leo
        ullamcorper lectus vitae mauris non. Massa eu ullamcorper ut enim odio
        turpis quis diam. Pellentesque risus aenean a sit. Id enim id aliquam
        pulvinar.
      </p>
      <p className="text-[14px] text-[#949494] font-openSans_regular mt-[20px]">
        Gravida enim sed at massa. Mi volutpat pharetra rhoncus nunc. At a ipsum
        mattis sit. Nunc tempus tincidunt turpis diam nibh tellus iaculis ipsum
        sed. Tincidunt sollicitudin ac in convallis diam. Pellentesque odio id
        cursus nunc tellus. Ac suspendisse sit commodo neque lacus cras. Tellus
        ultrices tellus magnis urna. Lectus sit ipsum nec eget rhoncus viverra
        sagittis. Viverra sed purus lacus in velit erat quis eget.
      </p>
      <p className="text-[14px] text-[#949494] font-openSans_regular mt-[20px]">
        Aenean a euismod dictumst magna lectus eleifend aliquam. Lectus magna
        pellentesque et nec netus integer felis pretium sed. Morbi orci ornare
        posuere non arcu placerat vitae. Eu sed vitae phasellus.
      </p>
    </div>
  `,
};
const Post = (props) => {
  const { postDetails } = props;

  const data = postDetails ? postDetails : tempPostData;
  return (
    <section>
      <div>
        <div>
          <img
            className="h-[273px] w-full object-cover object-top rounded-t-2xl"
            src="https://musicindustryhowtoimages.s3.amazonaws.com/wp-content/uploads/2018/04/11123809/The-best-online-guitar-lessons-for-beginners-compared.jpg"
          />
        </div>
        <div className="p-[15px]">
          <div className="flex">
            <div className="min-w-[50px] flex justify-center items-start">
              <img src={startIcon.default} className="mt-[10px]" />
            </div>
            <div className="w-full">
              <div>
                <h1 className="text-[26px] font-openSans_bold text-[#515165]">
                  {data.title}
                </h1>
              </div>
              <div className="flex space-x-5 mt-[15px]">
                {data.tags?.map((item) => (
                  <span className="font-openSans_regular text-[#FD6769] text-[16px]">
                    #{item}
                  </span>
                ))}
              </div>
              <ReactQuill
                value={data.content}
                readOnly={true}
                theme={"bubble"}
              />
              {/* {data.content} */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Post;
