import { Link } from "react-router-dom";

const AddPost = ({
  placeholder = "Let’s share what going on your mind...",
}) => {
  return (
    <div className="p-5 bg-white rounded-2xl flex w-full gap-5">
      <div className="w-full flex items-center gap-2">
        <div>
          <img
            className="w-[40px] h-[40px] rounded-full object-cover"
            src="https://merriam-webster.com/assets/mw/images/gallery/gal-home-edpick-lg/top-10-user-submitted-words-vol-3-retrosexual-329@1x.jpg"
          />
        </div>
        <div className="w-full">
          <input
            className="text-[#949494] bg-[#F5F5F5] px-3 h-[46px] w-full rounded outline-none"
            placeholder={placeholder}
          />
        </div>
      </div>
      <div>
        <Link to="/add-post">
          <button
            type="button"
            className="inline-flex justify-center items-center rounded-md bg-[#FD6769] text-[16px] font-openSans_bold text-white focus-visible:outline-none hover:brightness-110 min-w-[112px] min-h-[44px] space-x-2 "
          >
            <span className="text-[14px] font-openSans_semiBold text-white">
              Add Post
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AddPost;
