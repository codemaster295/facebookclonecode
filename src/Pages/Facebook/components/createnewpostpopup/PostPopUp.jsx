import React, { useState, useRef, useEffect } from "react";
import {
	AccountCircle,
	Clear,
	EmojiEmotions,
	LocationOn,
	Lock,
	PhotoLibrary,
} from "@material-ui/icons";
import GroupIcon from "@material-ui/icons/Group";
import Feelactivities from "../feelings/Feelactivities";
import { storage } from "../../../firebase";
import axios from "axios";
import { Link } from "react-router-dom";

const PostPopUp = ({ setModal , setReload }) => {
	const imageInput = useRef(null);
	const [data, setData] = useState("");
	const [status, setStatus] = useState("");
	const [emojimodel, setEmojiModel] = useState(false);
	const [imageurl, setUrl] = useState("");
	const [progress, setProgress] = useState(0);
	const [fbData, setFbData] = useState([]);
	const [uploadPost, setUploadPost] = useState(false);
	
	const userName = "MMO";
	const userImageLink =
	"https://firebasestorage.googleapis.com/v0/b/facebook-clone-8f5aa.appspot.com/o/userimage%2F610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png?alt=media&token=513a64f2-531a-450e-8013-6347a55a70dd";
	const [image, setImage] = useState(null);
	const handleUpload = () => {
		const uploadTask = storage.ref(`images/${image.name}`).put(image);
		uploadTask.on("state_changed",(snapshot)=>{},error =>{console.log(error)},()=>{
			storage.ref("images").child(image.name).getDownloadURL().then(url =>{
				const URL = url
			
				console.log(URL)
				
					const setDataPost = ({
						title:URL,
						description:status,
						username:"mmo",
						
					})
					setModal(!setModal);
					console.log(setDataPost)
						fetch("http://localhost:5055", {
							method: "POST",
							body: JSON.stringify(setDataPost),
							headers: { "Content-type": "application/json; charset=UTF-8" },
						}).then((response) => response.json(setDataPost) ,console.log("done"));	
						setReload()	 
				
				
			})
		})
	}
	
	
	const getImage = () => {
		imageInput.current.click();
	};
	const handleChange = (event) => {
		if (event.target.files[0]) {
			setImage(event.target.files[0]);
		}
	}
	
	return (
		<>
			<div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5/12 shadow-2xl rounded-xl bg-white z-50  ">
				<div className="box space-y-5 ">
					<span className="font-medium relative text-lg text-black text-center block border-b-2 border-gray-200 py-2">
						Create post
						<span onClick={() => setModal(false)}>
							<Clear
								className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-2 cursor-pointer"
								style={{ fontSize: 20 }}
							/>
						</span>
					</span>
					<div className="userwraper flex items-center space-x-3 px-5 ">
						<AccountCircle
							className="text-gray-300 cursor-pointer "
							style={{ fontSize: 45 }}
						/>
						<div className="space-y-1">
							<h1 className="username text-sm cursor-pointer">Mmo Globalia</h1>
							<div className="flex items-center space-x-2">
								<span className="time text-xs text-gray-500 tracking-widest cursor-pointer">
									4 mins
								</span>
								<span className="privacyIcon flex items-center cursor-pointer">
									<Lock style={{ fontSize: 15 }} />
								</span>
							</div>
						</div>
					</div>
					<div className="flex w-full justify-center items-center ">
						<textarea
							onChange={(e) => {
								setStatus(e.target.value);
							}}
							className="w-11/12  rounded-xl bg-gray-100 p-2  resize-none outline-none"
							name=""
							id="abc"
							cols="auto"
							rows="8"
							placeholder="What is in your mind Mmo?"
						></textarea>
						{/* <img src={url} alt="" /> */}
					</div>
				</div>
				<div className="flex items-center w-full justify-around p-5">
					<input
						className="hidden imageUploader"
						onChange={handleChange}
						ref={imageInput}
						type="file"
						name=""
						id=""
					/>
					<PhotoLibrary
						className="text-btn-blue cursor-pointer"
						style={{ fontSize: 30 }}
						onClick={getImage}
					/>
					<GroupIcon
						className="text-btn-blue cursor-pointer"
						style={{ fontSize: 30 }}
					/>
					<LocationOn
						className="text-btn-blue cursor-pointer"
						style={{ fontSize: 30 }}
					/>
					<EmojiEmotions
						className="text-btn-blue cursor-pointer"
						style={{ fontSize: 30 }}
						onClick={() => {
							setEmojiModel(!emojimodel);
						}}
					/>
				</div>
				<div className="flex justify-center mb-5">
						<button
							className="w-10/12 mx-auto rounded-lg bg-btn-bluee bg-blue-400 text-white  py-2 text-lg font-bold tracking-widest"
							onClick={handleUpload}>
							post
						</button>
				</div>
			</div>
			{emojimodel ? <Feelactivities setEmojiBox={setEmojiModel} /> : ""}
		</>
	);
};

export default PostPopUp;
