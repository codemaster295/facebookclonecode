import axios from 'axios';
import React, { useEffect, useState } from 'react'
import FreindsBoxBanner from './FreindsBoxBanner'

const FreindsBanner = () => {
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
        <div className="w-9/12 mt-14">
            <div className="flex flex-wrap  p-5">
            {fbData && fbData.map((props, i) => (<FreindsBoxBanner key={fbData[i].id} mutual={Math.floor((Math.random()*10)+1)}  img={fbData[i].urls.full}  username={fbData[i].user.name} userImg = {fbData[i].user.profile_image.large} /> ))}
            {fbData && fbData.map((props, i) => (<FreindsBoxBanner key={fbData[i].id} mutual={Math.floor((Math.random()*10)+1)}  img={fbData[i].urls.full}  username={fbData[i].user.name} userImg = {fbData[i].user.profile_image.large} /> ))}
            {fbData && fbData.map((props, i) => (<FreindsBoxBanner key={fbData[i].id} mutual={Math.floor((Math.random()*10)+1)}  img={fbData[i].urls.full}  username={fbData[i].user.name} userImg = {fbData[i].user.profile_image.large} /> ))}
            {fbData && fbData.map((props, i) => (<FreindsBoxBanner key={fbData[i].id} mutual={Math.floor((Math.random()*10)+1)}  img={fbData[i].urls.full}  username={fbData[i].user.name} userImg = {fbData[i].user.profile_image.large} /> ))}
            </div>
        </div>
    )
}

export default FreindsBanner

