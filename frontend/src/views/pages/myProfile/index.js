import { useState } from "react";
import ProtectedMiddleware from "middleware/protectedMiddleware";
import BecomeLifeCoachModal from "views/components/screenComponents/myProfile/becomeALifeCoachModal";
import EditProfileModal from "views/components/screenComponents/myProfile/editProfileModal";
import MainContent from "views/components/screenComponents/myProfile/mainContent";
import SideBar from "views/components/screenComponents/myProfile/profileSidebar";
import PageLayout from "views/layouts/page";

const Profile = () => {
  const [isBecomeLifeCoachModalOpen, setIsBecomeLifeCoachModalOpen] =
    useState(false);
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);

  return (
    <>
      <PageLayout
        sideBar={<SideBar setOpen={setIsEditProfileModalOpen} />}
        mainContent={<MainContent />}
      />
      <BecomeLifeCoachModal
        open={isBecomeLifeCoachModalOpen}
        setOpen={setIsBecomeLifeCoachModalOpen}
      />
      <EditProfileModal
        open={isEditProfileModalOpen}
        setOpen={setIsEditProfileModalOpen}
      />
    </>
  );
};

export default ProtectedMiddleware(Profile);
