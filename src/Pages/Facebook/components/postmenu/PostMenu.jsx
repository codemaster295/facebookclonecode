import { faBell, faBellSlash, faBookmark, faBoxOpen, faCalendar, faEdit, faLanguage, faLock, faSave, faTransgender, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import DeletePost from '../DeletePost'

const PostMenu = (props ) => {
    
    const [deletemenu , setDeleteMenu] =useState(false)
    const [setDeletePost ,deletePost ]=useState(false)
   
    
    const menupopup = () =>{
        setDeleteMenu(!deletemenu)
    }
    const deletepost = () =>{
        setDeletePost(!deletePost)
    }
    
    return (
        <div className="postmenu bg-white border absolute top-0 right-14 w-1/2 ">
            
            <div className="space-y-3 p-2">
                <div className="flex items-center space-x-5  bg-white hover:bg-gray-300 transition-all duration-100 ease-linear rounded-lg cursor-pointer p-3">
                    <FontAwesomeIcon icon={faSave} className="text-xl text-gray-700" />
                    <span className="space-y-1">
                        <h1 className="text-black font-semibold text-base tracking-widest">Save Post</h1>
                        <h1 className="text-gray-500 text-xs tracking-normal">Add this to your saved items</h1>
                    </span>
                </div>
                <hr className="bg-gray-500" />
                <div className="flex items-center space-x-5 bg-white hover:bg-gray-300 transition-all duration-100 ease-linear rounded-lg cursor-pointer p-3">
                   <FontAwesomeIcon icon={faEdit} className="text-xl text-black" />
                   <h1 className="font-medium tracking-widest text-lg">Edit Post</h1>
                </div>
                <div className="flex items-center space-x-5 bg-white hover:bg-gray-300 transition-all duration-100 ease-linear rounded-lg cursor-pointer p-3">
                   <FontAwesomeIcon icon={faLock} className="text-xl text-pink-500" />
                   <h1 className="font-medium tracking-widest text-lg">Edit Audience</h1>
                </div>
                <div className="flex items-center space-x-5 bg-white hover:bg-gray-300 transition-all duration-100 ease-linear rounded-lg cursor-pointer p-3">
                   <FontAwesomeIcon icon={faBellSlash} className="text-xl text-btn-blue" />
                   <h1 className="font-medium tracking-widest text-lg">Turn off notifications for this post</h1>
                </div>
                <div className="flex items-center space-x-5 bg-white hover:bg-gray-300 transition-all duration-100 ease-linear rounded-lg cursor-pointer p-3">
                   <FontAwesomeIcon icon={faLanguage} className="text-xl text-purple-500" />
                   <h1 className="font-medium tracking-widest text-lg">Turn on translations</h1>
                </div>
                <div className="flex items-center space-x-5 bg-white hover:bg-gray-300 transition-all duration-100 ease-linear rounded-lg cursor-pointer p-3">
                   <FontAwesomeIcon icon={faCalendar} className="text-xl text-green-500" />
                   <h1 className="font-medium tracking-widest text-lg">Edit Date</h1>
                </div>
                <div className="flex items-center space-x-5 bg-white hover:bg-gray-300 transition-all duration-100 ease-linear rounded-lg cursor-pointer p-3">
                   <FontAwesomeIcon icon={faBoxOpen} className="text-xl text-blue-400" />
                   <h1 className="font-medium tracking-widest text-lg">Move to archive</h1>
                </div>
                <div className="flex items-center space-x-5 bg-white hover:bg-gray-300 transition-all duration-100 ease-linear rounded-lg cursor-pointer p-3">
                    <FontAwesomeIcon icon={faTrash} className="text-xl text-indigo-500" />
                    
                    <span className="space-y-1" onClick={()=>{setDeleteMenu(true)}}>
                        <h1 className="text-black font-semibold text-base tracking-widest">Move to Reacycle bin</h1>
                        <h1 className="text-gray-500 text-xs tracking-normal">Items in your Recycle bin are deleted after 30 days.</h1>
                    </span>
                    {deletemenu?<DeletePost propsreload={props.reloadmenu} propspopup={menupopup} propsmenu={props.menuclose}  propsdelete={deletepost} id={props.id} />:""}
                 
                </div>               
            </div>
        </div>
    )
}

export default PostMenu
