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
			.get("http://efb441dc777c.ngrok.io/meetmoradiya7@gmail.com")
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
				{fbData &&
					fbData.map((props, i) => (
						<Post
							reload={changeState}
							id={fbData[i]._id}
							status={fbData[i].description}
							// like={fbData[i].like}
							img={fbData[i].title}
							// username={fbData[i].username}
							// usrimg={fbData[i].userImage}
						/>
					))}
			</div>
		</div>
	);
};

export default Feed;
