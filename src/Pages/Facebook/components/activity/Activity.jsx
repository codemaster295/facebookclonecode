import {  Search } from "@material-ui/icons";
// get our fontawesome imports
import {
  faBirthdayCake,
  faCalendarCheck,
  faChevronRight,
  faGlasses,
  faHamburger,
  faHeadphones,
  faPlaneDeparture,
  faSearchLocation,
  faWineBottle
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Activity = ({ setEmojiModel }) => {
  return (
    <div className="w-full flex ites-center text-base">
      <div className="w-full space-y-5 bg-white  mx-auto   ">
        <div className="searchIcon relative flex items-center">
          <input
            type="search"
            className="bg-gray-200 rounded-full w-full outline-none px-10 py-2.5 text-base"
            placeholder="Search "
          />
          <Search className="absolute cursor-pointer transform scale-100 hover:scale-105 transition-all duration-100 ease left-3 top-1/2  -translate-y-1/2 text-gray-500  " />
        </div>
        <div className="box space-y-3 p-5">
          <span
            className="flex w-full space-x-5 items-center cursor-pointer relative bg-none hover:bg-gray-300 rounded-full p-3 transition-all duration-100 ease-linear"
            onClick={() => {
              setEmojiModel(false);
            }}
          >
            <FontAwesomeIcon
              icon={faBirthdayCake}
              className="fa-lg text-pink-500"
            />
            <span className="text-sm font-bold tracking-widest text-gray-800">
              Celebrating
            </span>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="absolute right-5"
            />
          </span>
          <span
            className="flex w-full space-x-5 items-center cursor-pointer relative bg-none hover:bg-gray-300 rounded-full p-3 transition-all duration-100 ease-linear"
            onClick={() => {
              setEmojiModel(false);
            }}
          >
            <FontAwesomeIcon
              icon={faGlasses}
              className="fa-lg text-btn-blue"
            />
            <span className="text-sm font-bold tracking-widest text-gray-800">
              Watching
            </span>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="absolute right-5"
            />
          </span>
          <span
            className="flex w-full space-x-5 items-center cursor-pointer relative bg-none hover:bg-gray-300 rounded-full p-3 transition-all duration-100 ease-linear"
            onClick={() => {
              setEmojiModel(false);
            }}
          >
            <FontAwesomeIcon
              icon={faHamburger}
              className="fa-lg text-yellow-700"
            />
            <span className="text-sm font-bold tracking-widest text-gray-800">
             Eating
            </span>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="absolute right-5"
            />
          </span>
          <span
            className="flex w-full space-x-5 items-center cursor-pointer relative bg-none hover:bg-gray-300 rounded-full p-3 transition-all duration-100 ease-linear"
            onClick={() => {
              setEmojiModel(false);
            }}
          >
            <FontAwesomeIcon
              icon={faWineBottle}
              className="fa-lg text-green-700"
            />
            <span className="text-sm font-bold tracking-widest text-gray-800">
              Drinking
            </span>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="absolute right-5"
            />
          </span>
          <span
            className="flex w-full space-x-5 items-center cursor-pointer relative bg-none hover:bg-gray-300 rounded-full p-3 transition-all duration-100 ease-linear"
            onClick={() => {
              setEmojiModel(false);
            }}
          >
            <FontAwesomeIcon
              icon={faCalendarCheck}
              className="fa-lg text-blue-800"
            />
            <span className="text-sm font-bold tracking-widest text-gray-800">
              Attending
            </span>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="absolute right-5"
            />
          </span>
          <span
            className="flex w-full space-x-5 items-center cursor-pointer relative bg-none hover:bg-gray-300 rounded-full p-3 transition-all duration-100 ease-linear"
            onClick={() => {
              setEmojiModel(false);
            }}
          >
            <FontAwesomeIcon
              icon={faPlaneDeparture}
              className="fa-lg text-gray-600"
            />
            <span className="text-sm font-bold tracking-widest text-gray-800">
              Travveling To
            </span>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="absolute right-5"
            />
          </span>
          <span
            className="flex w-full space-x-5 items-center cursor-pointer relative bg-none hover:bg-gray-300 rounded-full p-3 transition-all duration-100 ease-linear"
            onClick={() => {
              setEmojiModel(false);
            }}
          >
            <FontAwesomeIcon
              icon={faHeadphones}
              className="fa-lg text-purple-500"
            />
            <span className="text-sm font-bold tracking-widest text-gray-800">
              Celebrating
            </span>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="absolute right-5"
            />
          </span>
          <span
            className="flex w-full space-x-5 items-center cursor-pointer relative bg-none hover:bg-gray-300 rounded-full p-3 transition-all duration-100 ease-linear"
            onClick={() => {
              setEmojiModel(false);
            }}
          >
            <FontAwesomeIcon
              icon={faSearchLocation}
              className="fa-lg text-black"
            />
            <span className="text-sm font-bold tracking-widest text-gray-800">
              Looking For
            </span>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="absolute right-5"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Activity;
