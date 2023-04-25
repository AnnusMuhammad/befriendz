import { Images } from "config/images";
import { connect } from "react-redux";
import { USER_TYPE } from "constants/user.constant";

const friends = [
  "https://media.licdn.com/dms/image/C4D03AQGg7qCuHavEdg/profile-displayphoto-shrink_200_200/0/1521010848026?e=1684972800&v=beta&t=dHLiCBHVZ8eXFgRx5RvfuTKIPuhhN0gf2q9cYsEivjU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzgsqkHF5eNd4C0RVDrtlPZUWHlmWTTrZMpbB7KU9kHJ785LPLySvlLVslCoqCiVogkZE&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7MIK6s--5K3qB5E9AZ2uYAeIiBLJ9tTyRgPpl2V5V0CtKluyaa2TpINXGn4nqhWZ1Cco&usqp=CAU",
  "https://www.theigc.org/sites/default/files/styles/max_325x325/public/2017/05/patrick-bayer-e1495025124363.jpg?itok=OgxUyLzL",
  "https://econ.duke.edu/sites/econ.duke.edu/files/styles/news_full_image/public/news-images/bayer3.238.259.s.jpg?itok=fpRACRB4",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU9B7jlhn6WB8alOdFH-ap8K1DqtC-IctmKlnpkDE8H2bpUGmt6MB4v5I2DQRYMfBGIUk&usqp=CAU",
  "https://i.pinimg.com/564x/98/51/1e/98511ee98a1930b8938e42caf0904d2d.jpg",
];

const { starBadeIcon } = Images;
const SideBar = ({user, setOpen }) => {
  return (
    <div className="bg-white rounded-2xl">
      {/* profile cover & image */}
      <div className="relative min-h-[190px]">
        <div className="h-[100px] bg-cover rounded-t-2xl bg-[#FD6769]"></div>
        <div className="absolute top-16 w-full flex justify-center">
          <img
            className="w-[120px] h-[120px] rounded-full outline outline-white object-cover"
            src={user.profileImage}
            alt={user.username}
          />
        </div>
      </div>

      <div className="space-y-4 px-3">
        {/* name and bio */}
        <div className="text-center">
          <div>
            <span className="text-[26px] text-[#515165] font-openSans_medium">
              { user.type === USER_TYPE.PERSONAL ? `${user.first_name} ${user.last_name}` : user.business_name}
            </span>
          </div>
          <div>
            <span className="text-[#949494] text-[16px] font-openSans_regular">
              { user.type === USER_TYPE.PERSONAL ?user.occupation : user.business_type}
            </span>
          </div>
          { user.type === USER_TYPE.BUSINESS && (
            <div>
              <span className="text-[#949494] text-[12px] font-openSans_medium">
                {user.business_address}
              </span>
            </div>
          )}
        </div>
        {/* bio detail */}
        <div className="text-center">
          <div>
            <span className="text-[14px] text-[#949494] font-openSans_medium">
              {user.about}
            </span>
          </div>
        </div>
        {user.interests && user.interests.length > 0 && (
        <div className="flex space-x-1 flex-wrap text-center justify-center">
          {user.interests?.map((item) => (
            <span className="rounded-2xl bg-[#f4646b] py-1 mt-[5px] px-2 font-openSans_semiBold text-[#fff] text-[10px]">
              {item.name}
            </span>
          ))}
        </div>)}
        <div className="flex w-full justify-center">
          <button
            className="bg-[#F5F5F5] min-h-[36px] min-w-[124px] rounded text-[#2A2A2A] text-[16px] font-openSans_medium"
            onClick={() => setOpen(true)}
          >
            Edit Profile
          </button>
        </div>

        {/* friends */}
        <div className="text-center space-y-4">
          <div>
            <span className="text-[14px] text-[#515165] font-openSans_medium">
              Friends 47
            </span>
          </div>
          <div>
            <div className="flex flex-wrap justify-center gap-4">
              {friends?.map((item) => (
                <img
                  className="w-[30px] h-[30px] rounded-full object-cover"
                  src={item}
                />
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="flex w-full justify-center items-center space-x-2">
            <div>
              <img src={starBadeIcon.default} />
            </div>
            <div>
              <span className="text-[#0493A3] text-[14px] font-openSans_bold">
                Become a Life Coach
              </span>
            </div>
          </div>
        </div>
        <div className="text-center pt-5 pb-7 border-t border-[#E6F4F6] mx-3">
          <span className="text-[#949494] text-[14px] font-openSans_medium">
            joined {user.createdAt}
          </span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user
})

export default connect(mapStateToProps)(SideBar);
