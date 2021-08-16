import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

const ProfileMenu = (props) => {
    const [username , setUserName] = useState("")
    const history = useHistory("")
    
		axios
			.get(`http://e25877ca2c15.ngrok.io/${props.userid}`)
			.then((d) => {
				setUserName(d.data.fname + d.data.lname);
			})
			.catch((Err) => {
				console.log(Err);
			});
			
		const profilepage = () =>{
            history.push("/profile" , {
                state:{
                    id:props.userid
                }
            })
        }
        
    return (
        
        <>{username?<div className="fixed profilemneu top-16 right-0 w-1/4 text-black bg-white p-5 shadow-2xl rounded-lg">
            <div className="flex items-center space-x-5 p-2 cursor-pointer hover:bg-bg-theme transition-all duration-100 ease-linear rounded-lg">
                <FontAwesomeIcon icon={faUserCircle} className="text-gray-500" style={{fontSize:70}}/>          
                <div className="flex flex-col">
                    <span className="text-black font-semibold tracking-wider">{username}</span>
                    <span className="text-gray-500 font-medium" onClick={profilepage}>See your profile</span>
                </div>
            </div>
        </div>:""}</>
    )
}

export default ProfileMenu
