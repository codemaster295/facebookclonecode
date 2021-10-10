import React, { useEffect } from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import SearchIcon from "@material-ui/icons/Search";
import { Link, NavLink } from 'react-router-dom'
import {
  AccountCircle,
  Apps,
  Home,
  Inbox,
  NotificationsNone,
  PeopleAlt,
} from "@material-ui/icons";
import { useState } from "react";
import ProfileMenu from "../profilemenu/ProfileMenu";
import { Backdrop, CircularProgress } from "@material-ui/core";
import axios from 'axios'
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
const Navbar = (props) => {
  const [friends, setFriends] = useState(false)
  const [profilemenu, setProfileMenu] = useState(false)
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState([])
  let token = ""
  const handleGetUser = () => {

    axios.get("http://localhost:8080/api/v1/users/getalluser", { headers: { 'x-access-token': token } }).then(res => { setUser(res.data) })
  }
  useEffect(() => {
    token = localStorage.getItem("token")
    handleGetUser()
  }, [])
  // console.log(user[0].username)

  return (
    <header className="shadow-2xl  py-1.5 fixed top-0 left-0 w-full z-50 bg-white p-5">
      <div className="flex items-center w-full justify-between">
        <div className="left w-1/4 flex justify-start items-center">
          <NavLink to="/Facebook">
            <FacebookIcon
              className="text-btn-blue cursor-pointer transform scale-100 hover:scale-105 transition-all duration-100 ease"
              style={{ fontSize: 50 }}
            />
          </NavLink>
          <Autocomplete
            id="userSearch"
            style={{ width: 300 }}
            options={user}
            // classes={{
            //   option: classes.option
            // }}
            autoHighlight
            getOptionLabel={(option) => option?.username}
            renderOption={(option) => (
              <React.Fragment>

                {option?.username}
              </React.Fragment>
            )}
            renderInput={(params) => (
        <TextField
          {...params}
          
          variant="outlined"
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password" // disable autocomplete and autofill
          }}
        />
        )}
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
          <NavLink activeClassName="text-btn-blue border-b-2 border-btn-blue" className="inline-block text-gray-500  w-1/3 p-px" to="/Facebook">
            <div className="w-full flex flex-col justify-center items-center  ">
              <Home
                style={{ fontSize: 30 }}
                className=" transform scale-100 hover:scale-105 transition-all duration-100 ease"
              />
            </div>
          </NavLink>
          <NavLink activeClassName="text-btn-blue border-b-2 border-btn-blue" className="inline-block text-gray-500  w-1/3 p-px" to="/Freinds" >
            <div className="w-full flex flex-col justify-center items-center ">
              <PeopleAlt
                style={{ fontSize: 30 }}
                className="  transform scale-100 hover:scale-105 transition-all duration-100 ease"
              />
            </div>
          </NavLink>
          <NavLink activeClassName="t" className="inline-block text-gray-500  w-1/3 p-px" exact="/facebook" to="/facebook" >
            <div className="w-full text-gray-500 flex flex-col justify-center items-center ">
              <PeopleAlt
                style={{ fontSize: 30 }}
                className=" border-2 border-gray-500  rounded-full cursor-pointer transform scale-100 hover:scale-105 transition-all duration-100 ease"
              />
            </div>
          </NavLink>
        </div>
        <div className="right w-1/4 flex justify-center space-x-10 items-center">
          <span className="bg-gray-200 rounded-full py-1.5 px-5 font-bold tracking-widest text-xs bg 2xl:block hidden ">
            Find Friend
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

            onClick={() => { setProfileMenu(!profilemenu); setOpen(!open); }}
          />
          {profilemenu ? <ProfileMenu userid={props.userid} /> :
            ""}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
