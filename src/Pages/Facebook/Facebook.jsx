

import React from "react";
import Feed from "./components/feed/Feed";
import Group from "./components/group/Group";
import Navbar from "./components/navbar/Navbar";
import Sidenav from "./components/sidenav/Sidenav";
import { useLocation } from 'react-router-dom';
import { useState } from "react";
import { useEffect } from "react";

const Facebook = () => {
  const [loggedUser,setLoggedUser] = useState("")
  const location = useLocation();
  useEffect(()=>{
    setLoggedUser(location.state.id)
  },[])
  
  return (
    <div className="flex flex-col ">
      <Navbar userid={loggedUser}  />

      <div className="relative">
        <Sidenav />
        <Feed />
        <Group />
      </div>       
    </div>
  );
};

export default Facebook;
