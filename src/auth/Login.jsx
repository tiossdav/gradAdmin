import React from "react";

import grad_icon from "../assets/icon/grad_icon.png";

const Login = () => {
  return (
    <div className="relative bg-purple-900 h-screen flex items-center justify-center">
      <div className="absolute top-[53px] left-[89px] bottom-[53px]">
        <img src={grad_icon} alt="" className="h-full object-contain" />
      </div>
      <div className="flex flex-col justify-center items-center absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-lg h-[348px] w-[436px] bg-white">
        <h3 className="montserrat font-bold text-xl tracking-normal leading-8">
          Admin Login
        </h3>
        <div className="w-full flex flex-col gap-[16px] justify-center  p-9">
          <div className=" login-button">
            <label className="text-base" htmlFor="email">
              Email
            </label>
            <input
              className="border border-gray-300 shadow outline-none focus:outline-none w-full block mt-1.5 py-[6px] px-[12px] rounded-sm"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
            />
          </div>
          <div className="w-full login-button">
            <label htmlFor="password">Password</label>
            <input
              className="border border-gray-300 shadow outline-none focus:outline-none w-full block mt-1.5 py-[6px] px-[12px] rounded-sm"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
          </div>
          <button
            className="w-full py-[6px] px-[12px] text-white login-button border border-purple-900 bg-purple-900 rounded-lg outline-none"
            type="button"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
