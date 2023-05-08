import { useEffect, useState } from "react";
import { connect } from "react-redux";
import ProtectedMiddleware from "middleware/protectedMiddleware";
import FreeTrialModal from "views/components/screenComponents/home/freeTrialModal";
import MainContent from "views/components/screenComponents/home/mainContent";
import PaymentModal from "views/components/screenComponents/home/paymentModal";
import SetLocationModal from "views/components/screenComponents/home/setLocationModal";
import SideBar from "views/components/screenComponents/home/sidebar";
import SubscriptionModal from "views/components/screenComponents/home/subscriptionModal";
import PageLayout from "views/layouts/page";
import DashboardService from "services/dashboard.service";

const DashboardHome = (props) => {
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [isFreeTrialOpen, setIsFreeTrialOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false);
  const [data, setData] = useState(false);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(()=>{
    async function fetchData (){
      setIsFetching(true);
     await DashboardService.home(props.auth.user.token).then((response)=>{
      setData(response.data.data);
     })
     setIsFetching(false);
    }
    fetchData();
  }, [])

  return (
    <>
      <PageLayout sideBar={<SideBar isFetching={isFetching}/>} mainContent={<MainContent data={data} isFetching={isFetching} />} />

      {isLocationModalOpen && (
        <SetLocationModal
          open={isLocationModalOpen}
          setOpen={setIsLocationModalOpen}
        />
      )}
      {isFreeTrialOpen && (
        <FreeTrialModal open={isFreeTrialOpen} setOpen={setIsFreeTrialOpen} />
      )}
      {isPaymentModalOpen && (
        <PaymentModal
          open={isPaymentModalOpen}
          setOpen={setIsPaymentModalOpen}
        />
      )}

      {isSubscriptionModalOpen && (
        <SubscriptionModal
          open={isSubscriptionModalOpen}
          setOpen={setIsSubscriptionModalOpen}
        />
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(ProtectedMiddleware(DashboardHome));