import { Add } from "@material-ui/icons";
import React from "react";

const CreatePost = () => {
  return(
      <div className="w-10/12 mx-auto space-x-10 flex items-center justify-start py-2 px-5 bg-white shadow-lg">
          <Add className="text-btn-blue bg-gray-200 transform scale-100 hover:scale-105 transition-all duration-100 ease-linear hover:bg-blue-200 border border-transparent rounded-full cursor-pointer" style={{ fontSize: 30 }} />
          <div className="flex flex-col justify-center space-y-5">
              <span className="text-black font-bold tracking-wider text-xl">Create Story</span>
              <span className="text-gray-500 font-medium tra">Share a photo or write something</span>
          </div>
      </div>
  );
};

export default CreatePost;
