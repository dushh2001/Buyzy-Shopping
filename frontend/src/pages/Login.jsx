import React, { useState } from "react";
import { Link } from "react-router-dom";
import login from "../assets/login.webp";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Logged:", {email, password});
  }
  
  return (
    <div className="flex ">
      <div className="flex flex-col items-center justify-center w-full p-8 md:w-1/2 md:p-12">
        <form onSubmit={handleSubmit} className="w-full max-w-md p-8 bg-white border rounded-lg shadow">
          <div className="flex justify-center mb-6">
            <h2 className="text-xl font-medium text-violet-950">Buyzy</h2>
          </div>
          <h2 className="mb-6 text-2xl font-bold text-center">Hey there !!!</h2>
          <p className="mb-6 text-center">
            Enter your username and password to Login
          </p>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-semibold">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-semibold">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full p-2 border rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 font-semibold text-white bg-black rounded-lg hover:bg-gray-800"
          >
            Sign In
          </button>
          <p className="mt-6 text-sm text-center">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-500">
              Register here
            </Link>
          </p>
        </form>
      </div>

      <div className="hidden w-3/4 bg-gray-800 md:block">
        <div className="flex flex-col items-center justify-center h-full">
          <img
            src={login}
            alt="Login to Account"
            className="h-[755px] w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
