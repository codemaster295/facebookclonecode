import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const FreindsBoxBanner = (props) => {
	const [accept, setAccept] = useState(false);
	const [remove, setRemove] = useState(false);
	return (
		<div className="freindsBox w-2/12 bg-white shadow-2xl rounded-xl overflow-hidden mx-5 my-5">
			<div className="w-full h-48  overflow-hidden">
				<img className="w-full h-full object-cover" src={props.img} alt="" />
			</div>
			<div className="nameBox p-2">
				<h1 className="text-black font-bold text-base tracking-tight cursor-pointer">
					{props.username}
				</h1>
				<span className="flex items-center">
					<div className="flex items-center w-10">
						<FontAwesomeIcon
							icon={faUserCircle}
							className="text-lg  text-btn-blue p-px"
						/>
						<FontAwesomeIcon
							icon={faUserCircle}
							className="text-lg   bg-white p-px -ml-2 text-purple-500  rounded-full"
						/>
					</div>
					<h1 className="font-semibold text-sm text-gray-500">
						{Math.floor(Math.random() * 15 + 2)} Mutual freinds
					</h1>
				</span>
			</div>
			<div className="acceptremove w-full flex flex-col items-center justify-center p-2 space-y-3">
				{accept || remove ? null : (
					<button
						className="w-full text-white text-base font-semibold rounded-md p-2 outline-none bg-btn-blue hover:bg-blue-500 transition-colors duration-100 ease-linear text-center"
						onClick={() => {
							setAccept(!accept);
						}}
					>
						confirm
					</button>
				)}
				<button
					className={
						accept || remove
							? "cursor-not-allowed w-full text-black text-base font-semibold rounded-md p-2 outline-none bg-gray-400  transition-colors duration-100 ease-linear text-center"
							: "w-full text-black text-base font-semibold rounded-md p-2 outline-none bg-gray-300 hover:bg-gray-200 transition-colors duration-100 ease-linear text-center"
					}
					onClick={() => {
						setRemove(true);
					}}
				>
					{accept ? "user accepted" : remove ? "user removed" : "delete"}
				</button>
			</div>
		</div>
	);
};

export default FreindsBoxBanner;
