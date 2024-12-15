import React from "react";
import "./userProfileNavbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectAllUsersData } from "../../Store/allUsersDataSlice/allUsersDataSlice";
import { fetchLogOut } from "../../Store/allUsersDataSlice/API";
import FriendsIcon from "../../icons/ProfileIcons/FriendsIcon";
import RequestIcon from "../../icons/ProfileIcons/RequestIcon";
import PostIcon from "../../icons/ProfileIcons/PostIcon";
import PhotoIcon from "../../icons/ProfileIcons/PhotoIcon";

const UserProfileNavbar = () => {
  const navigate = useNavigate();
  const { logInData } = useSelector(selectAllUsersData);
  const dispatch = useDispatch();
  const handlerLogOut = (id) => {
    dispatch(fetchLogOut(id));
    navigate("/login");
  };
  return (
    <div className="UserRightBlock">
      <nav>
        <NavLink to='/'>
          <p>Profile</p>
        </NavLink>
        <NavLink to='/friends'>
          <FriendsIcon />
          <p>Friends</p>
        </NavLink>
        <NavLink to='/requests'>
          <RequestIcon />
          <p>Requests</p>
        </NavLink>
        <NavLink to='/posts'>
          <PostIcon />
          <p>Posts</p>
        </NavLink>
        <NavLink to='/photos'>
          <PhotoIcon />
          <p>Photos</p>
        </NavLink>
        <NavLink to="/allUsers">
          <p>All Users</p>
        </NavLink>
        <button onClick={() => handlerLogOut(logInData.id)}>
          <p>Log Out</p>
        </button>
      </nav>
    </div>
  );
};

export default UserProfileNavbar;
