

import React from "react";
import Feed from "./components/feed/Feed";
import Group from "./components/group/Group";
import Navbar from "./components/navbar/Navbar";
import Sidenav from "./components/sidenav/Sidenav";

const Facebook = () => {
 
  
  
  return (
    <div className="flex flex-col ">
      <Navbar />

      <div className="relative">
        <Sidenav />
        <Feed />
        <Group />
      </div>
      
       {/* {meet ? <PostPopUp />:null}  */}

    </div>
  );
};

export default Facebook;
