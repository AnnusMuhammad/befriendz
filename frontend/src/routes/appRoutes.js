import { useEffect } from "react";
import { useNavigate, Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import { logoutAction } from "redux/actions/authActions";
import { USER_STATUS } from "constants/user.constant";
import Home from "../views/pages/Home/";
import AccountType from "../views/pages/Auth/AccountType";
import CreateAccount from "../views/pages/Auth/CreateAccount";
import VerifyEmail from "../views/pages/Auth/VerifyEmail";
import CreatePassword from "../views/pages/Auth/CreatePassword";
import CompleteProfile from "../views/pages/Auth/CompleteProfile";
import SignIn from "../views/pages/Auth/SignIn";
import RecoverPassword from "../views/pages/RecoverPassword/RecoverPassword";
import CreatePasswordRecover from "../views/pages/RecoverPassword/CreatePassword";
import VerifyEmailRecover from "../views/pages/RecoverPassword/VerifyEmail";
import PasswordRecovered from "../views/pages/RecoverPassword/PasswordRecovered";
import Dashboard from "../views/pages/dashboardHome";
import ViewPost from "views/pages/viewPost";
import ViewProduct from "views/pages/viewProduct";
import BuyAndSell from "views/pages/buyAndSell";
import Friends from "views/pages/friends";
import Settings from "views/pages/settings";
import AdsManagement from "views/pages/settings/adsManagement";
import ContactUs from "views/pages/settings/contactUs";
import Legal from "views/pages/settings/legal";
import Notifications from "views/pages/settings/notifications";
import Payments from "views/pages/settings/payments";
import Purchases from "views/pages/settings/purchases";
import Security from "views/pages/settings/security";
import AddProduct from "views/pages/sellProduct";
import AddPost from "views/pages/addPost";
import Profile from "views/pages/myProfile";
import WebinarDetails from "views/pages/webinar/webinarDetails";
import TrainingDetails from "views/pages/training/trainingDetails";
import GroupDetails from "views/pages/groups/groupDetails";
import Page404 from "views/pages/404";

const Logout = ({ logout }) => {
  const navigate = useNavigate();
  useEffect(() => {
    logout();
    navigate("/sign-in");
  });
  return <></>;
};

const AppRoutes = (props) => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={!props.auth.isLoggedIn ? <Home /> : <Dashboard />}
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/view-post" element={<ViewPost />} />
        <Route path="/buy" element={<BuyAndSell />} />
        <Route path="/add-post" element={<AddPost />} />
        <Route path="/view-product" element={<ViewProduct />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/sell" element={<AddProduct />} />

        {/* Groups, Webinars & Training */}
        <Route path="/webinar-details" element={<WebinarDetails />} />
        <Route path="/training-details" element={<TrainingDetails />} />
        <Route path="/group-details" element={<GroupDetails />} />

        {/* settings */}
        <Route path="/settings" element={<Settings />}>
          <Route path="payments" element={<Payments />} />
          <Route path="ads-management" element={<AdsManagement />} />
          <Route path="purchases" element={<Purchases />} />
          <Route path="security" element={<Security />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="legal" element={<Legal />} />
        </Route>
        <Route path="/logout" element={<Logout logout={props.logout} />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/create-account" element={<AccountType />} />
        <Route path="/create-account/:type" element={<CreateAccount />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/create-password" element={<CreatePassword />} />
        <Route path="/complete-profile" element={<CompleteProfile />} />
        <Route path="/recover-password" element={<RecoverPassword />} />
        <Route
          path="/recover-password/verify-email"
          element={<VerifyEmailRecover />}
        />
        <Route
          path="/recover-password/create-password"
          element={<CreatePasswordRecover />}
        />
        <Route
          path="/recover-password/password-recovered"
          element={<PasswordRecovered />}
        />
        <Route
          path="*"
          element={<Page404 />}
        />
      </Routes>

    </>
  );
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logoutAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppRoutes);
