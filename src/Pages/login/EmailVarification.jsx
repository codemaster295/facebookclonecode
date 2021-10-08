import { SettingsBackupRestoreRounded } from '@material-ui/icons';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';

const EmailVarification = ({email}) => {
    const history = useHistory("")
    const [tokenOTP , setTokenOTP]=useState("")
    const [tokendb , setTokendb]=useState("")
    useEffect(() => {
		
	
			
			
		},[]);
        
        const handleSignUp = ()=>{
           const data = {tokenOTP , email}
            axios
			.post("http://localhost:8080/api/v1/signup/verifyotp" , data)
			.then((d) => {
				console.log(d.data)
                if(d.data){
                    localStorage.setItem("email",email)
                    history.push("/facebook")
                }
			})
        }
        
        
		
    return (
        <div className="shadow-2xl flex flex-col md:w-6/12 w-full lg:w-1/3 absolute space-y-5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border-none rounded-lg p-5 ">
            <h1 className="font-semibold tracking-widest text-black text-xl">Enter The Code From Your Email</h1>
            <p className="font-medium  text-gray-800 tracking-widest">Let us know that this email address belongs to you. Enter the code from the email sent to <span className="font-bold text-gray-500 text-sm tracking-widest">{email}</span></p>
            <input className="w-full bg-bg-theme outline-none px-2 py-3" placeholder="Enter the OTP"  type="text" name="number" id="" onChange={(e)=>{setTokenOTP(e.target.value)}}/>
            <span  className="text-btn-blue cursor-pointer text-xs font-semibold">Click here resend the otp</span>
            <button onClick={handleSignUp} className="outline-none bg-btn-blue px-10 rounded-lg py-2 text-white font-bold tracking-widest">Click to Confirm</button>
        </div>
    )
}

export default EmailVarification
