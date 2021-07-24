import { faFlushed, faGrimace, faGrinSquint, faGrinTongue, faKissWinkHeart, faLaughSquint, faSadCry, faSmile, faSmileWink, faSurprise, faTired } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
// onClick={()=>{setEmojiModel(false)}}

const Emojis = ({ setEmojiModel }) => {
    return (
        <div className="w-full flex ites-center">
            <div className="w-full bg-white  flex flex-wrap mx-auto items-center    ">
                <span className="flex items-center space-x-5 w-1/2 p-2 hover:bg-gray-200 transition-all duration-100 ease-linear rounded-xl my-5 cursor-pointer  " onClick={() => {setEmojiModel(false);}}>
                    <FontAwesomeIcon icon={faSmile} className="fa-xs text-yellow-400 " />
                    <h1 className="text-sm font-bold text-gray-700 tracking-widest">Feeling Happy</h1>
                </span>
                <span className="flex items-center space-x-5 w-1/2 p-2 hover:bg-gray-200 transition-all duration-100 ease-linear rounded-xl my-5 cursor-pointer " onClick={() => {setEmojiModel(false);}}>
                    <FontAwesomeIcon icon={faSurprise} className="fa-xs text-yellow-400 " />  
                    <h1 className="text-sm font-bold text-gray-700 tracking-widest">Feeling Surprised</h1>
                </span>
                <span className="flex items-center space-x-5 w-1/2 p-2 hover:bg-gray-200 transition-all duration-100 ease-linear rounded-xl my-5 cursor-pointer " onClick={() => {setEmojiModel(false);}}>
                    <FontAwesomeIcon icon={faTired} className="fa-xs text-yellow-400 " />  
                    <h1 className="text-sm font-bold text-gray-700 tracking-widest">Feeling Tired</h1>
                </span>
                <span className="flex items-center space-x-5 w-1/2 p-2 hover:bg-gray-200 transition-all duration-100 ease-linear rounded-xl my-5 cursor-pointer " onClick={() => {setEmojiModel(false);}}>
                    <FontAwesomeIcon icon={faSmileWink} className="fa-xs text-yellow-400 " />  
                    <h1 className="text-sm font-bold text-gray-700 tracking-widest">Feeling Winky</h1>
                </span>
                <span className="flex items-center space-x-5 w-1/2 p-2 hover:bg-gray-200 transition-all duration-100 ease-linear rounded-xl my-5 cursor-pointer " onClick={() => {setEmojiModel(false);}}>
                    <FontAwesomeIcon icon={faSadCry} className="fa-xs text-yellow-400 " />  
                    <h1 className="text-sm font-bold text-gray-700 tracking-widest">Feeling Sad</h1>
                </span>
                <span className="flex items-center space-x-5 w-1/2 p-2 hover:bg-gray-200 transition-all duration-100 ease-linear rounded-xl my-5 cursor-pointer " onClick={() => {setEmojiModel(false);}}>
                    <FontAwesomeIcon icon={faLaughSquint} className="fa-xs text-yellow-400 " />  
                    <h1 className="text-sm font-bold text-gray-700 tracking-widest">Feeling Comedy</h1>
                </span>
                <span className="flex items-center space-x-5 w-1/2 p-2 hover:bg-gray-200 transition-all duration-100 ease-linear rounded-xl my-5 cursor-pointer " onClick={() => {setEmojiModel(false);}}>
                    <FontAwesomeIcon icon={faKissWinkHeart} className="fa-xs text-yellow-400 " />  
                    <h1 className="text-sm font-bold text-gray-700 tracking-widest">Feeling Lovely</h1>
                </span>
                <span className="flex items-center space-x-5 w-1/2 p-2 hover:bg-gray-200 transition-all duration-100 ease-linear rounded-xl my-5 cursor-pointer " onClick={() => {setEmojiModel(false);}}>
                    <FontAwesomeIcon icon={faGrinTongue} className="fa-xs text-yellow-400 " />  
                    <h1 className="text-sm font-bold text-gray-700 tracking-widest">Feeling Prank</h1>
                </span>
                <span className="flex items-center space-x-5 w-1/2 p-2 hover:bg-gray-200 transition-all duration-100 ease-linear rounded-xl my-5 cursor-pointer " onClick={() => {setEmojiModel(false);}}>
                    <FontAwesomeIcon icon={faFlushed} className="fa-xs text-yellow-400 " />  
                    <h1 className="text-sm font-bold text-gray-700 tracking-widest">Feeling Surprised</h1>
                </span>
                <span className="flex items-center space-x-5 w-1/2 p-2 hover:bg-gray-200 transition-all duration-100 ease-linear rounded-xl my-5 cursor-pointer " onClick={() => {setEmojiModel(false);}}>
                    <FontAwesomeIcon icon={faGrimace} className="fa-xs text-yellow-400 " />  
                    <h1 className="text-sm font-bold text-gray-700 tracking-widest">Feeling Awkward</h1>
                </span>
            </div>
        </div>
    );
};

export default Emojis;
