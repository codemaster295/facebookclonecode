import { faCamera, faUser, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ProfileMenu from "../../Facebook/components/profilemenu/ProfileMenu";
import Profilenav from "./Profilenav";

const ProfileImage = () => {
    return (
        <div className="container bg-white profileimage mx-auto px-4 mt-20">
            <div className="banner relative z-0 overflow-hidde border   shadow-2xl rounded-2xl">
                <img className="h-[40vh] w-full object-cover rounded-2xl" src="https://www.akamai.com/uk/en/multimedia/images/promos/2020/free-trial-callout-image.jpg?imwidth=1366" alt="" />
                <div className="absolute justify-end p-2    rounded-2xl flex items-end   left-0 transform top-0  bg-gradient-to-t bg-opacity-2 from-gray-100  to-transparent w-full h-full z-3">
                    <button className="px-5 space-x-2 py-3 bg-white text-black font-bold tracking-tighter m-5 rounded-lg shadow-2xl">
                        <FontAwesomeIcon icon={faCamera} />
                        <span>Edit Cover Photo</span>
                    </button>
                </div>
                <div className="w-48 h-48 rounded-full  bg-gradient-to-b bg-opacity-2 from-btn-blue  to-blue-200 p-3 absolute flex justify-end items-end  top-1/2 left-1/2 transform -translate-x-1/2 mt-5">
                    <div className="relative w-full h-full flex  justify-center items-center">
                        <span className="bg-gray-500 w-full h-full flex justify-center items-center rounded-full">

                        <FontAwesomeIcon className="text-7xl text-white " icon={faUser} />
                        </span>
                        <span className="w-10 absolute right-0 bottom-0 h-10 flex justify-center items-center rounded-full bg-gray-300  ">
                            <FontAwesomeIcon className="text-black text-2xl" icon={faCamera} />
                        </span>
                    </div>
                </div>
            </div>
            <Profilenav />
        </div>
    );
};

export default ProfileImage;
