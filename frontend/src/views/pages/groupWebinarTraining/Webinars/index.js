import { Fragment } from "react";
import MainContent from "views/components/screenComponents/groupWebinarTraining/webinar/mainContent";
import SideBar from "views/components/screenComponents/groupWebinarTraining/webinar/sideBar";
import PageLayout from "views/layouts/page";

const Webinar = ({ activeTab, setActiveTab }) => {
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

export default Webinar;
