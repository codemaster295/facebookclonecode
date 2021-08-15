import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../Facebook/components/navbar/Navbar'
import ProfileImage from './component/ProfileImage';
import Profilenav from './component/Profilenav';

const Profile = () => {
    const location = useLocation();
    console.log(location)
    return (
        <div className="profilemain">
            <Navbar />
            <ProfileImage />
        </div>
    )
}

export default Profile
        