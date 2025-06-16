import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';
import img from './images/pexels-valeriya-965989.jpg';

const Signup = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-xl shadow-lg flex gap-12">
        {/* Image Section */}
        <div>
          <img className="w-80 h-80 rounded-tr-[110px] rounded-bl-[110px]" src={img} alt="Signup" />
        </div>

        {/* Form Section */}
        <div className="flex flex-col items-center gap-6">
          {/* Social Signups */}
          <div className="flex gap-4">
            <button className="flex items-center gap-2 bg-red-400 text-white py-2 px-4 rounded-md hover:bg-red-500 transition">
              <FcGoogle size={20} /> Google
            </button>
            <button className="flex items-center gap-2 bg-blue-400 text-white py-2 px-4 rounded-md hover:bg-blue-500 transition">
              <FaFacebookF size={20} /> Facebook
            </button>
          </div>

          {/* Input Fields */}
          <input placeholder="Enter Your Name" type="text" className="w-64 p-2 bg-slate-200 rounded-md focus:ring-2 focus:ring-blue-400" />
          <input placeholder="Enter Your Email" type="email" className="w-64 p-2 bg-slate-200 rounded-md focus:ring-2 focus:ring-blue-400" />
          <input placeholder="Enter Password" type="password" className="w-64 p-2 bg-slate-200 rounded-md focus:ring-2 focus:ring-blue-400" />
          <input placeholder="Confirm Password" type="password" className="w-64 p-2 bg-slate-200 rounded-md focus:ring-2 focus:ring-blue-400" />

          {/* Signup Button */}
          <button className="bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-600 transition duration-200">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;