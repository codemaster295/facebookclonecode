import {
  AccountCircle,
  InsertEmoticon,
  PhotoLibrary,
  VideoCall,
} from "@material-ui/icons";
import React from "react";
import { useState, useRef } from "react";
import PostPopUp from "../createnewpostpopup/PostPopUp";
import Livepopup from "../livepopup/Livepopup";
const CreatePost = () => {
  const [openModal , setModal]=useState(false)
  const [openLive , setLive]=useState(false)
  const imageInput = useRef(null);
  const getImage = () => {
    imageInput.current.click();
  };
  return (
    <>
      <div className="w-10/12 mx-auto  bg-white shadow-lg">
        <div className="flex space-x-10 py-2 px-5 items-center justify-start ">
          <AccountCircle
            className="text-gray-300  transform scale-100 hover:scale-105 transition-all duration-100 ease-linear hover:bg-gray-100 border border-transparent rounded-full cursor-pointer"
            style={{ fontSize: 35 }}
          />
          <div className="flex flex-col justify-center space-y-5 w-full">
            <span onClick={()=>setModal(true)} className="font-medium p-2 tracking-wider text-sm text-gray-500 bg-none hover:bg-gray-200 transition-all duration-100 ease-linear w-full border-transparennt rounded-full block py-1 cursor-pointer    ">
              What's on your mind ,MMO?
            </span>
          </div>
        </div>
        <hr />
        <div className="flex justify-around py-5">
          <div className="flex items-center space-x-6 cursor-pointer" onClick={()=>setLive(true)}>
            <VideoCall
              className="text-red-500 cursor-pointer transform scale-100 hover:scale-105 transition-all duration-100 ease"
              style={{ fontSize: 30 }}
            />
            <span className="font-bold tracking-widest text-sm text-gray-500">Live Video</span>
          </div>

          <div className="flex items-center space-x-6 cursor-pointer" onClick={ getImage}>
            <PhotoLibrary
              className="text-green-500 cursor-pointer transform scale-100 hover:scale-105 transition-all duration-100 ease"
              style={{ fontSize: 30 }}
            />
            <span className="font-bold tracking-widest text-sm text-gray-500">Photo / Video</span>
            <input className="hidden" ref={imageInput} type="file" name="" id="" />
          </div>

          <div className="flex items-center space-x-6 cursor-pointer">
            <InsertEmoticon
              className="text-yellow-600 cursor-pointer transform scale-100 hover:scale-105 transition-all duration-100 ease"
              style={{ fontSize: 30 }}
            />
            <span className="font-bold tracking-widest text-sm text-gray-500">Feeling/Activity</span>
          </div>
        </div>
      </div>
      {openModal?<PostPopUp setModal={setModal} />:""}
      {openLive?<Livepopup setLive={setLive}/>:"" }
      
    </>
  );
};

export default CreatePost;
