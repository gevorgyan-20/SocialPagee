import React from 'react'
import './profilePhotos.css'
import { useSelector } from 'react-redux'
import { selectAllUsersData } from '../../Store/allUsersDataSlice/allUsersDataSlice'

const ProfilePhotos = () => {
    const {logInData} = useSelector(selectAllUsersData)
  return (
    <div className='profilePhotos'>
        {logInData.images.map((image) => {
            return (
                <div className='eachImage' key={new Date().getTime().toString()}>
                    <img src={image}/>
                </div>
            )
        })}
    </div>
  )
}

export default ProfilePhotos;