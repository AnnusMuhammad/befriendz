import MainContent from "views/components/screenComponents/viewPost/mainContent";
import SideBar from "views/components/screenComponents/viewPost/sideBar";
import PageLayout from "views/layouts/page";

export default function ViewPost() {
  return (
    <>
      <PageLayout sideBar={<SideBar />} mainContent={<MainContent />} />
    </>
  );
}
