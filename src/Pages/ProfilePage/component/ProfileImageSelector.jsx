import {
	faCropAlt,
	faCross,
	faEdit,
	faPlus,
	faSquare,
	faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Divider, ListItem, Tooltip } from "@material-ui/core";
import React, { useState } from "react";
import PostPopUp from "../../Facebook/components/createnewpostpopup/PostPopUp";

const ProfileImageSelector = ({close}) => {
	const [imageupload , setImageUpoad] = useState(false)
	return (
		<div className="ProfileImageSelector w-full h-full z-50 fixed top-0 left-0 flex justify-center items-center bg-white bg-opacity-90">
			<div className="w-6/12 p-5 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-2xl">

                <div className="grid grid-cols-3 justify-between items-center">
					<span></span>
					<h1 className="font-semibold tracking-widest text-xl text-black">Update Profile Picture</h1>
					<FontAwesomeIcon className="ml-auto text-4xl text-[#c7c1c1] hover:text-[#b3b3b3] cursor-pointer" icon={faTimesCircle} onClick={close}/>
				</div>
                <Divider className="my-2 border-b bg-gray-400"/>
				<div className="flex items-center space-x-5">
					<button className="flex w-5/12 hover:bg-[#d7ebff] transition-all rounded-md duration-100 ease justify-center px-10 py-3     items-center space-x-3 bg-[#cbe4fd] text-btn-blue" onClick={()=>{setImageUpoad(!imageupload)}}>
						<FontAwesomeIcon icon={faPlus} />
						<span className="text-black font-bold text-xs">Upload Photo</span>
					</button>
					{imageupload?<PostPopUp />:""}
					<button className="flex w-5/12 justify-center px-10 py-3     items-center space-x-3 bg-bg-theme  transition-all rounded-md duration-100 ease hover:bg-[rgba(0,0,0,0.06)]">
						<FontAwesomeIcon icon={faCropAlt} />
						<span className="text-black font-bold text-xs">Add Frame</span>
					</button>
					<Tooltip className="flex w-1/12 bg-bg-theme rounded-md  justify-center px-10 py-3    hover:bg-[rgba(0,0,0,0.06)]" title="Edit" arrow>
						<button className="flex items-center">
							<FontAwesomeIcon icon={faEdit} />
						</button>
					</Tooltip>
				</div>
			</div>
		</div>
	);
};

export default ProfileImageSelector;
