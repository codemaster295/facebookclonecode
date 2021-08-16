import { Facebook } from '@material-ui/icons';
import { Router } from 'express';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom'
import CreatePost from '../Facebook/components/createcomponent/CreatePost';
import Navbar from '../Facebook/components/navbar/Navbar'
import Freinds from '../freinds/Freinds';
import EmailVarification from '../login/EmailVarification';
import Login from '../login/Login';
import ProfileImage from './component/ProfileImage';
import Profilenav from './component/Profilenav';

const Profile = () => {
    const [email ,setEmail] = useState("")
    const location = useLocation();
    useEffect(()=>{
        setEmail(location.state.state.id)

    },[])
    console.log(email)
    return (
        <div className="profilemain container mx-auto">
            <Navbar />
            <ProfileImage email={email} />
         
        </div>
    )
}

export default Profile
        