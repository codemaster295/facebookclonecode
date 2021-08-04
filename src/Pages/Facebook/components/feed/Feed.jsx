import React, { useEffect, useState } from "react";
import CreatePost from "../createcomponent/CreatePost";
import CreateRoom from "../createcomponent/CreateRoom";
import CreateStory from "../createcomponent/CreateStory";
import Post from "../post/Post";
import axios from "axios";

const Feed = () => {
	const [fbData, setFbData] = useState([]);
	const [reload, setReload] = useState(true);
  const [index , setIndex]=useState()
	useEffect(() => {
		console.log("useefffcet");
		axios
			.get("http://localhost:5055")
			.then((d) => {
				setFbData(d.data);
			})
			.catch((Err) => {
				console.log(Err);
			});
	}, [reload]);
	const changeState = () => {
		setReload(!reload);
	};
 
	// console.log(fbData)
	// for (let i=0 ; i<=5 ;i--){
	// console.log(i)
	// }
  // var i=0
  // for (i = fbData.length; i >= 0 && i <=fbData.length; i--) {
	// 	// setIndex(i)
  //   // console.log(index)
  //   console.log(fbData[i])
   

    
	// }


	return (
		<div className="w-full space-y-20 absolute h-screen top-24  z-0 p-2">
			<div className="w-8/12 mx-auto space-y-10">
				<CreateStory />
				<CreatePost reload={changeState} />
				<CreateRoom />
        {/* <Post
							id={fbData[(fbData.length)-1]._id}
							status={fbData[(fbData.length)-1].description}
							like={fbData[(fbData.length)-1].like}
							img={fbData[(fbData.length)-1].title}
							username={fbData[(fbData.length)-1].username}
							usrimg={fbData[(fbData.length)-1].userImage}
						/> */}
				{fbData &&
					fbData.map((props , i) => (
            
						<Post
                            reload={changeState}
							id={fbData[i]._id}
							status={fbData[i].description}
							like={fbData[i].like}
							img={fbData[i].title}
							username={fbData[i].username}
							usrimg={fbData[i].userImage}
						/>
					))}
          
			</div>
		</div>
	);
};

export default Feed;
