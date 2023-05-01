import { useNavigate } from "react-router-dom";
import { Images } from "config/images";
const { arrowRightIcon } = Images;

const GroupCards = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/group-details");
  };
  return (
    <div>
      <div className="rounded-2xl relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-full lg:h-full lg:shrink-0">
        <img
          src={
            "https://th.bing.com/th/id/OIP.0ljdsmtyGGxuhmnzaB3-KAHaG3?pid=ImgDet&w=789&h=732&rs=1"
          }
          alt=""
          className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
        />
        <div className="absolute bottom-0 bg-gradient-to-t from-[#0000008D] via-[#0000008D] to-[#00000000] t rounded-b-2xl  lg:w-full w-full p-3 pb-5">
          <div className="flex justify-between">
            <div>
              <span className="text-white font-openSans_bold text-[16px]">
                Creatives
              </span>
            </div>
            <div onClick={() => handleClick()}>
              <div className="bg-white rounded-md p-1 cursor-pointer">
                <img src={arrowRightIcon.default} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupCards;
