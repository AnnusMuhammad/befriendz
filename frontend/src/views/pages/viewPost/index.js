import { useState } from "react";
import MainContent from "views/components/screenComponents/viewPost/mainContent";
import ReportPostModal from "views/components/screenComponents/viewPost/reportPostModal";
import SideBar from "views/components/screenComponents/viewPost/sideBar";
import PageLayout from "views/layouts/page";

export default function ViewPost() {
  const [isReportPostModalOpen, setIsReportPostModalOpen] = useState(true);
  return (
    <>
      <PageLayout sideBar={<SideBar />} mainContent={<MainContent />} />

      <ReportPostModal
        open={isReportPostModalOpen}
        setOpen={setIsReportPostModalOpen}
      />
    </>
  );
}
