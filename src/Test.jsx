import axios from 'axios';
import React, { useEffect, useState } from 'react'
import VideoBox from './VideoBox';

const Test = () => {

  const [fbData, setFbData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://www.googleapis.com/youtube/v3/search?key=AIzaSyAuu3uNIlPZdGfQV5RDEC4y7qhO-jQcI18&type=video&part=snippet&maxResults=100000&q=m"
      )
      .then((d) => {
        setFbData(d.data.items[0]);
        console.log(fbData , "fbdata")
        console.log(fbData.length)
      })
      .catch((Err) => {
        console.log(Err);
      });
    }, []);

    return (
       <>
       {/* {fbData &&fbData.map((props, i) => (
            <VideoBox />
          ))} */}
          {/* {fbData && fbData.map((data , i ) =>({ <VideoBox   />}))} */}
          {/* {fbData &&fbData.map((fbData)=>{<VideoBox />})} */}
       </>
    )
}

export default Test
