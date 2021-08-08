import axios from 'axios';
import React, { useEffect, useState } from 'react'

const EmailVarification = () => {
    const [email , setEmail] = useState("")
    useEffect(() => {
		console.log("useefffcet");
		axios
			.get("http://localhost:5000/signup")
			.then((d) => {
				const data = d.data
                setEmail(data[(data.length)-1].email)
			})
			.catch((Err) => {
				console.log(Err);
			});
			
		},[]);
		
    return (
        <div className="shadow-2xl w-1/3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border-none rounded-lg p-5 ">
            <h1 className="font-semibold tracking-widest text-black text-xl">Enter The Code From Your Email</h1>
            <p>Let us know that this email address belongs to you. Enter the code from the email sent to <span className="font-bold text-black tracking-widest">{email}</span></p>
        </div>
    )
}

export default EmailVarification
