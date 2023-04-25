import AuthLayout from "../../layouts/Auth/AuthLayout";
import SignInForm from "../../components/forms/auth/signInForm";
import { Helmet } from "react-helmet";
import { siteTitle } from "../../../shared/helper";
import GuestMiddleware from "../../../middleware/guestMiddleware";
const SignIn = () => {
  return (
    <AuthLayout className="blueish-gradient">
      <Helmet>
        <title>Sign In - {siteTitle()}</title>
      </Helmet>
      <div>
        <div className="text-black font-openSans_bold flex justify-between items-center flex-wrap">
          <span className="lg:text-[40px] md:text-[39px] sm:text-[38px] text-[37px]">
            Welcome Back🤗
          </span>
        </div>

        <p className="lg:text-[14px] md:text-[13px] sm:text-[12px] text-[11px] text-c_949494 font-openSans_regular mb-0">
          We have missed you, Sign In with your credentials.
        </p>
      </div>

      <SignInForm />
    </AuthLayout>
  );
};
export default GuestMiddleware(SignIn);
