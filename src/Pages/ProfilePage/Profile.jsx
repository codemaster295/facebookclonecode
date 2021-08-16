import { Facebook } from '@material-ui/icons';

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
import ReactDOM from 'react-dom';
import App from '../../App';
import { faChevronCircleDown, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Post from './component/Posts'
import Posts from './component/Posts';

// import Navbar from '../Facebook/components/navbar/Navbar';


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
            <div className="container profilenav mx-auto px-4 mt-10 bg-white">
            <ul className="flex items-center  space-x-10 font-semibold text-sm">
                <li onClick={()=>{setPosts(true)}} className="">Posts</li>
                <li onClick={()=>{setAbout(true)}} className="">About</li>
                <li onClick={()=>{setFreinds(true)}} className="">Freinds</li>
                <li onClick={()=>{setPhotos(true)}} className="">Photos</li>
                <li onClick={()=>{setStoryArchives(true)}} className="">Story Archives</li>
                <li onClick={()=>{setVideos(true)}} className="">Videos</li>
                <li className="" onClick={()=>{setMore(true)}}>
                    <span className="flex items-center space-x-2">
                        <h1>More</h1>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </span>
                </li>
                <li className=""  onClick={()=>{setPosts(true)}}>Posts</li>
            </ul>
        </div>
        {about?<About>
        {freinds?<Freinds>
        {photos?<Photos>
        {storyArchives?<StoryArchives>
        {videos?<Videos>
        {more?<More>
        
        </div>
    )
}

export default Profile
        