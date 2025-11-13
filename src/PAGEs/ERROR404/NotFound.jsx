import React from "react";
import { NavLink } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-950 text-center text-gray-100">
      <FaExclamationTriangle className="text-6xl text-blue-400 mb-6" />
      <h1 className="text-4xl font-bold mb-4">Oops! This AI model doesn’t exist.</h1>
      <p className="text-gray-400 mb-8">
        The page you're looking for might have been removed or doesn't exist.
      </p>
      <NavLink
        to="/"
        className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-[0_0_20px_rgba(0,200,255,0.4)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,200,255,0.6)]"
      >
        ⬅ Go Back Home
      </NavLink>
    </div>
  );
};

export default NotFound;
