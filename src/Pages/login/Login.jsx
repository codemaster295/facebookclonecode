import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SignUpPopUp from "./SignUpPopUp";

const Login = () => {
  //     var c = "My name is meet"
  //     fs.writeFile('data.txt',c , ()=>{
  //     console.log("data is written")
  // })



  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signUp , setSignUp] =useState(false)
 const handleLogin =()=>{

		
		axios
			.get(`http://localhost:5000/${email}`)
			.then((d) => {
				console.log(d)
				console.log(d.data[0].password)
			})
			.catch((Err) => {
				console.log(Err);
			});
		
 }
  

  const SubmitForm = (e) => {
    e.preventDefault();
    
  };
  const CloseSignUpPopUp = () =>{
    setSignUp(!signUp)
  }
  return (
    <div className="relative z-0">
      <div className="container mx-auto px-4">
        <div className="lg:w-8/12 w-full mx-auto">
          <div className="flex lg:flex-row h-screen  flex-col lg:space-y-0 space-y-10  justify-center lg:justify-between items-center">
            <div className="lg:w-1/2 w-full space-y-5">
              <h1 className="text-btn-blue text-3xl md:text-5xl tracking-widest font-bold text-left">
                facebook
              </h1>
              <p className="font-medium text-black tracking-wider text-xl text-left">
                Facebook helps you connect and share with the people in your
                life
              </p>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="w-full h-full  shadow-2xl p-2.5 md:p-10">
                <form className="space-y-10" onSubmit={SubmitForm}>
                  <input
                    className="w-full outline-none border border-gray-400 rounded-xl text-base text-gray-500 p-5"
                    type="email"
                    placeholder="Email address or Phone number"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <input
                    className="w-full outline-none border border-gray-400 rounded-xl text-base text-gray-500 p-5"
                    type="password"
                    autoComplete="true"
                    placeholder="Password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  
                  
                    <button className="p-5 w-full text-center block outline-none border border-gray-400 rounded-xl text-xl text-white bg-btn-blue" onClick={handleLogin}>Log In</button>
                  
                  <div className="w-1/2 block mx-auto outline-none border border-gray-400 rounded-xl text-base text-white py-2.5 px-1 bg-btn-green">
                    <button className="w-full" type="submit" onClick={()=>{setSignUp(!signUp)}}>
                      Create New Account
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {signUp?<SignUpPopUp closepopup={CloseSignUpPopUp} />:null}
    </div>
  );
};

export default Login;
