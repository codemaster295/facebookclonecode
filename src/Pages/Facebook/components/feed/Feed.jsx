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
        "http://localhost:5055"
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
              status={fbData[i].description}
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
