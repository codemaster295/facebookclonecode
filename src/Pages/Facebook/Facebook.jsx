

import React from "react";
import Feed from "./components/feed/Feed";
import Group from "./components/group/Group";
import Navbar from "./components/navbar/Navbar";
import Sidenav from "./components/sidenav/Sidenav";
import { useLocation, useHistory } from 'react-router-dom';
import { useState } from "react";
import { useEffect } from "react";

const Facebook = () => {
  const location = useLocation();
  const history = useHistory("")
  let loggedUserdata = localStorage.getItem("email")
  const loggeduser = () => {
    loggedUserdata = localStorage.getItem("email")
    if (loggedUserdata) {
      return
    }
    else {
      history.push("/")
    }
  }
  const authUser = ()=>{
    const token = localStorage.getItem("token")
    if(token){
     return
      
    }
    else{
      history.push("/")
    }
  }
  useEffect(() => {
    // loggeduser()
    authUser()
  }, [])
  return (
    <div className="flex flex-col ">
      <Navbar userid={loggedUserdata} />

      <div className="relative">
        <Sidenav />
        <Feed />
        <Group />
      </div>
    </div>
  );
};

export default Facebook;
