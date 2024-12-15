import React from 'react'
import { useSelector } from 'react-redux'
import Avatar from "../../images/ProfileImages/User-avatar.svg.png";
import { selectAllUsersData } from '../../Store/allUsersDataSlice/allUsersDataSlice'
import './profileFriends.css'

const ProfileFriends = () => {
    const {logInData, usersData} = useSelector(selectAllUsersData)
    
  return (
    <div className='profileAllUsersPage'>
        {logInData.friends.length === 0 ? <span className='noFriendText'>You Have No Friends Yet</span> : logInData.friends.map((el, index) => {
            const friend = usersData.find((user) => user.id === el.id)
            return (
                <div key={index} className='eachUser'>
                    <div>
                        <img src={Avatar}/>
                    </div>
                    <div>
                        <p>{friend?.firstName} {friend?.lastName}</p>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default ProfileFriends