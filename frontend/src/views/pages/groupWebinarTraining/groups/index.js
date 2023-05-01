import React, { Fragment } from "react";
import MainContent from "views/components/screenComponents/groupWebinarTraining/group/mainContent";
import PageLayout from "views/layouts/page";
import LeftSideBar from "./LeftSideBar";

const Groups = ({ activeTab, setActiveTab }) => {
  return (
    <Fragment>
      <PageLayout
        sideBar={<LeftSideBar />}
        mainContent={
          <MainContent setActiveTab={setActiveTab} activeTab={activeTab} />
        }
      />
    </Fragment>
  );
};

export default Groups;
