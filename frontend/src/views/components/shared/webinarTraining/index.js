import { useNavigate } from "react-router-dom";

const WebinarTraining = ({ linkTo = null }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (linkTo) {
      navigate(linkTo);
    }
  };
  return (
    <article
      onClick={() => handleClick()}
      className="relative isolate bg-white rounded-2xl p-4 pb-10 space-y-5 cursor-pointer"
    >
      <div className="flex flex-wrap justify-between w-full">
        <div className="flex space-x-3">
          <div className="w-[72px] h-[72px]">
            <img
              src={
                "https://th.bing.com/th/id/R.98c0b1d01f3909f86043ef593281d1fb?rik=67lUd%2bPCIAQjXA&riu=http%3a%2f%2fwww.sliderrevolution.com%2fwp-content%2fuploads%2frevslider%2fCorporate-Selected-Projects%2fcorporate-selected-projects-1.jpg&ehk=58zZiex2m1eEefij%2bTakco1aQhwStkZAigdPWdzdTL0%3d&risl=&pid=ImgRaw&r=0"
              }
              alt=""
              className="rounded-lg object-cover"
            />
          </div>
          <div className="">
            <span className="text-[#515165] text-[18px] font-openSans_medium">
              Drive Growth with Better Customer Journey Orchestration (Gartner)
            </span>
          </div>
        </div>
        <div>
          <div className="border border-[#C5D0E6] w-[59px] h-[72px] rounded flex flex-col items-center justify-center shadow-sm">
            <div>
              <span className="text-[16px] text-[#515165] font-openSans_medium">
                FEB
              </span>
            </div>
            <div>
              <span className="text-[26px] text-[#0493A3] font-openSans_bold">
                7
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div>
          <span className="text-[#515165] text-[14px] font-openSans_regular">
            Contact us
          </span>
        </div>
        <div>
          <span className="text-[#515165] text-[14px] font-openSans_regular">
            via Email paulgartner@gmail.com; Phone Number +8801777138513 and
            register via{" "}
            <span className="text-[#0493A3] cursor-pointer">bit.ly/123456</span>
          </span>
        </div>
      </div>

      <div className="">
        <div className="flex justify-between w-full">
          <div>
            <div className="flex items-center gap-x-3 mt-3">
              {Array.from({ length: 3 })?.map((item) => (
                <span className="rounded-2xl bg-c_F5F5F5 py-2 px-4 font-openSans_semiBold text-[#949494] text-[12px]">
                  Onsite
                </span>
              ))}
            </div>
          </div>
          <div>
            <span className="text-[#FD6769] text-[26px] font-openSans_bold">
              $ 100
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default WebinarTraining;
