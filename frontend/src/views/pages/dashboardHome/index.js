import ProtectedMiddleware from "middleware/protectedMiddleware";
import { useState } from "react";
import FreeTrialModal from "views/components/screenComponents/home/freeTrialModal";
import MainContent from "views/components/screenComponents/home/mainContent";
import PaymentModal from "views/components/screenComponents/home/paymentModal";
import SetLocationModal from "views/components/screenComponents/home/setLocationModal";
import SideBar from "views/components/screenComponents/home/sidebar";
import SubscriptionModal from "views/components/screenComponents/home/subscriptionModal";
import PageLayout from "views/layouts/page";

const Home = () => {
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [isFreeTrialOpen, setIsFreeTrialOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false);
  return (
    <>
      <PageLayout sideBar={<SideBar />} mainContent={<MainContent />} />

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

export default ProtectedMiddleware(Home);
