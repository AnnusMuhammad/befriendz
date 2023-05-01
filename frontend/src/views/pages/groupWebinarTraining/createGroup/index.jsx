import { Menu, Transition } from "@headlessui/react";
import CustomEditor from "components/shared/editor";
import { Fragment, useCallback, useState } from "react";
import { TagsInput } from "react-tag-input-component";
import { Images } from "config/images";
import PageLayout from "views/layouts/page";
import ImageFormPreview from "views/components/shared/form-elements/imageFormPreview";

const CreateGroups = () => {
  const { uploadImageIcon } = Images;

  const [image, setImage] = useState(null);
  const [bannerImage, setBannerImage] = useState(null);
  const [content, setContent] = useState(null);
  const [title, setTitle] = useState(null);
  const [imageName, setImageName] = useState(null);
  const [bannerImageName, setBannerImageName] = useState(null);

  const [selectedTags, setSelectedTags] = useState(null);

  const handleImageFileSelected = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
      setImageName(event.target.files[0].name);
    } else {
      setImage(null);
      setImageName(null);
    }
  };
  const handleTitleChange = (event) => {
    if (event.target.value.length > 0) {
      setTitle(event.target.value);
    } else {
      setTitle(null);
    }
  };

  const handleBannerImageFileSelected = (event) => {
    if (event.target.files && event.target.files[0]) {
      setBannerImage(URL.createObjectURL(event.target.files[0]));
      setBannerImageName(event.target.files[0].name);
    } else {
      setBannerImage(null);
      setBannerImageName(null);
    }
  };

  return (
    <section>
      <div className="">
        <input
          className="bg-[#F5F5F5] px-[15px] py-[10px] rounded-md text-[#949494] text-[26px] font-openSans_bold w-full outline-none"
          placeholder="Give Your Group A Name"
          value={title}
          onChange={handleTitleChange}
        />
      </div>
      <div className="flex flex-row gap-3  items-center">
        <div className="relative w-fit my-3">
          <label
            title="Click to upload"
            for="uploadCoverImage"
            className="cursor-pointer flex items-center gap-2 px-3 py-2.5 rounded-md bg-[#f5f5f5]"
          >
            <div className="w-max relative">
              <img
                className="w-5"
                src={uploadImageIcon.default}
                alt="file upload icon"
              />
            </div>
            <div className="relative">
              <span className="block text-xs font-semibold relative ">
                Set Cover Photo
              </span>
            </div>
          </label>
          <input
            hidden="true"
            type="file"
            onChange={handleImageFileSelected}
            name="uploadCoverImage"
            id="uploadCoverImage"
          />
        </div>
        <div className="relative w-fit my-3">
          <label
            title="Click to upload"
            for="uploadBannerImage"
            className="cursor-pointer flex items-center gap-2 px-3 py-2.5 rounded-md bg-[#f5f5f5]"
          >
            <div className="w-max relative">
              <img
                className="w-5"
                src={uploadImageIcon.default}
                alt="file upload icon"
              />
            </div>
            <div className="relative">
              <span className="block text-xs font-semibold relative ">
                Set Banner Photo
              </span>
            </div>
          </label>
          <input
            hidden="true"
            type="file"
            onChange={handleBannerImageFileSelected}
            name="uploadBannerImage"
            id="uploadBannerImage"
          />
        </div>
      </div>
      {bannerImage && (
        <div>
          <ImageFormPreview
            imageName={bannerImageName}
            setImage={setBannerImage}
            image={bannerImage}
          />
        </div>
      )}
      {image && (
        <div>
          <ImageFormPreview
            imageName={imageName}
            setImage={setImage}
            image={image}
          />

          <div className="pb-5 pt-3">
            <img
              src={image}
              alt="preview post cover image"
              className="w-full h-[340px] object-cover rounded-lg"
            />
          </div>
        </div>
      )}
      <div className="w-full mt-4">
        <CustomEditor
          value={content}
          setValue={setContent}
          placeholder="Write a group description here"
        />
      </div>
      <div className="w-full mt-[15px] flex flex-col gap-2">
        <label className="text-[#2A2A2A] text-[16px] font-openSans_regular">
          Add or change tags (up to 5) so readers know what your story is about
        </label>
        <TagsInput
          value={selectedTags}
          onChange={setSelectedTags}
          name="tags"
          placeHolder=""
        />
      </div>
      <div className="flex w-full items-center mt-[15px] flex-row gap-8 flex-wrap">
        <button
          type="button"
          className="inline-flex justify-center items-center rounded-md bg-c_0493A3 py-[8px] px-[40px] text-[16px] font-openSans_bold text-white focus-visible:outline-none hover:brightness-110 min-h-[44px] space-x-2"
        >
          <span>Create Group</span>
        </button>
      </div>
    </section>
  );
};

const Right = () => <aside className="hidden xl:col-span-3 xl:block"></aside>;
const Left = () => (
  <div className="hidden lg:col-span-3 lg:block xl:col-span-2 "></div>
);
const Center = () => (
  <div className="mx-auto xl:grid xl:grid-cols-7 px-3 lg:px-4 lg:gap-8">
    <main className="lg:col-span-5 xl:col-span-5">
      <div className="space-y-5 p-10 rounded-xl bg-white">
        <CreateGroups />
      </div>
    </main>
    <Right />
  </div>
);
export default function CreateGroupsPage() {
  return (
    <>
      <PageLayout mainContent={<Center />} sideBar={<Left />} />
    </>
  );
}
