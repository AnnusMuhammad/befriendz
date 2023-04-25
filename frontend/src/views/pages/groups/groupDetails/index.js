import MainContent from "views/components/screenComponents/group/groupDetails/mainContent";
import SideBar from "views/components/screenComponents/group/groupDetails/sidebar";
import PageLayout from "views/layouts/page";

const GroupDetails = () => {
  return (
    <>
      <PageLayout sideBar={<SideBar />} mainContent={<MainContent />} />
    </>
  );
};

export default GroupDetails;
