import React from 'react'
import { Outlet } from 'react-router-dom'
import UserProfileNavbar from '../../Components/UserProfileNavbar/UserProfileNavbar';

const ProfileLayout = () => {
  return (
    <div>
        <UserProfileNavbar/>
        <Outlet/>
    </div>
  )
}

export default ProfileLayout;