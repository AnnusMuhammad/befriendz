import MainContent from "views/components/screenComponents/training/trainingDetails/mainContent";
import SideBar from "views/components/screenComponents/training/trainingDetails/sidebar";
import PageLayout from "views/layouts/page";

const TrainingDetails = () => {
  return (
    <>
      <PageLayout sideBar={<SideBar />} mainContent={<MainContent />} />
    </>
  );
};

export default TrainingDetails;
