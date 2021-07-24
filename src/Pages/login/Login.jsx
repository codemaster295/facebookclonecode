import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  //     var c = "My name is meet"
  //     fs.writeFile('data.txt',c , ()=>{
  //     console.log("data is written")
  // })

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let permission = "";
  if (email === "meet@gmail.com" && password === "1234") {
    permission = "/Facebook";
  } else {
    permission = "/";
  }

  const SubmitForm = (e) => {
    e.preventDefault();
    
  };
  return (
    <div>
      <div className="container mx-auto px-4">
        <div className="lg:w-8/12 w-full mx-auto h-screen">
          <div className="flex lg:flex-row  flex-col lg:space-y-0 space-y-10 h-full justify-center lg:justify-between items-center">
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
                  <Link
                    to={permission}
                    className="w-full text-center block outline-none border border-gray-400 rounded-xl text-xl text-white bg-btn-blue"
                  >
                    <button className="p-5">Log In</button>
                  </Link>
                  <Link className="w-1/2 block mx-auto outline-none border border-gray-400 rounded-xl text-base text-white py-2.5 px-1 bg-btn-green">
                    <button className="w-full" type="submit">
                      Create New Account
                    </button>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
