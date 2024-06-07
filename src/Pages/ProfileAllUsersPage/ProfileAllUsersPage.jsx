import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Avatar from "../../images/ProfileImages/User-avatar.svg.png";
import { selectAllUsersData } from '../../Store/allUsersDataSlice/allUsersDataSlice'
import "./profileAllUsersPage.css";
import { fecthAddFriend } from '../../Store/allUsersDataSlice/API';

const ProfileAllUsersPage = () => {
    const dispatch = useDispatch()
    const {usersData, logInData} = useSelector(selectAllUsersData)

    const handlerAddFriend = (el) => {
        const newUser = {
            ...el,
            requests: [...el.requests, logInData]
        }

        dispatch(fecthAddFriend({ id: el.id, data: newUser }));
    }

    const removeFriendRequest = (el) => {
        const array = el.requests.filter((request) => request.id !== logInData.id)
        const newUser = {
            ...el,
            requests: array
        }
        dispatch(fecthAddFriend({ id: el.id, data: newUser }));
    };

    return (
        <div className="profileAllUsersPage">
            {usersData.map((el) => {
                if(el.login !== logInData.login && !logInData.friends.find((friend) => friend.id === el.id) && !logInData.requests.find((request) => request.id === el.id)) {
                    return (
                      <div key={el.id} className="eachUser">
                        <div>
                          <img src={Avatar} />
                        </div>
                        <div>
                          <p>
                            {el.firstName} {el.lastName}
                          </p>
                        </div>
                        <div>
                          {el.requests.find((ell) => ell.id === logInData.id) ? (
                            <button onClick={() => removeFriendRequest(el)}>Unfollow</button>
                          ) : (
                            <button onClick={() => handlerAddFriend(el)}>Add</button>
                          )}
                        </div>
                      </div>
                    );
                }
            })}
        </div>
    )
}

export default ProfileAllUsersPage