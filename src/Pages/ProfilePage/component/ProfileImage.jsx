import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ProfileImage = () => {
	return (
		<>
            {/* <div className="w-8/12 rounded-xl  relative overflow-hidden left-1/2 top-0 transform -translate-x-1/2 bg-white shadow-2xl h-96 z-0">
                <img className="w-full h-full object-cover"src="https://live.staticflickr.com/2912/13981352255_fc59cfdba2_b.jpg" alt=""/>
            <div className="w-48 h-48 overflow-hidden absolute shadow-2xl border-gray-500 bottom-0 bg-black rounded-full block left-1/2 transform -translate-x-1/2 z-50">
                <img className="p-2 rounded-full" src="https://media.istockphoto.com/photos/sample-red-grunge-round-stamp-on-white-background-picture-id491520707?k=6&m=491520707&s=612x612&w=0&h=t-IFOkDIF3n-PA59Zq0CyYe_1FDpVZAiv1sm78DcN6s=" alt=""/>
            </div>
            </div> */}
            <div className="container mx-auto">
                <div className="flex justify-end flex-col items-center h-[50vh] ">
                    <div className="w-10/12 mx-auto rounded-xl overflow-hidden">
                        <img className="w-full" src="https://scontent.fstv3-1.fna.fbcdn.net/v/t39.30808-6/p180x540/234319577_114649654244205_6133896553808906073_n.jpg?_nc_cat=100&ccb=1-4&_nc_sid=e3f864&_nc_ohc=ZqKCMWmvQGIAX_SSqIR&_nc_ht=scontent.fstv3-1.fna&oh=09c6a538757fc17a8584dfb2b0c54371&oe=611A1CBA" alt="" />
                    </div>
                    <div className="w-48 flex p-px justify-center top-80  h-48 bg-white shadow-2xl absolute items-center rounded-full overflow-hidden">
{/* <div className="p-2 h-full w-full rounded-full">
</div> */}
   <FontAwesomeIcon className="text-gray-500 p-1" style={{fontSize:"200px"}} icon={faUserCircle} />
                    </div>
                </div>
            </div>
		</>
	);
};

export default ProfileImage;
