import { Clear } from '@material-ui/icons'
import React from 'react'

const Livepopup = ({ setLive }) => {
    return (
        <div className="fixed flex items-center  top-1/2 left-1/2 transform -translate-x-1/2 w-full -translate-y-1/2   bg-white z-50 bg-opacity-90 h-screen">
            <div className="box  w-5/12 mx-auto bg-white rounded-xl shadow-2xl">
                <span className="w-full border-b border-gray-300 flex relative  justify-end  py-3 px-2 ">
                    <h1 className="font-bold tracking-widest text-black absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 text-base">Profile too new to post a Video</h1>
                    <Clear className="cursor-pointer" onClick={() => setLive(false)}/>
                </span>
                <span className="block p-2">
                    <h1 className="text-gray-500 font-medium tracking-widest text-lg">Your account is too new to create a video . Try making some freind requests!</h1>
                </span>
                <span className="flex w-full items-center justify-items-end p-3">
                    <button className="bg-btn-blue outline-none text-sm text-white rounded-lg ml-auto px-5 py-1" onClick={() => setLive(false)}>OK</button>
                </span>
            </div>
        </div>
    )
}

export default Livepopup
