import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const ProfileMenu = () => {
    return (
        
        <div className="fixed top-16 right-0 w-1/4 text-black bg-white p-5 shadow-2xl rounded-lg">
            <div className="flex items-center space-x-5 p-2 cursor-pointer hover:bg-bg-theme transition-all duration-100 ease-linear rounded-lg">
                <FontAwesomeIcon icon={faUserCircle} className="text-gray-500" style={{fontSize:70}}/>          
                <div className="flex flex-col  items-center">
                    <span className="text-black font-semibold tracking-wider">MMO Globalia</span>
                    <span className="text-gray-500 font-medium">See your profile</span>
                </div>
            </div>
        </div>
    )
}

export default ProfileMenu
