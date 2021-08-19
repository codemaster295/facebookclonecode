import React, { useState, useRef, useEffect } from "react";
import $ from 'jquery'
import {
	AccountCircle,
	Cancel,
	Clear,
	EmojiEmotions,
	LocationOn,
	Lock,
	PhotoLibrary,
} from "@material-ui/icons";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

import CircularProgress from '@material-ui/core/CircularProgress';

import GroupIcon from "@material-ui/icons/Group";
import Feelactivities from "../feelings/Feelactivities";
import { storage } from "../../../firebase";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCross, faTimesCircle, faUserTimes } from "@fortawesome/free-solid-svg-icons";

const PostPopUp = ({ setModal , setReload }) => {
	const imageInput = useRef(null);
	const [data, setData] = useState("");
	const [status, setStatus] = useState("");
	const [emojimodel, setEmojiModel] = useState(false);
	const [imageurl, setUrl] = useState("");
	const [progress, setProgress] = useState(0);
	const [fbData, setFbData] = useState([]);
	const [uploadPost, setUploadPost] = useState(false);
	const [process ,setProcess] =useState("0")
	const [loader ,setLoader] =useState(false)
	const [previewImage , setPreviewImage] =useState("")
	const userName = "MMO";
	const userImageLink =
	"https://firebasestorage.googleapis.com/v0/b/facebook-clone-8f5aa.appspot.com/o/userimage%2F610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png?alt=media&token=513a64f2-531a-450e-8013-6347a55a70dd";
	const [image, setImage] = useState(null);
	const handleUpload = () => {
		setLoader(!loader)
		const uploadTask = storage.ref(`images/${image.name}`).put(image);
		uploadTask.on("state_changed",(snapshot)=>{
			const progress = Math.round(
				(snapshot.bytesTransferred/snapshot.totalBytes)*100
				)
				setProgress(progress)
		},error =>{console.log(error)},()=>{
			storage.ref("images").child(image.name).getDownloadURL().then(url =>{
				const URL = url
			
				
					const setDataPost = ({
						title:URL,
						description:status,
						username:"mmo",
						
					})
					setModal(!setModal);
							fetch(`https://cd3ef1f4390d.ngrok.io/meetmoradiya7@gmail.com`, {
								method: "PUT",
								body: JSON.stringify(setDataPost),
								headers: { "Content-type": "application/json; charset=UTF-8" },
							}).then((response) => response.json(setDataPost));	
						setReload()	 
				
				
			})
		})
	}
	
	
	const getImage = () => {
		imageInput.current.click();
	};
	const handleChange = (event ,input) => {
		if (event.target.files[0]) {
			setImage(event.target.files[0]);
			var reader = new FileReader();
			
		}
	}
	$(".imageUploader").change(function(e) {

		for (var i = 0; i < e.originalEvent.srcElement.files.length; i++) {
			var file = e.originalEvent.srcElement.files[i];
			var reader = new FileReader();
			reader.onloadend = function() {
			  setPreviewImage(reader.result)
			}
			reader.readAsDataURL(file);
			
		}
	});
	
	return (
		<>
			<div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5/12 shadow-2xl rounded-xl bg-white z-50  p-5  ">
				<div className="box space-y-5  scrollbar scrollbar-thumb-gray-300 scrollbar-track-gray-50 " style={previewImage?{height:50 +"vh" , overflowY:"scroll"}:null}>
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
							className="text-gray-300 cursor-pointer  "
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
					<div className="flex flex-col w-full justify-center items-center ">
         				{	loader? <div className="w-full h-full flex justify-center items-center rounded-xl absolute top-0 left-0 bg-white bg-opacity-75 z-50">
						 	<CircularProgress variant="determinate" className="!text-btn-blue" value={progress} />
						 </div>:""
						}

						<textarea
							onChange={(e) => {
								setStatus(e.target.value);
							}}
							className="w-11/12  rounded-xl bg-gray-100 p-2  outline-none resize-none"
							name=""
							id="abc"
							cols="auto"
							rows="4"
							placeholder="What is in your mind Mmo?"
						></textarea>
						{/* <TextareaAutosize className="w-11/12  rounded-xl bg-gray-100 p-2  outline-none" aria-label="empty textarea" placeholder="Empty" /> */}
						<div className="w-full p-2">
							
						   {!previewImage?"":<div className="relative flex  justify-end  border-transparent rounded-2xl ">
							   <img className=" h-96 object-contain min-w-full w-full " src={previewImage} alt="" />
							      <span className="absolute top-0 left-0 bg-gray-500 bg-opacity-30 w-full h-full "></span>
							   <Cancel fontSize="large"  className="text-white  absolute top-0 right-0 cursor-pointer" onClick={()=>{setPreviewImage("")}} />
						    </div>}
						  
						
						</div>
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
