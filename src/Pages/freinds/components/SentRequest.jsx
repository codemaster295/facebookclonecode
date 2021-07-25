import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import FreindRequestSent from './FreindRequestSent'

const SentRequest = ({ status }) => {
    const [fbData, setFbData] = useState("");
    useEffect(() => {
        axios
            .get(
                "https://api.unsplash.com/photos/?client_id=SFVnJp_wl_0VdkPEul9E4_6-CC6n4r8nzZQn4jVoeLw"
            )
            .then((d) => {
                setFbData(d.data);
            })
            .catch((Err) => {
                console.log(Err);
            });
    }, []);
    return (
        <div className="sentrequest flex items-center justify-center fixed  top-0 left-0  w-full h-full  bg-white bg-opacity-80">
            <div className="box w-1/3 bg-white shadow-2xl p-5 border-black relative z-50 space-y-5">
                <div className="flex items-center">
                    <div className="relative w-full h-10 m-2 flex items-center justify-center">
                        <h1 className="text-black font-bold tracking-widest trext-lg text-center">Sent Request</h1>
                        <span className="absolute top-1/2 right-0 transform -translate-y-1/2 cursor-pointer hover:bg-gray-400 hover:text-gray-600 transition-all duration-100 ease-linear  bg-gray-300 rounded-full w-8 h-8 flex justify-center items-center" onClick={status}>
                            <FontAwesomeIcon icon={faTimes} className="text-xl font-thin text-gray-500 " />
                        </span>
                    </div>

                </div>
                <span className="w- full block h-px border-b border-gray-300"></span>
                <div className="h-80 overflow-y-scroll scrollbar scrollbar-thumb-gray-300 scrollbar-track-gray-50">
                <h1 className="font-bold text-base tracking-widest text-black">{fbData.length*4} Sent Requests</h1>

                {fbData &&
                        fbData.map((props, i) => (
                            <FreindRequestSent username={fbData[i].user.name} userImg={fbData[i].user.profile_image.large}  />

                        ))}
                        {fbData &&
                            fbData.map((props, i) => (
                                <FreindRequestSent username={fbData[i].user.name} userImg={fbData[i].user.profile_image.large}  />
    
                            ))}
                            {fbData &&
                                fbData.map((props, i) => (
                                    <FreindRequestSent username={fbData[i].user.name} userImg={fbData[i].user.profile_image.large}  />
        
                                ))}
                                {fbData &&
                                    fbData.map((props, i) => (
                                        <FreindRequestSent username={fbData[i].user.name} userImg={fbData[i].user.profile_image.large}  />
            
                                    ))}
                </div>
            </div>
        </div>
    )
}

export default SentRequest
