import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import ProtectedMiddleware from "middleware/protectedMiddleware";
import BecomeLifeCoachModal from "views/components/screenComponents/myProfile/becomeALifeCoachModal";
import EditProfileModal from "views/components/screenComponents/myProfile/editProfileModal";
import MainContent from "views/components/screenComponents/myProfile/mainContent";
import SideBar from "views/components/screenComponents/myProfile/profileSidebar";
import PageLayout from "views/layouts/page";
import Page404 from "views/pages/404/index";
import UserService from "services/user.service";

const Profile = (props) => {
  const [isBecomeLifeCoachModalOpen, setIsBecomeLifeCoachModalOpen] =
    useState(false);
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
  const [is404, set404] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const [profile, setProfile] = useState(false);
  const [refetch, setRefetch] = useState(false);
  const username = useParams().username || null;
  const location = useLocation();


  useEffect(() => {
    async function fetchProfile() {
          setIsFetching(() => true);
      await UserService.getProfile( props.auth.user.token, username).then(
        (response) => {
          setProfile(response.data.data);
        },
        (error) => {
          set404(true);
        }
        );
        setIsFetching(() => false);
      }
    fetchProfile();
    return () => {
      setProfile(false);
    };
  }, [location, refetch]);


  const updateFreindStatus = (freindStatus) => [
    setProfile((prevState)=>{
      return {
        ...prevState,
        friendStatus: freindStatus,
      }
    })
  ]
  const refetchProfile = () => {
    setRefetch((prevState) => !prevState);
  }
  

  return (
    <>
      {!is404 ? (
        <>
          <PageLayout
            sideBar={
              <SideBar
                user={profile?.user}
                friendStatus={profile?.friendStatus}
                totalFriends={profile?.totalFriends}
                friends={profile?.friends}
                isMyProfile={
                  profile?.user?.username === props.auth.user.username
                }
                onFriendStatusChange={updateFreindStatus}
                setOpen={setIsEditProfileModalOpen}
                setIsBecomeLifeCoachModalOpen={setIsBecomeLifeCoachModalOpen}
                isFetching={isFetching}
              />
            }
            mainContent={<MainContent isMyProfile={
                  profile?.user?.username === props.auth.user.username
                }/>}
          />
          {profile?.user?.username === props.auth.user.username && (
            <>
              <EditProfileModal
                open={isEditProfileModalOpen}
                setOpen={setIsEditProfileModalOpen}
                refetchProfile={refetchProfile}
              />
              <BecomeLifeCoachModal
                open={isBecomeLifeCoachModalOpen}
                setOpen={setIsBecomeLifeCoachModalOpen}
              />
            </>
          )}
        </>
      ) : (
        <Page404 />
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(ProtectedMiddleware(Profile));
