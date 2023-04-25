import { Menu, Transition } from "@headlessui/react";
import CustomEditor from "components/shared/editor";
import { Fragment, useCallback, useState } from "react";
import { TagsInput } from "react-tag-input-component";
import { Images } from "../../../config/images";
import Post from "../viewPost/Post";
import PreviewPost from "./PreviewPost";

const AddPost = () => {
  const {
    uploadImageIcon,
    minimizeIcon,
    global,
    coin,
    globe,
    photography,
    realState,
    tech,
    groupMusic,
    crypto,
  } = Images;
  const groupNames = [
    { name: "Everyone", icon: globe },
    { name: "Photography", icon: photography },
    { name: "Music", icon: groupMusic },
    { name: "Cryptography", icon: crypto },
    { name: "Techology", icon: tech },
    { name: "Real State", icon: realState },
  ];
  const [image, setImage] = useState(null);
  const [content, setContent] = useState(null);
  const [title, setTitle] = useState(null);
  const [imageName, setImageName] = useState(null);
  const [selectedTags, setSelectedTags] = useState(null);
  const [isPreview, setIsPreview] = useState(false);
  const [groupName, setGroupName] = useState(null);
  console.log("file: index.jsx:37  AddPost  groupName:", groupName);
  const [groupFilterText, setGroupFilterText] = useState("");

  const handleFileSelected = (event) => {
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

  const handleGroupFilterText = (event) => {
    if (event.target.value.length > 0) {
      console.log(
        "file: index.jsx:59  handleGroupFilterText  event.target.value:",
        event.target.value
      );
      setGroupFilterText(event.target.value);
    } else {
      setGroupFilterText("");
    }
  };

  const handlePreviewToggle = () => {
    setIsPreview(!isPreview);
    window.scrollTo(0, 0);
  };

  const handleGroupChange = (event) => {
    setGroupName(event.target.innerText);
  };

  const filterGroup = useCallback(() => {
    if (groupFilterText.length > 0) {
      let filteredGroup = groupNames.filter((group) =>
        group.name.toLowerCase().trim().includes(groupFilterText.toLowerCase())
      );
      return filteredGroup;
    } else {
      return groupNames;
    }
  }, [groupFilterText]);
  return (
    <section>
      <div
        className={`bg-white rounded-2xl px-[40px] py-[30px] ${
          isPreview ? "hidden" : "block"
        }`}
      >
        {/* <div className="bg-[#F5F5F5] px-[15px] py-[10px] rounded-md">
          <span className="text-[#949494] text-[26px] font-openSans_medium">
            Name of the Product
          </span>
        </div> */}
        <div className="">
          <input
            className="bg-[#F5F5F5] px-[15px] py-[10px] rounded-md text-[#949494] text-[26px] font-openSans_bold w-full outline-none"
            placeholder="Give Your Post A Title"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div className="flex flex-row gap-3  items-center">
          <div className="relative w-fit my-3">
            <label
              title="Click to upload"
              for="uploadPostCoverImage"
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
              onChange={handleFileSelected}
              name="uploadPostCoverImage"
              id="uploadPostCoverImage"
            />
          </div>
          <Menu
            as="div"
            className="relative ml-5 flex-shrink-0"
            onClick={handleGroupChange}
          >
            <Menu.Button className="flex rounded-md px-3 py-3 bg-[#f5f5f5]">
              <div className="flex flex-row gap-4 items-center text-xs font-semibold relative">
                <div>{groupName ? groupName : "Select Group"}</div>
                <img src={minimizeIcon.default} height="15px" width="15px" />
              </div>
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="flex flex-row gap-2 items-center justify-between mx-4 my-2 bg-[#EDEDED] rounded">
                  <input
                    type="text"
                    onChange={handleGroupFilterText}
                    placeholder="Search Group"
                    className="w-8/12 bg-[#EDEDED] rounded px-2 outline-none text-sm"
                  />

                  <div className="p-2">
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="10"
                        cy="9"
                        r="8"
                        stroke="#858EAD"
                        stroke-width="2"
                      />
                      <path
                        d="M15.5 15.5L19.5 19.5"
                        stroke="#858EAD"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                </div>

                {filterGroup().map((item) => (
                  <Menu.Item key={item.name}>
                    {() => {
                      const isSelected = item.name === groupName;
                      return (
                        <div
                          className={`flex flex-row m-2 gap-2 items-center cursor-pointer "block py-2 px-4 text-sm text-gray-700
                          	${isSelected ? "shadow-xl  bg-white rounded " : ""}
                        	`}
                        >
                          <div>
                            <img src={item.icon.default} />
                          </div>
                          <div
                            className={`
                          	${isSelected ? "text-[#0493A3] font-semibold" : ""}
                        	`}
                          >
                            {item.name}
                          </div>
                        </div>
                      );
                    }}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
        {image && (
          <div>
            <div className="text-[#2A2A2A] my-4 text-sm font-semibold flex flex-row gap-2 items-center">
              <div>
                <img
                  src={image}
                  alt="preview cover image"
                  className="rounded-full h-10 w-10 object-cover"
                />
              </div>
              <div className="truncate max-w-[70vw] overflow-hidden">
                {imageName}
              </div>
              <div onClick={() => setImage(null)} className="cursor-pointer">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.1786 10L13.8311 12.6525C14.156 12.9776 14.1579 13.5025 13.8302 13.8303C13.5048 14.1556 12.9773 14.1557 12.6525 13.8311L9.99998 11.1786L7.34748 13.8311C7.02243 14.156 6.49745 14.158 6.16973 13.8303C5.8444 13.5048 5.84426 12.9773 6.1689 12.6525L8.8214 10L6.1689 7.3475C5.84398 7.02244 5.84203 6.49746 6.16973 6.16975C6.49521 5.84441 7.0227 5.84428 7.34748 6.16891L9.99998 8.82141L12.6525 6.16891C12.9775 5.844 13.5025 5.84205 13.8302 6.16975C14.1556 6.49523 14.1557 7.02271 13.8311 7.3475L11.1786 10ZM10 20C4.47714 20 0 15.5229 0 10C0 4.47714 4.47714 0 10 0C15.5229 0 20 4.47714 20 10C20 15.5229 15.5229 20 10 20ZM10 18.3333C14.6025 18.3333 18.3332 14.6026 18.3332 10.0001C18.3332 5.39757 14.6025 1.66686 10 1.66686C5.3975 1.66686 1.66679 5.39757 1.66679 10.0001C1.66679 14.6026 5.3975 18.3333 10 18.3333Z"
                    fill="#949494"
                  />
                </svg>
              </div>
            </div>
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
          <CustomEditor value={content} setValue={setContent} />
        </div>
        <div className="w-full mt-[15px] flex flex-col gap-2">
          <label className="text-[#2A2A2A] text-[16px] font-openSans_regular">
            Add or change tags (up to 5) so readers know what your story is
            about
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
            <span>Upload Post</span>
          </button>
          <div onClick={handlePreviewToggle} className="cursor-pointer">
            <PreviewPost />
          </div>
        </div>
      </div>

      <div className={`bg-white rounded-2xl ${isPreview ? "" : "hidden"}`}>
        <div className="p-10 flex flex-row flex-wrap gap-4 items-center">
          <div onClick={handlePreviewToggle} className="cursor-pointer">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 10H4M4 10L8.66667 5M4 10L8.66667 15"
                stroke="#515165"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <PreviewPost />
        </div>
        <Post
          postDetails={{
            coverImage: image,
            title: title,
            tags: selectedTags,
            content: content,
          }}
        />
      </div>
    </section>
  );
};

const PageLayOut = ({ center, left, right }) => (
  <>
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}
      <div className="py-10 ">
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
    <div className="space-y-5">
      <AddPost />
    </div>
  </main>
);
const Right = () => <aside className="hidden xl:col-span-3 xl:block"></aside>;
const Left = () => (
  <div className="hidden lg:col-span-3 lg:block xl:col-span-2 "></div>
);
export default function SellProduct() {
  return (
    <>
      <PageLayOut center={<Center />} right={<Right />} left={<Left />} />
    </>
  );
}
