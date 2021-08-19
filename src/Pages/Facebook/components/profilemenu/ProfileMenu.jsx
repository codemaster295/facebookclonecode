import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Backdrop, CircularProgress } from "@material-ui/core";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const ProfileMenu = (props) => {
	const [username, setUserName] = useState("");
	const [open, setOpen] = useState(true);


	const history = useHistory("");

	axios
		.get(`http://aa7bfdaa56fe.ngrok.io/${props.userid}`)
		.then((d) => {
			setUserName(d.data.fname + d.data.lname);
			setOpen(false);
		})
		.catch((Err) => {
			console.log(Err);
		});

	const profilepage = () => {
		history.push("/profile", {
			state: {
				id: props.userid,
			},
		});
	};
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);

	return (
		<>
			<div
				className={
					open
						? "fixed h-20    profilemneu top-16 right-0 w-1/4 text-black bg-white p-5 shadow-2xl rounded-lg"
						: "fixed  profilemneu top-16 right-0 w-1/4 text-black bg-white p-5 shadow-2xl rounded-lg"
				}
			>
				{open ? (
					<Backdrop
						className="text-white  absolute bg-white z-50 p-20"
						open={open}
					>
						<CircularProgress className="text-btn-blue " />
					</Backdrop>
				) : (
					""
				)}
				{username ? (
					<div className="" data-aos="fade-left">
						<div className="flex items-center space-x-5 p-2 cursor-pointer hover:bg-bg-theme transition-all duration-100 ease-linear rounded-lg">
							<FontAwesomeIcon
								icon={faUserCircle}
								className="text-gray-500"
								style={{ fontSize: 70 }}
							/>
							<div className="flex flex-col">
								<span className="text-black font-semibold tracking-wider">
									{username}
								</span>
								<span
									className="text-gray-500 font-medium"
									onClick={profilepage}
								>
									See your profile
								</span>
							</div>
						</div>
					</div>
				) : (
					""
				)}
			</div>
		</>
	);
};

export default ProfileMenu;
