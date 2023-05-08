import { useEffect, useState } from "react";
import { connect } from "react-redux";
import MainContent from "views/components/screenComponents/friends/mainContent";
import SideBar from "views/components/screenComponents/friends/sidebar";
import PageLayout from "views/layouts/page";
import DashboardService from "services/dashboard.service";
import ProtectedMiddleware from "middleware/protectedMiddleware";
import { useParams } from "react-router-dom";
import Page404 from "../404";

const Friends = (props) => {

  const type = useParams().type || 'friends';

  const [friendRequests, setFriendRequests] = useState([]);
  const [friends, setFriends] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  async function fetchProfile() {      
    setIsFetching(() => true);
    await DashboardService.friends( props.auth.user.token,).then(
      (response) => {
        setFriendRequests(response.data.data.friendRequests);
        setFriends(response.data.data.friends)
      },
      (error) => {
      }
    );
    setIsFetching(() => false);
  }

  useEffect(() => {
    fetchProfile();
    return () => {
      setFriendRequests([])
      setFriends([])
    }
  }, [])

  const filterFriendRquest = (friendRequest) => { 
    if(type === 'request'){
      if(friendRequests.friendRequests.length > 0){
        setFriendRequests((prevState) => {
          return prevState?.friendRequests.filter((request)=>(request._id !== friendRequest?._id))
        })
      }
    }
    if(type === 'friends'){
      if(friends.friends.length > 0){
        setFriends((prevState) => {
          return prevState?.friends.filter((request)=>(request._id !== friends?._id))
        })
      }
    }
  }

  if(type === "suggestions" || type === "friends" || type === "request")
  return (
    <>
      <PageLayout
        sideBar={
          <SideBar
            activeOPtion={type}
          />
        }
        mainContent={<MainContent  isFetching={isFetching} onFriendStatusChange={filterFriendRquest} friendRequests={friendRequests} friends={friends} activeOPtion={type} />}
      />
    </>
  );
  else
  return <Page404 />;
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(ProtectedMiddleware(Friends));