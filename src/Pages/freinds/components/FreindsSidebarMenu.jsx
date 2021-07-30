import React from 'react'
import { faChevronRight, faCog, faGift, faStreetView, faUserCheck, faUserClock, faUserCog, faUserFriends, faUserPlus } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FriendsSidebarMenu = ({clickProp , suggestionclick }) => {
    return (
        <div>
            <div className="flex items-center justify-between p-5">
                <span className="font-bold tracking-tight text-2xl">Friends</span>
                <FontAwesomeIcon icon={faCog} className="fa-2x" />
            </div>
            <div className="box p-2 space-y-5">
                <span className="flex space-x-7 items-center px-5 py-2 w-full bg-blue-100 rounded-lg cursor-pointer">
                    <div className="rounded-full bg-blue-500 w-9 flex items-center justify-center h-9">
                        <FontAwesomeIcon icon={faUserFriends} className="fa-2xl text-white " />
                    </div>
                    <span className="font-medium tracking-widest text-base">Home</span>
                </span>
                <span className="flex space-x-7 items-center px-5 py-2 w-full relative cursor-pointer hover:bg-gray-200 rounded-lg transition-all duration-100 ease-linear" onClick={()=>{clickProp()}}>
                    <div className="rounded-full bg-gray-200 w-9 flex items-center justify-center h-9">
                        <FontAwesomeIcon icon={faUserClock} className="fa-2xl text-black " />
                    </div>
                    <span className="font-medium tracking-widest text-base">Friend Request</span>
                    <FontAwesomeIcon icon={faChevronRight} className="fa-2xl text-2xl text-gray-400  absolute right-5" />
                </span>
                <span className="flex space-x-7 items-center px-5 py-2 w-full relative cursor-pointer hover:bg-gray-200 rounded-lg transition-all duration-100 ease-linear" onClick={()=>{suggestionclick()}} >
                    <div className="rounded-full bg-gray-200 w-9 flex items-center justify-center h-9">
                        <FontAwesomeIcon icon={faUserPlus} className="fa-2xl text-black " />
                    </div>
                    <span className="font-medium tracking-widest text-base">Suggestion</span>
                    <FontAwesomeIcon icon={faChevronRight} className="fa-2xl text-2xl text-gray-400  absolute right-5" />
                </span>
                <span className="flex space-x-7 items-center px-5 py-2 w-full relative cursor-pointer hover:bg-gray-200 rounded-lg transition-all duration-100 ease-linear">
                    <div className="rounded-full bg-gray-200 w-9 flex items-center justify-center h-9">
                        <FontAwesomeIcon icon={faUserCheck} className="fa-2xl text-black " />
                    </div>
                    <span className="font-medium tracking-widest text-base">All Friends</span>
                    <FontAwesomeIcon icon={faChevronRight} className="fa-2xl text-2xl text-gray-400  absolute right-5" />
                </span>
                <span className="flex space-x-7 items-center px-5 py-2 w-full  cursor-pointer hover:bg-gray-200 rounded-lg transition-all duration-100 ease-linear">
                    <div className="rounded-full bg-gray-200 w-9 flex items-center justify-center h-9">
                        <FontAwesomeIcon icon={faGift} className="fa-2xl text-black " />
                    </div>
                    <span className="font-medium tracking-widest text-base">Home</span>
                </span>
                <span className="flex space-x-7 items-center px-5 py-2 w-full relative cursor-pointer hover:bg-gray-200 rounded-lg transition-all duration-100 ease-linear">
                    <div className="rounded-full bg-gray-200 w-9 flex items-center justify-center h-9">
                        <FontAwesomeIcon icon={faUserCog} className="fa-2xl text-black " />
                    </div>
                    <span className="font-medium tracking-widest text-base">All Friends</span>
                    <FontAwesomeIcon icon={faChevronRight} className="fa-2xl text-2xl text-gray-400  absolute right-5" />
                </span>
            </div>
        </div>
    )
}

export default FriendsSidebarMenu
