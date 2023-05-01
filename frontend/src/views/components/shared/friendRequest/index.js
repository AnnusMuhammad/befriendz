import { USER_TYPE } from "constants/user.constant";
import React from "react";
import FrendRequestButton from "views/components/shared/friendRequest/button";

const FriendRequest = ({friendRequest}) => {
  return (
    <li className="flex items-center space-x-3 py-[0.5rem]">
      <div className="flex-shrink-0">
        <img
          className="h-[40px] w-[40px] rounded-full"
          src={
            friendRequest.fromUser.profileImage
          }
          alt={`${friendRequest.fromUser.username}`}
        />
      </div>
      <div className="min-w-0 flex-1">
        <p className="font-openSans_semiBold text-[#2A2A2A] text-[14px] mb-0">
          {friendRequest.fromUser.type === USER_TYPE.PERSONAL ? `${friendRequest.fromUser.first_name || 'UNKNOWN NAME'} ${friendRequest.fromUser.last_name || ''}` : 
          <>{`${friendRequest.fromUser.business_name || friendRequest.fromUser.username} `}<span className="font-openSans_regular text-c_949494 text-[10px]">{friendRequest.fromUser.business_type || ''}</span></>}
        </p>
        <p className="font-openSans_regular text-c_949494 text-[10px] mb-0">
          @{friendRequest.fromUser.username}
        </p>
      </div>
      <FrendRequestButton friendStatus={friendRequest}/>
    </li>
  );
};

export default FriendRequest;
