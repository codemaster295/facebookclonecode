import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

const DeletePost = (props) => {
    const deletePost = ()=>{
       
        fetch(`https://facebookrestapi.herokuapp.com//${props.id}`, {
            method: "DELETE",
           
      }).then((result)=>{
          
          result.json().then((resp)=>{
              props.propsreload()              
          })
        })
        props.propsmenu()
        // props.props.menuclose()

}
    return (
        <div className="fixed top-0 left-0 bg-white bg-opacity-80 flex justify-center items-center z-50 w-full h-full">
            <div className="w-1/3 bg-white shadow-2xl p-5 space-y-5">
                 <div className="flex relative justify-between items-center ">
                    <h1 className="text-xl font-bold tracking-widest">Move to your recycle bin?</h1>
                    <span className="absolute top-1/2 right-0 transform -translate-y-1/2 cursor-pointer hover:bg-gray-400 hover:text-gray-600 transition-all duration-100 ease-linear  bg-gray-300 rounded-full w-8 h-8 flex justify-center items-center" onClick={props.propspopup}>
                        <FontAwesomeIcon icon={faTimes} className="text-xl font-thin text-gray-500 " />
                    </span>
                </div>
                <div className="">
                     <p className="font-semibold tracking-widest text-black">Items in your recycle bin will be automatically deleted after 30 days. You can delete them earlier from your recycle bin by going to "Activity log" in your settings.</p>
                </div>
                <div className="flex justify-end items-center">
                    <div className="space-x-5">
                        <button className="text-btn-blue font-bold">cancel</button>
                        <button className="bg-btn-blue text-white rounded-md px-5 py-2" onClick={deletePost}>move</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeletePost
