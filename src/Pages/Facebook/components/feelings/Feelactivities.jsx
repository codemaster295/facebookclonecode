import { Clear } from "@material-ui/icons";
import React, { useState } from "react";
import Activity from "../activity/Activity";
import Emojis from "../emojis/Emojis";

const Feelactivities = ({ setEmojiBox }) => {
  const [emoji, setEmoji] = useState(true);
  const [liked, setLiked] = useState("#000000");
  const [activity, setActivity] = useState(false);
  const [active, setActive] = useState(0);
  return (
    <div>
      <div className="text-5xl  fixed top-1/2 left-1/2 bg-opacity-60 bg-white w-full h-full transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-ceneter z-50">
        <div className=" bg-white  flex flex-wrap mx-auto items-center p-5 shadow-2xl relative z-50 w-1/2 space-y-5">
          <span className="flex items-center space-x-10 w-full">
            <h1
              className={
                active == 0
                  ? "font-bold text-xl cursor-pointer  border-b-2 border-btn-blue text-btn-blue p-3 tracking-widest "
                  : "font-bold text-xl cursor-pointer p-3 tracking-widest"
              }
              onClick={() => {
                setActivity(false);
                setEmoji(true);
                setActive(0);
              }}
            >
              Feeling
            </h1>

            <h1
              className={
                active == 1
                  ? "font-bold text-xl cursor-pointer border-b-2 border-btn-blue text-btn-blue p-3 tracking-widest  "
                  : "font-bold text-xl cursor-pointer p-3 tracking-widest"
              }
              onClick={() => {
                setActivity(true);
                setEmoji(false);
                setActive(1);
              }}
            >
              Activity
            </h1>
            <span className="w-full flex justify-end items-center">
              <Clear
                className="text-black cursor-pointer "
                onClick={()=>{setEmojiBox(false)}}
              />
            </span>
          </span>

          {emoji ? <Emojis setEmojiModel={setEmojiBox} /> : ""}
          {activity ? <Activity setEmojiModel={setEmojiBox} /> : ""}
        </div>
      </div>
    </div>
  );
};

export default Feelactivities;
