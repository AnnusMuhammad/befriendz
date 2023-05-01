import { useEffect, useState } from "react";
import { connect } from "react-redux";
import MainContent from "views/components/screenComponents/friends/mainContent";
import SideBar from "views/components/screenComponents/friends/sidebar";
import PageLayout from "views/layouts/page";
import { Images } from "../../../config/images";
import FriendsService from "services/friends.service";
import ProtectedMiddleware from "middleware/protectedMiddleware";

const { profileTickIcon } = Images;

const Friends = (props) => {
  const [activeOPtion, setActiveOption] = useState({
    title: "Suggested For You",
    icon: profileTickIcon,
    iconClass: "bg-[#C5EBC4]",
    itemClass: "bg-[#EAF8EA]",
    subtitle: "Meet New People",
    option: "suggestions",
  });
  const [friendRequests, setFriendRequests] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    async function fetchProfile() {
      await FriendsService.fetchAllFriendList( props.auth.user.token,).then(
        (response) => {
          setFriendRequests(response.data.data.friendRequests);
          setIsFetching(() => false);
        },
        (error) => {
          setIsFetching(() => false);
        }
      );
    }
      fetchProfile();
    return () => {
      setFriendRequests([]);
    };
  }, [])

  return (
    <>
      <PageLayout
        sideBar={
          <SideBar
            activeOPtion={activeOPtion}
            setActiveOption={setActiveOption}
          />
        }
        mainContent={<MainContent  isFetching={isFetching} friendRequests={friendRequests} activeOPtion={activeOPtion} />}
      />
    </>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(ProtectedMiddleware(Friends));