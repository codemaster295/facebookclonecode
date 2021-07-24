import { VideoCall } from "@material-ui/icons";
import React from "react";

const CreateRoom = () => {
  return (
    <div className="w-10/12 mx-auto space-x-10 flex items-center justify-start py-2 px-5 bg-white shadow-lg cursor-pointer ">
      <div className="border border-gray-100 bg-none hover:bg-gray-300 transition-all duration-100 ease-linear rounded-full px-5 py-2">
        <VideoCall
          className="text-btn-blue  transform scale-100 hover:scale-105 transition-all duration-100 ease-linear cursor-pointer"
          style={{ fontSize: 30 }}
        />
        <span className="font-bold text-btn-blue tracking-widest text-sm">
          Create Room
        </span>
      </div>
    </div>
  );
};

export default CreateRoom;
