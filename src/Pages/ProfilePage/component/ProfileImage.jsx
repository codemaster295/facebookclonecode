import {
	faCamera,
	faGlobeAsia,
	faUser,
	faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Backdrop, CircularProgress } from "@material-ui/core";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Navbar from "../../Facebook/components/navbar/Navbar";
import ProfileMenu from "../../Facebook/components/profilemenu/ProfileMenu";
import ProfileImageSelector from "./ProfileImageSelector";
import Profilenav from "./Profilenav";

const ProfileImage = (props) => {
	const [bioPopUp, setBioPopUp] = useState(false);
	const [email , setEmail] = useState(props.email)
	const [bioText, setBioText] = useState("");
	const [bioTextLength, setBioTextLength] = useState(0);
	const [userData , setUserData] = useState("")
	const usermain = localStorage.getItem("email")
	const [open, setOpen] = useState(true);
	const [imageSelector ,setImageSelector]=useState(false)

	console.log(usermain)
	useEffect(()=>{
		axios.get(`http://localhost:8080/getdata/${usermain}` )
		.then((d)=>{
			setUserData(d.data)
			console.log(d.data)
		})
	},[bioPopUp])
	console.log(userData)
	const bioSubmit =  () =>{
		axios.put(`http://localhost:8080/getdata/${usermain}` ,{body:bioText})
		.then((d)=>{
			setBioPopUp(false)
			setBioTextLength(0)
		})
	}
	const imagepopup = () =>{
		setImageSelector(!imageSelector)
	}
	
	

	return (
		<div className="bg-gradient-to-t from-white via-gray-500 to-black w-full">
            <Navbar />

		{userData?<div className="container profileimage mx-auto  mt-20">
			<div className="banner relative z-0    rounded-2xl">
				<img
					className="h-[40vh] w-full object-cover rounded-2xl"
					src="https://easybase.io/assets/images/posts_images/5-great-react-libraries-1.png"
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
						<span className="bg-gray-500 w-full h-full flex justify-center items-center overflow-hidden flex justify-center rounded-full">
							{/* <FontAwesomeIcon className="text-7xl text-white " icon={faUser} /> */} 
							<img className="object-cover" src="https://media-exp1.licdn.com/dms/image/C4E03AQGH7ELCMAx8nA/profile-displayphoto-shrink_200_200/0/1602818458840?e=1633564800&v=beta&t=I_e7bT_M8vAaUbf3kN-MRsy2mfVBniTjWc9WDCWa93E" alt="" />
						</span>
						<span className="w-10 absolute right-0 bottom-0 h-10 flex justify-center items-center rounded-full bg-gray-300  ">
							<FontAwesomeIcon
								className="text-black text-2xl"
								icon={faCamera}
								onClick={()=>{setImageSelector(!imageSelector)}}
							/>
						</span>
					</div>
				</div>
			</div>
			<div className="text-center mt-10">
				{userData?<h1 className="text-center text-3xl font-bold tracking-wides">
					{userData.fname+"   " +userData.lname}
				</h1>:""}
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
			{imageSelector?<ProfileImageSelector close={imagepopup}/>:""}
		</div>:
			<Backdrop
				className="text-white  absolute bg-white z-50 p-20"
				open={open}
			>
				<CircularProgress className="text-btn-blue " />
			</Backdrop>}
		</div>
	);
};

export default ProfileImage;
