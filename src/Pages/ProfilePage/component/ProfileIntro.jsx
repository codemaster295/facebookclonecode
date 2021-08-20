import React from "react";

const ProfileIntro = () => {
	return (
		<div className="bg-white shadow-2xl rounded-xl">
			<div className="p-5 space-y-4">
				<h1 className="font-semibold text-black tracking-widest">Intro</h1>
				<button className="w-full mx-auto rounded-xl bg-bg-theme py-2 font-bold text-black text-base">
					Edit details
				</button>
			</div>
		</div>
	);
};

export default ProfileIntro;
