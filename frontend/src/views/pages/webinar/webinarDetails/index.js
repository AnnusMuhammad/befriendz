import MainContent from "views/components/screenComponents/webinar/webinarDetails/mainContent";
import SideBar from "views/components/screenComponents/webinar/webinarDetails/sidebar";
import PageLayout from "views/layouts/page";

const WebinarDetails = () => {
  return (
    <>
      <PageLayout sideBar={<SideBar />} mainContent={<MainContent />} />
    </>
  );
};

export default WebinarDetails;
