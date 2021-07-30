import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

const FriendRequest = (props) => {
const [accept , setAccept]= useState(false)
const [deleteUser , setDeleteUser]=useState(false)
const [status , setStatus]=useState("")


    return (

        <div>
           
            <div className="flex space-x-5 w-full">
                
                    <img className="rounded-full w-14 h-14" src={props.userImg} alt="" />
                
                <span className="w-full space-y-2">
                    <h1 className="text-base font-bold tracking-widest">{props.username}</h1>
                    {accept?<h1 className="font-semibold text-sm text-gray-500 tracking-widest">user is Added</h1>:deleteUser?<h1 className="font-semibold text-sm text-gray-500 tracking-widest">User is removed</h1>:<>
                    <span className="flex items-center  ">
                        <FontAwesomeIcon icon={faUserCircle} className="text-lg relative z-0 text-btn-blue p-px"/>
                        <FontAwesomeIcon icon={faUserCircle} className="text-lg  relative z-1 bg-white p-px text-purple-500 transform -translate-x-2 rounded-full"/>
                        <h1 className="font-semibold text-sm text-gray-500">{Math.floor(Math.random()*15)} Mutual friends</h1>
                    </span>
                    <span className="flex items-center justify-between space-x-3">
                        <button className="outline-none px-5 py-2 bg-btn-blue w-1/2 text-sm text-white font-semibold tracking-normal rounded-lg" onClick={()=>{setAccept(true)}}>Confirm</button>
                        <button className="outline-none px-5 py-2 bg-gray-400 w-1/2 text-sm  text-white font-semibold tracking-normal rounded-lg" onClick={()=>{setDeleteUser(true)}}>Delete</button>
                    </span>
                    </>}
                </span>
            </div>
        </div>
    )
}

export default FriendRequest
