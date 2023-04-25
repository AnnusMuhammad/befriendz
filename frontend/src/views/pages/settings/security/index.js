import { Fragment } from "react";
import { Link } from "react-router-dom";
import EmptySpace from "views/components/shared/emptySpace";
import Button from "views/components/shared/form-elements/button";
import Input from "views/components/shared/form-elements/input";

const Security = () => {
  return (
    <Fragment>
      <Fragment>
        <div className="py-4">
          <div className="mx-auto xl:grid xl:grid-cols-7 px-3 sm:px-6 lg:gap-8 lg:px-8">
            <div className="col-span-5">
              <div>
                <div className="xl:space-y-0 space-y-10">
                  <aside className="xl:hidden"></aside>
                  <div className="bg-white px-4 rounded-2xl min-h-screen">
                    <div className="pb-5 pt-10 flex w-full justify-between items-center flex-wrap">
                      <div>
                        <span className="text-[#2A2A2A] font-openSans_bold text-[24px]">
                          Security
                        </span>
                      </div>
                    </div>
                    <div className="h-1 bg-c_FD6769 w-full rounded-full"></div>
                    <div className="py-10 space-y-5">
                      <div>
                        <span className="text-[#515165] lg:text-[24px] md:text-[23px] sm:text-[22px] text-[21px] font-openSans_bold ">
                          Change Password
                        </span>
                      </div>
                      <div>
                        <div className="grid grid-cols-7">
                          <div></div>
                          <div className="lg:col-span-5 col-span-full">
                            <form className="mt-5 space-y-5">
                              <div>
                                <Input
                                  type="password"
                                  name="password"
                                  label="Create Password"
                                  placeholder="Enter Your Password"
                                />
                              </div>
                              <div>
                                <Input
                                  type="password"
                                  name="password"
                                  label="Confirm Password"
                                  placeholder="Confirm Your New Password"
                                />
                              </div>
                              <div>
                                <Input
                                  type="password"
                                  name="password"
                                  label="Confirm Password"
                                  placeholder="Confirm Your New Password"
                                />
                              </div>
                              <p className="text-end">
                                <Link
                                  to="#"
                                  className="lg:text-[14px] md:text-[13px] sm:text-[12px] text-[11px] font-openSans_regular text-[#0493A3] hover:text-[#0493A3]"
                                >
                                  Can’t remember password?
                                </Link>
                              </p>
                              <EmptySpace height="40px" />
                              <div>
                                <Button
                                  type="submit"
                                  text={"Update Password"}
                                />
                              </div>
                            </form>
                          </div>
                          <div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <aside className="hidden xl:block col-span-2"></aside>
          </div>
        </div>
      </Fragment>
    </Fragment>
  );
};

export default Security;
