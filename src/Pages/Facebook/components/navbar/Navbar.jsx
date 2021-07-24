import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import SearchIcon from "@material-ui/icons/Search";
import {
  AccountCircle,
  Apps,
  Home,
  Inbox,
  NotificationsNone,
  PeopleAlt,
} from "@material-ui/icons";
import { useState } from "react";
import { Link } from "@material-ui/core";

const Navbar = () => {
  const [freinds , setFreinds]=useState(false)
  return (
    <header className="shadow-2xl  py-1.5 fixed top-0 left-0 w-full z-50 bg-white p-5">
      <div className="flex items-center w-full justify-between">
        <div className="left w-1/4 flex justify-start items-center">
          <FacebookIcon
            className="text-btn-blue cursor-pointer transform scale-100 hover:scale-105 transition-all duration-100 ease"
            style={{ fontSize: 50 }}
          />
          <div className="seach-bar ml-6">
            <div className="searchIcon relative">
              <input
                type="search"
                className="bg-gray-200 rounded-full w-full outline-none px-10 py-2.5"
                placeholder="Search Facebook"
              />
              <SearchIcon className="absolute cursor-pointer transform scale-100 hover:scale-105 transition-all duration-100 ease left-3 top-1/2  -translate-y-1/2 text-gray-500  " />
            </div>
          </div>
        </div>
        <div className="center w-1/4 flex justify-between items-center">
          <div className="w-1/3 flex flex-col justify-center items-center">
            <Home
              style={{ fontSize: 30 }}
              className="text-btn-blue cursor-pointer transform scale-100 hover:scale-105 transition-all duration-100 ease"
            />
            <span className="block w-7/12 mx-auto border-b-2 border-btn-blue h-2"></span>
          </div>
          <div className="w-1/3 flex flex-col justify-center items-center" onClick={()=>{setFreinds(true)}}>
            
            <PeopleAlt
              style={{ fontSize: 30 }}
              className="text-gray-500 cursor-pointer transform scale-100 hover:scale-105 transition-all duration-100 ease"
            />
            <span className="block w-7/12 mx-auto border-b-2 border-transparent  h-2"></span>
          </div>
          <Link to="/Freinds">
          <div className="w-1/3 flex flex-col justify-center items-center">
            
            <PeopleAlt
              style={{ fontSize: 30 }}
              className="text-gray-500 border-2 border-gray-500  rounded-full cursor-pointer transform scale-100 hover:scale-105 transition-all duration-100 ease"
            />
            <span className="block w-7/12 mx-auto border-b-2 border-transparent  h-2"></span>
          </div>
          </Link>
        </div>
        <div className="right w-1/4 flex justify-center space-x-10 items-center">
          <span className="bg-gray-200 rounded-full py-1.5 px-5 font-bold tracking-widest text-xs bg 2xl:block hidden ">
            Find Freind
          </span>
          <Apps
            className="bg-gray-200 text-gray-500 p-2 rounded-full cursor-pointer transform scale-100 hover:scale-105 transition-all duration-100 ease"
            style={{ fontSize: 45 }}
          />
          <Inbox
            className="bg-gray-200 text-gray-500 p-2 rounded-full cursor-pointer transform scale-100 hover:scale-105 transition-all duration-100 ease"
            style={{ fontSize: 45 }}
          />
          <NotificationsNone
            className="bg-gray-200 text-gray-500 p-2 rounded-full cursor-pointer transform scale-100 hover:scale-105 transition-all duration-100 ease"
            style={{ fontSize: 45 }}
          />
          <AccountCircle
            className="text-gray-300 cursor-pointer transform scale-100 hover:scale-105 transition-all duration-100 ease"
            style={{ fontSize: 45 }}
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
