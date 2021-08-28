import React, { useEffect, useState } from "react";
import CreatePost from "../createcomponent/CreatePost";
import CreateRoom from "../createcomponent/CreateRoom";
import CreateStory from "../createcomponent/CreateStory";
import Post from "../post/Post";
import axios from "axios";

const Feed = (props) => {
	const [fbData, setFbData] = useState([]);

	const [reload, setReload] = useState(true);
	const [emoji, setEmoji] = useState("");
	const [index, setIndex] = useState();
	useEffect(() => {
		axios
			.get("https://facebookrestapi.herokuapp.com/meetmoradiya7@gmail.com")
			.then((d) => {
				setFbData(d.data.posts);
				console.log(d.data);
			})
			.catch((Err) => {
				console.log(Err);
			});
	}, [reload]);
	const changeState = () => {
		setReload(!reload);
	};

	return (
		<div className="w-full space-y-20 absolute h-screen top-24  z-0 p-2">
			<div className="w-7/12 mx-auto space-y-10 px-20">
				<CreateStory />
				<CreatePost reload={changeState} />
				<CreateRoom />		
			</div>
		</div>
	);
};

export default Feed;
