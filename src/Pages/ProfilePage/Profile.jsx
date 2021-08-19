import React, { useEffect } from 'react'
import { useState } from 'react';
import {  useLocation  } from 'react-router-dom'
import Navbar from '../Facebook/components/navbar/Navbar'
import ProfileImage from './component/ProfileImage';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Profilenav from './component/Profilenav';
import SimpleTabs from './component/Profilenav';


const Profile = () => {
    const [email ,setEmail] = useState("")
    const location = useLocation();
    useEffect(()=>{
        setEmail(location.state.state.id)

    },[])
    console.log(email)
const [posts , setPosts]=useState(true)
const [about , setAbout]=useState(false)
const [freinds , setFreinds]=useState(false)
const [photos , setPhotos]=useState(false)
const [storyArchives , setStoryArchives]=useState(false)
const [videos , setVideos]=useState(false)
const [more ,setMore]=useState(false)
    return (
        <div className="profilemain container mx-auto">
            <Navbar />
            <ProfileImage email={email} />
           <SimpleTabs />
        </div>
    )
}

export default Profile
        