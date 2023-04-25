import { Images } from "config/images";
import EmptySpace from "views/components/shared/emptySpace";
import Button from "views/components/shared/form-elements/button";
import Modal from "views/components/shared/modal";
const { phoneCallIcon, gpsIcon } = Images;

const FreeTrialModal = ({ open, setOpen }) => {
  return (
    <Modal
      open={open}
      setOpen={setOpen}
      title={"Free Trial"}
      subTitle={"Let’s help you socialize with people around you"}
    >
      <div className="space-y-10">
        <EmptySpace height="10px" />

        <div className="flex justify-center w-full">
          <img src={phoneCallIcon.default} />
        </div>

        <div>
          <div className="text-center">
            <div>
              <span className="text-[#2A2A2A] font-openSans_bold text-[32px] ">
                2 Free 15 Mins Call
              </span>
            </div>

            <div>
              <p className="text-[#949494] font-openSans_regular text-[14px]">
                By clicking “claim it” implies you have read and accepted our{" "}
                <span className="text-[#0493A3]">Term of Use</span>
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <Button type="button" onClick={() => {}} text="Claim It!" />
        </div>
        <EmptySpace height="20px" />
      </div>
    </Modal>
  );
};
export default FreeTrialModal;
