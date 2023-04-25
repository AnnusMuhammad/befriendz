import { Images } from "config/images";
import EmptySpace from "views/components/shared/emptySpace";
import Button from "views/components/shared/form-elements/button";
import Modal from "../../../shared/modal";
const { locationIcon, gpsIcon } = Images;

const SetLocationModal = ({ open, setOpen }) => {
  return (
    <Modal
      open={open}
      setOpen={setOpen}
      title={"Set Your Location"}
      subTitle={"Let’s help you socialize with people around you"}
    >
      <div className="space-y-10">
        <EmptySpace height="10px" />

        <div className="flex justify-center w-full">
          <img src={locationIcon.default} />
        </div>
        <div>
          <div className="text-center">
            <div>
              <span className="text-[#2A2A2A] font-openSans_bold text-[32px] ">
                Where Are You ?
              </span>
            </div>
            <div>
              <p className="text-[#949494] text-[16px] font-openSans_regular">
                You have turned off your location, Allow us access your location
                while using our app so we can deliver the best experience{" "}
              </p>
            </div>
            <div>
              <div className="flex items-center justify-center space-x-3">
                <img src={gpsIcon.default} />
                <span className="text-[#0493A3] text-[14px] font-openSans_bold">
                  Use Current Location
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <Button type="button" onClick={() => {}} text="Create Account" />
        </div>
        <EmptySpace height="20px" />
      </div>
    </Modal>
  );
};
export default SetLocationModal;
