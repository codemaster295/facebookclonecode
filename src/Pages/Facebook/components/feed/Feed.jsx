import React, { useEffect, useState } from "react";
import CreatePost from "../createcomponent/CreatePost";
import CreateRoom from "../createcomponent/CreateRoom";
import CreateStory from "../createcomponent/CreateStory";
import Post from "../post/Post";
import axios from "axios";

const Feed = () => {

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
    <div className="w-full space-y-20 absolute h-screen top-24  z-0 p-2">
      <div className="w-8/12 mx-auto space-y-10">
        <CreateStory />
        <CreatePost />
        <CreateRoom />
        {fbData &&
          fbData.map((props, i) => (
            <Post
              key={fbData[i].id}
              userImg = {fbData[i].user.profile_image.large}
              status={fbData[i].alt_description}
              img={fbData[i].urls.full}
              username={fbData[i].user.name}
              likes={fbData[i].likes}
              time={fbData[i].created_at}
            />
          ))}
      </div>
    </div>
  );
};

export default Feed;
