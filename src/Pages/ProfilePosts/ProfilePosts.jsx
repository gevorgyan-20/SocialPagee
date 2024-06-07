import React from 'react'
import './profilePosts.css'
import { useSelector } from 'react-redux'
import { selectAllUsersData } from '../../Store/allUsersDataSlice/allUsersDataSlice'

const ProfilePosts = () => {
    const {usersData, logInData} = useSelector(selectAllUsersData)
  return (
    <div className='profilePhotos'>
        {usersData.map((el) => {
            if(el.friends.find((friend) => friend.id === logInData.id)) {

                return(
                    el.images.map((image) => {
                        return (
                            <div className='eachPost' key={new Date().getTime().toString()}>
                                <img src={image}/>
                                <h3>{el.firstName}</h3>
                            </div>
                        )
                    })
                )
            }
        })}
    </div>
  )
}

export default ProfilePosts