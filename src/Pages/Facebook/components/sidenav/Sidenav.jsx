import {
  AccountCircle,
  Bookmark,
  Event,
  Flag,
  History,
  OndemandVideo,
  PeopleAlt,
  Storefront,
  Work,
} from "@material-ui/icons";
import FacebookIcon from "@material-ui/icons/Facebook";
import React from "react";

const Sidenav = () => {
  return (
    
      <div className="w-1/5 pt-6 space-y-12 fixed top-20 transform  left-1/5 p-5 z-30">
        <div className="flex items-center pl-2 space-x-5 w-full  py-2.5 rounded-md transition-all duration-100 ease-linear transform scale-100 hover:scale-105 bg-none hover:bg-gray-300 cursor-pointer">
          <AccountCircle
            className="text-btn-blue cursor-pointer transform scale-100 hover:scale-105 transition-all duration-100 ease"
            style={{ fontSize: 30 }}
          />
          <span className="text-sm text-gray-500 tracking-wider font-medium">
            MMO Globalia
          </span>
        </div>
        <div className="flex items-center pl-2 space-x-5 w-full  py-2.5 rounded-md transition-all duration-100 ease-linear transform scale-100 hover:scale-105 bg-none hover:bg-gray-300 cursor-pointer">
          <PeopleAlt
            style={{ fontSize: 30 }}
            className="text-red-500 cursor-pointer transform scale-100 hover:scale-105 transition-all duration-100 ease"
          />
          <span className="text-sm text-gray-500 tracking-wider font-medium">
            Find Freinds
          </span>
        </div>
        <div className="flex items-center pl-2 space-x-5 w-full  py-2.5 rounded-md transition-all duration-100 ease-linear transform scale-100 hover:scale-105 bg-none hover:bg-gray-300 cursor-pointer">
          <FacebookIcon
            className="text-btn-blue cursor-pointer transform scale-100 hover:scale-105 transition-all duration-100 ease"
            style={{ fontSize: 30 }}
          />
          <span className="text-sm text-gray-500 tracking-wider font-medium">
            Welcome
          </span>
        </div>
        <div className="flex items-center pl-2 space-x-5 w-full  py-2.5 rounded-md transition-all duration-100 ease-linear transform scale-100 hover:scale-105 bg-none hover:bg-gray-300 cursor-pointer">
          <PeopleAlt
            style={{ fontSize: 30 }}
            className="text-green-500  cursor-pointer transform scale-100 hover:scale-105 transition-all duration-100 ease"
          />
          <span className="text-sm text-gray-500 tracking-wider font-medium">
            Groups
          </span>
        </div>
        <div className="flex items-center pl-2 space-x-5 w-full  py-2.5 rounded-md transition-all duration-100 ease-linear transform scale-100 hover:scale-105 bg-none hover:bg-gray-300 cursor-pointer">
          <Storefront
            style={{ fontSize: 30 }}
            className="text-purple-500  cursor-pointer transform scale-100 hover:scale-105 transition-all duration-100 ease"
          />
          <span className="text-sm text-gray-500 tracking-wider font-medium">
            MarketPlace
          </span>
        </div>
        <div className="flex items-center pl-2 space-x-5 w-full  py-2.5 rounded-md transition-all duration-100 ease-linear transform scale-100 hover:scale-105 bg-none hover:bg-gray-300 cursor-pointer">
          <OndemandVideo
            style={{ fontSize: 30 }}
            className="text-indigo-500  cursor-pointer transform scale-100 hover:scale-105 transition-all duration-100 ease"
          />
          <span className="text-sm text-gray-500 tracking-wider font-medium">
            Watch
          </span>
        </div>
        <div className="flex items-center pl-2 space-x-5 w-full  py-2.5 rounded-md transition-all duration-100 ease-linear transform scale-100 hover:scale-105 bg-none hover:bg-gray-300 cursor-pointer">
          <Event
            style={{ fontSize: 30 }}
            className="text-pink-500 cursor-pointer transform scale-100 hover:scale-105 transition-all duration-100 ease"
          />
          <span className="text-sm text-gray-500 tracking-wider font-medium">
            Events
          </span>
        </div>
        <div className="flex items-center pl-2 space-x-5 w-full  py-2.5 rounded-md transition-all duration-100 ease-linear transform scale-100 hover:scale-105 bg-none hover:bg-gray-300 cursor-pointer">
          <History
            style={{ fontSize: 30 }}
            className="text-yellow-600  cursor-pointer transform scale-100 hover:scale-105 transition-all duration-100 ease"
          />
          <span className="text-sm text-gray-500 tracking-wider font-medium">
            Memories
          </span>
        </div>
        <div className="flex items-center pl-2 space-x-5 w-full  py-2.5 rounded-md transition-all duration-100 ease-linear transform scale-100 hover:scale-105 bg-none hover:bg-gray-300 cursor-pointer">
          <Bookmark
            style={{ fontSize: 30 }}
            className="text-btn-blue  cursor-pointer transform scale-100 hover:scale-105 transition-all duration-100 ease"
          />
          <span className="text-sm text-gray-500 tracking-wider font-medium">
            Saved
          </span>
        </div>
        <div className="flex items-center pl-2 space-x-5 w-full  py-2.5 rounded-md transition-all duration-100 ease-linear transform scale-100 hover:scale-105 bg-none hover:bg-gray-300 cursor-pointer">
          <Flag
            style={{ fontSize: 30 }}
            className="text-btn-blue  cursor-pointer transform scale-100 hover:scale-105 transition-all duration-100 ease"
          />
          <span className="text-sm text-gray-500 tracking-wider font-medium">
            Pages
          </span>
        </div>
        <div className="flex items-center pl-2 space-x-5 w-full  py-2.5 rounded-md transition-all duration-100 ease-linear transform scale-100 hover:scale-105 bg-none hover:bg-gray-300 cursor-pointer">
          <Work
            style={{ fontSize: 30 }}
            className="text-btn-blue  cursor-pointer transform scale-100 hover:scale-105 transition-all duration-100 ease"
          />
          <span className="text-sm text-gray-500 tracking-wider font-medium">
            Jobs
          </span>
        </div>
      </div>

  );
};

export default Sidenav;
