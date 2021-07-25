import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

const FreindRequestSent = (props) => {
    const [cancel ,setCancel] = useState(false)
    return (
        <div className="FreindRequestSent flex justify-between p-2 mx-4 my-3 cursor-pointer hover:bg-gray-300 rounded-xl">
            <div className="flex items-center space-x-5">
                <span className="rounded-full overflow-hidden">
                <img className="rounded-full w-14 h-14" src={props.userImg} alt="" />
                </span>
                <span>
                    <h1 className="text-base font-bold text-black tracking-widest">{props.username}</h1>

                    <h1 className="text-xm text-gray-500 tracking-tight font-semibold">{cancel?"User Removed":"2 mutual freinds"}</h1>
                </span>
            </div>
                <div className="flex items-center justify-end">
                   {!cancel?<button className="outline-none bg-gray-100 text-black rounded-lg px-5 py-2 font-semibold text-sm hover:bg-gray-200" onClick={()=>{setCancel(!cancel)}}>Cancel Reaquest</button>:null}
                </div>
        </div>
    )
}

export default FreindRequestSent
