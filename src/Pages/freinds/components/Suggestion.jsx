import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import FreindRequest from './FreindRequest';
// onClick={()=>{clickProp()}}
const Suggestion = ({clickProp}) => {
    const [fbData, setFbData] = useState("");
    useEffect(() => {
        axios
            .get(
                "localhost:5000/signup"
            )
            .then((d) => {
                setFbData(d.data);
            })
            .catch((Err) => {
                console.log(Err);
            });
    }, []);
    const [req, setRequest] = useState(false)
    const requestBox = () =>{
        setRequest(!req)
    }
    return (
       
            <div className="w-full p-5 space-y-5">
                    <div className="flex items-center space-x-10">
                        <FontAwesomeIcon icon={faChevronLeft} className="cursor-pointer text-xl text-gray-700" onClick={() => { clickProp() }} />
                        <span>
                            <h1 className="font-medium text-gray-500 text-lg">Freinds</h1>
                            <h1 className="font-bold text-black text-2xl tracking-widest">Suggestion</h1>
                        </span>
                    </div>
                  <span className="px-5 py-0 w-full flex border-b-2 border-gray-300 h-px"></span>
              <h1 className="font-bold text-sm tracking-widest text-black">People you may know</h1>
            <div className=" overflow-y-scroll  scrollbar scrollbar-thumb-gray-300 scrollbar-track-gray-50 h-screen">


              {fbData.length ?
                <>
                    {fbData &&
                        fbData.map((props, i) => (
                                <FreindRequest username={fbData[i].user.name} userImg={fbData[i].user.profile_image.large} mutual={fbData[i].user.total_photos} />))}
                            </> : <h1>No new requests</h1>} {fbData.length ?
                        <>
                            {fbData &&
                                fbData.map((props, i) => (
                                   <FreindRequest username={fbData[i].user.name} userImg={fbData[i].user.profile_image.large} mutual={fbData[i].user.total_photos} />))}
                         </> : <h1>No new requests</h1>} {fbData.length ?
                    <>
                        {fbData &&
                            fbData.map((props, i) => (
                                <FreindRequest username={fbData[i].user.name} userImg={fbData[i].user.profile_image.large} mutual={fbData[i].user.total_photos} />))}
                </> : <h1>No new requests</h1>}
            </div>
            </div>

    )
}

export default Suggestion
