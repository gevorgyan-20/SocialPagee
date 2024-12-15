import React, { useState } from "react";
import Avatar from "./image/360_F_186293166_P4yk3uXQBDapbDFlR17ivpM6B1ux0fHG.jpg";
import "./UserProfile.css";
import GenderIcon from "./icons/GenderIcon";
import BirthIcon from "./icons/BirthIcon";
import EmailIcon from "./icons/EmailIcon";
import AdressIcon from "./icons/AdressIcon";
import TelegramIcom from "./icons/TelegramIcom";
import TwitIcon from "./icons/TwitIcon";
import Whatsapicon from "./icons/Whatsapicon";
import InstIcon from "./icons/InstIcon";
import ViberIcon from "./icons/ViberIcon";
import { useDispatch, useSelector } from "react-redux";
import { selectAllUsersData } from "../../Store/allUsersDataSlice/allUsersDataSlice";
import { fecthAcceptRequest, fecthAddFriend } from "../../Store/allUsersDataSlice/API";

const UserProfile = () => {
  const [newImg, setNewImg] = useState("");
  const dispatch = useDispatch();
  const { logInData } = useSelector(selectAllUsersData);

  const addPhotoInProfile = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      const newObj = {
        ...logInData,
        images: [...logInData.images, reader.result],
      };

      dispatch(fecthAcceptRequest({ id: logInData.id, data: newObj }));
      dispatch(fecthAddFriend({ id: logInData.id, data: newObj }));
  }
}

  const addMainPhoto = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      const newObj = {
        ...logInData,
        profileImage: reader.result,
      };

      dispatch(fecthAcceptRequest({ id: logInData.id, data: newObj }));
      dispatch(fecthAddFriend({ id: logInData.id, data: newObj }));
    };
  };
  return (
    <section className="UserProfilSec">
      <div className="UserProfile">
        <div className="UserPRightBlock">
          <div className="UserImgBox">
            <img src={logInData.profileImage} alt="" />
          </div>
          <div className="UserPName">
            <h1>{logInData.firstName}</h1>
            <h1>{logInData.lastName}</h1>
          </div>
          <label>Select Image to Add</label>
          <input type="file" onChange={addPhotoInProfile}/>
          <label>Select Profile Image</label>
          <input type="file" onChange={addMainPhoto} />
          <button className="UProfilEdit">Edit Profile</button>
        </div>
        <div className="UserPLeftBlock">
          <div className="UProfileCounts">
            <div className="PhotosCounter">
              <span>{logInData.images.length}</span>
              <i>Photos</i>
            </div>
            <div className="FriendsCounter">
              <span>{logInData.friends.length}</span>
              <i>Friends</i>
            </div>
          </div>

          <div className="UProfilLine"></div>

          <div className="UProfileInf">
            <span>
              <EmailIcon />
              <p>{logInData.email}</p>
            </span>
            <span>
              <GenderIcon />
              <p>{logInData.gender}</p>
            </span>
            <span>
              <AdressIcon />
              <p>{logInData.address}</p>
            </span>
          </div>

          <div className="UProfileWebLinks">
            <InstIcon />
            <TelegramIcom />
            <TwitIcon />
            <Whatsapicon />
            <ViberIcon />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
