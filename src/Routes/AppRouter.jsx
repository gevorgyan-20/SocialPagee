import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Registration from "../Pages/Registration/Registration";
import { useDispatch, useSelector } from "react-redux";
import { fecthLoginData, fetchAllUsersData } from "../Store/allUsersDataSlice/API";
import LogIn from "../Pages/LogIn/LogIn";
import UserPage from "../Pages/UserPage/UserPage";
import { selectAllUsersData } from "../Store/allUsersDataSlice/allUsersDataSlice";
import ProfileAllUsersPage from "../Pages/ProfileAllUsersPage/ProfileAllUsersPage";
import ProfileLayout from "../Pages/ProfileLayout/ProfileLayout";
import Layout from "../Pages/Layout/Layout";
import ProfileFriends from "../Pages/ProfileFriends/ProfileFriends";
import ProfileFriendRequests from "../Pages/ProfileFriendRequests/ProfileFriendRequests";
import ProfilePhotos from "../Pages/ProfilePhotos/ProfilePhotos";
import ProfilePosts from "../Pages/ProfilePosts/ProfilePosts";

const AppRouter = () => {
  const { logInData } = useSelector(selectAllUsersData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsersData());
    dispatch(fecthLoginData());
  }, []);


  return (
    <div>
      <Routes>
        {logInData?.id ? (
          <Route path="/" element={<ProfileLayout />}>
            <Route index element={<UserPage />} />
            <Route path="/allUsers" element={<ProfileAllUsersPage />} />
            <Route path="/friends" element={<ProfileFriends/>} />
            <Route path="/requests" element={<ProfileFriendRequests/>} />
            <Route path="/posts" element={<ProfilePosts/>} />
            <Route path="/photos" element={<ProfilePhotos/>} />
          </Route>
        ) : (
          <Route path="/" element={<Layout />}>
            <Route index element={<Registration />} />
            <Route path="login" element={<LogIn />} />
          </Route>
        )}
      </Routes>
    </div>
  );
};

export default AppRouter;
