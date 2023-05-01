import { Fragment } from "react";
import MainContent from "views/components/screenComponents/groupWebinarTraining/training/mainContent";
import PageLayout from "views/layouts/page";
import SideBar from "views/components/screenComponents/groupWebinarTraining/training/sideBar";

const Training = ({ activeTab, setActiveTab }) => {
  return (
    <Fragment>
      <PageLayout
        sideBar={<SideBar />}
        mainContent={
          <MainContent setActiveTab={setActiveTab} activeTab={activeTab} />
        }
      />
    </Fragment>
  );
};

export default Training;
