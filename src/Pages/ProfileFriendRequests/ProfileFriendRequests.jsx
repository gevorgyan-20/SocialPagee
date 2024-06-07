import React from 'react'
import Avatar from "../../images/ProfileImages/User-avatar.svg.png";
import { useDispatch, useSelector } from 'react-redux';
import { selectAllUsersData } from '../../Store/allUsersDataSlice/allUsersDataSlice';
import { fecthAcceptRequest, fecthAddFriend } from '../../Store/allUsersDataSlice/API';


const ProfileFriendRequests = () => {
    const dispatch = useDispatch()
    const {usersData, logInData} = useSelector(selectAllUsersData)

    const acceptFriendRequest = (user) => {
        const array = logInData.requests.filter((request) => request.id !== user.id)
        const newObj = {
            ...logInData,
            requests: array,
            friends: [...logInData.friends, user]
        }

        dispatch(fecthAddFriend({ id: logInData.id, data: newObj }))
        dispatch(fecthAcceptRequest({ id: logInData.id, data: newObj}))

        const newUser = {
            ...user,
            friends: [...user.friends, logInData]
        }
        dispatch(fecthAddFriend({ id: user.id, data: newUser }))
    }

  return (
    <div className='profileAllUsersPage'>
        {logInData.requests.length === 0 ? <span className='noFriendText'>You Have No Requests Yet</span> : logInData.requests.map((request) => {
            const user = usersData.find((el) => el.id === request.id)
            return (
              <div key={user.id} className="eachUser">
                <div>
                  <img src={Avatar} />
                </div>
                <div>
                  <p>
                    {user?.firstName} {user?.lastName}
                  </p>
                </div>
                <div>
                  <button onClick={() => acceptFriendRequest(user)}>Accept</button>
                  <button>Disagree</button>
                </div>
              </div>
            );
        })}
    </div>
  )
}

export default ProfileFriendRequests