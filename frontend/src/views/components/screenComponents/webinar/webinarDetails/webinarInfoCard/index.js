import { Fragment } from "react";

const WebinarInfoCard = () => {
  return (
    <Fragment>
      <div>
        <div className="bg-white rounded-2xl">
          <div className="lg:min-h-[463px] flex justify-center rounded-full lg:aspect-video aspect-square">
            <img
              className="object-cover w-full rounded-t-2xl "
              src="https://students.unimelb.edu.au/__data/assets/image/0005/4508357/EmpWk2023_EventTiles_700x350px_MASTER_FILE_PITCHING.png"
            />
          </div>
          <div className="p-5 border-t border-[#F5F5F5]">
            <div className="w-full space-y-5">
              <div>
                <div className="flex w-full flex-wrap justify-between items-center text-[26px] font-openSans_bold">
                  <div>
                    <span className="text-[#3F4354]">
                      How to Start a Successful E-commerce Business
                    </span>
                  </div>
                  <div>
                    <span className="text-[#FD6769]">$100.00</span>
                  </div>
                </div>
                <div>
                  <span className="text-[#949494] text-[14px] font-openSans_regular">
                    Created by Demarai Gray
                  </span>
                </div>
              </div>
              <div className="flex items-center flex-wrap gap-x-5">
                <div>
                  <span className="text-[#0493A3] text-[14px] font-openSans_medium">
                    Virtual Event
                  </span>
                </div>
                <div>
                  <span className="text-[#0493A3] text-[14px] font-openSans_medium">
                    Wednesday, 7th of February 2023
                  </span>
                </div>
                <div>
                  <span className="text-[#0493A3] text-[14px] font-openSans_medium">
                    9:00pm PST
                  </span>
                </div>
              </div>
              <div>
                <p className="text-[14px] text-[#949494] font-openSans_regular">
                  Lorem ipsum dolor sit amet consectetur. Laoreet odio urna
                  donec nibh. Justo velit netus ut nam. Purus turpis blandit non
                  neque non fusce in eget. Nulla ornare non ornare varius
                  pellentesque non. Aliquam leo ullamcorper lectus vitae mauris
                  non. Massa eu ullamcorper ut enim odio turpis quis diam.
                  Pellentesque risus aenean a sit. Id enim id aliquam pulvinar.
                  .
                </p>
              </div>
              <div className="flex justify-end flex-wrap">
                <button
                  type="button"
                  className="inline-flex justify-center items-center rounded-md bg-[#FD6769] min-w-[191px]  min-h-[50px] text-[16px] font-openSans_bold text-white focus-visible:outline-none hover:brightness-110 space-x-2"
                >
                  <span>Attend Webinar</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default WebinarInfoCard;
