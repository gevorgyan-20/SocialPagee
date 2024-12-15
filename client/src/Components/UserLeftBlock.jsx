import React from "react";
import Avatar from "../images/ProfileImages/User-avatar.svg.png";
import UserIcon from "./../icons/ProfileIcons/UserIcon";
import BirthIcon from "./../icons/ProfileIcons/BirthIcon";
import Gendericon from "./../icons/ProfileIcons/Gendericon";
import AddresIcon from "./../icons/ProfileIcons/AddresIcon";
import { useSelector } from "react-redux";
import { selectAllUsersData } from "../Store/allUsersDataSlice/allUsersDataSlice";

const UserLeftBlock = () => {
  const { logInData } = useSelector(selectAllUsersData);
  const userData = logInData;

  return (
    <div className="UserInfLeftBlock">
      <img src={Avatar} alt="" />
      <div className="UserName">
        <UserIcon />
        <h1>{userData?.firstName}</h1>
        <h1>{userData?.lastName}</h1> 
      </div>
      <div className="UAgeInf">
        <BirthIcon />
        <p>{userData?.age}</p>
      </div>
      <div className="UgenderInf">
        <Gendericon />
        <p>{userData?.gender}</p>
      </div>
      <div className="UAddressInf">
        <AddresIcon />
        <p>{userData?.address}</p>
      </div>
    </div>
  );
};

export default UserLeftBlock;
