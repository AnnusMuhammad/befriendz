import React, { useState } from "react";
import Groups from "./groups";
import Webinar from "./Webinars";
import Training from "./trainings";

const GroupWebinarTraining = () => {
  const [activeTab, setActiveTab] = useState("Groups");
  const renderActive = () => {
    switch (activeTab) {
      case "Groups":
        return <Groups activeTab={activeTab} setActiveTab={setActiveTab} />;
      case "Webinars":
        return <Webinar activeTab={activeTab} setActiveTab={setActiveTab} />;
      case "Trainings":
        return <Training activeTab={activeTab} setActiveTab={setActiveTab} />;
      default:
        return null;
    }
  };
  return <div>{renderActive()}</div>;
};

export default GroupWebinarTraining;
