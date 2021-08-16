import {
	faCamera,
	faGlobeAsia,
	faUser,
	faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import ProfileMenu from "../../Facebook/components/profilemenu/ProfileMenu";
import Profilenav from "./Profilenav";

const ProfileImage = (props) => {
	const [bioPopUp, setBioPopUp] = useState(false);
	const [email , setEmail] = useState(props.email)
	const [bioText, setBioText] = useState("");
	const [bioTextLength, setBioTextLength] = useState(0);
	const [userData , setUserData] = useState("")
	useEffect(()=>{
		axios.get(`http://e25877ca2c15.ngrok.io/123@gmail.com` )
		.then((d)=>{
			setUserData(d.data)
		})
	},[bioPopUp])
	const bioSubmit =  () =>{
		axios.put(`http://e25877ca2c15.ngrok.io/${props.email}` ,{body:bioText})
		.then((d)=>{
			setBioPopUp(false)
			setBioTextLength(0)
		})
	}
	
	

	return (
		<div className="container bg-white profileimage mx-auto rounded-2xl mt-20">
			<div className="banner relative z-0 overflow-hidde border    rounded-2xl">
				<img
					className="h-[40vh] w-full object-cover rounded-2xl"
					src="https://www.akamai.com/uk/en/multimedia/images/promos/2020/free-trial-callout-image.jpg?imwidth=1366"
					alt=""
				/>
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
							<FontAwesomeIcon
								className="text-black text-2xl"
								icon={faCamera}
							/>
						</span>
					</div>
				</div>
			</div>
			<div className="text-center mt-10">
				<h1 className="text-center text-3xl font-bold tracking-wides">
					{userData.fname+"   " +userData.lname}
				</h1>
				{userData.bio?<div>
					<h1 className="text-black font-semibold text-xl">{userData.bio}</h1>
				<h1 className="text-btn-blue tracking-tight font-semibold  cursor-pointer" onClick={()=>{setBioPopUp(true);}}>Edit bio</h1>

				</div> :userData.bio===""?<>{bioPopUp?"":<h1
					className="text-btn-blue tracking-tight font-semibold  cursor-pointer"
					onClick={() => {
						setBioPopUp(true);
					}}
				>
					Add Bio
				</h1>}</>:""}
				{bioPopUp ? (
					<div className="">
						<div className="flex flex-col justify-center space-y-5">
							<div className="w-1/4 mx-auto flex flex-col items-center justify-center space-y-3">
								<textarea
									onChange={(e) => {
										setBioText(e.target.value);
										setBioTextLength(e.target.value.length);
									}}
									className=" w-full mx-auto  rounded-xl bg-gray-100 p-2  outline-none resize-none"
									name=""
									id="abc"
									cols="auto"
									rows="4"
									maxLength="101"
									placeholder="Describe who you are?"
								></textarea>
                                <div className="flex justify-between w-full">
                                    <div className="flex items-center space-x-3">
                                        <FontAwesomeIcon className="text-gray-500 text-2xl" icon={faGlobeAsia} />
                                        <h1 className="font-bold text-base">Public</h1>
                                    </div>
									<div className="space-x-3">
										<button className="bg-bg-theme hover:bg-gray-300 transition-all ease duration-100 rounded-md  text-base tracking-tight px-5 text-black font-semibold py-2 " onClick={()=>{setBioPopUp(false)}}>Cancel</button>
										<button className={bioTextLength===0?"bg-bg-theme cursor-not-allowed rounded-md  text-base tracking-tight px-5 text-gray-500 font-semibold py-2 ":"bg-btn-blue rounded-md  text-base tracking-tight px-5 text-white font-semibold py-2 "} onClick={bioSubmit}>Save</button>
									</div>
                                </div>
							</div>
							<span className="text-xs font-bold tracking-widest text-gray-500">
								{101 - bioTextLength + " characters remaining"}
							</span>
						</div>
					</div>
				) : null}
			</div>
		</div>
	);
};

export default ProfileImage;
