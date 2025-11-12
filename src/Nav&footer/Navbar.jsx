import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Toggle function: same icon open/close
    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

    const Links = <>
        <Link
            to="/"
            className="hover:text-blue-400 transition"
            onClick={toggleSidebar}
        >
            Home
        </Link>
        <Link
            to="/add-model"
            className="hover:text-blue-400 transition"
            onClick={toggleSidebar}
        >
            Add Model
        </Link>
        <Link
            to="/all-models"
            className="hover:text-blue-400 transition"
            onClick={toggleSidebar}
        >
            All Models
        </Link>
    </>
    
    const Links_FOR_LARG = <>
        <Link
            to="/"
            className="hover:text-blue-400 transition py-4 font-semibold"
        >
            Home
        </Link>
        <Link
            to="/add-model"
            className="hover:text-blue-400 transition py-4 font-semibold"
        >
            Add Model
        </Link>
        <Link
            to="/all-models"
            className="hover:text-blue-400 transition py-4 font-semibold"
        >
            All Models
        </Link>
    </>

    return (
        <>
            {/* Navbar */}
            <nav className="bg-gray-900 text-white shadow-md fixed top-0 left-0 w-full z-50">
                <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                    {/* Left Side: Logo & Hamburger (for mobile) */}
                    <div className="flex items-center gap-3">
                        {/* Hamburger Icon (only small devices) */}
                        <button
                            onClick={toggleSidebar}
                            className="text-2xl md:hidden focus:outline-none"
                        >
                            {sidebarOpen ? "☰" : "☰"}
                        </button>

                        {/* Logo */}
                        <Link
                            to="/"
                            className="text-2xl font-bold text-blue-400 tracking-wide"
                        >
                            AI Model
                        </Link>
                    </div>

                    {/* Middle: Menu Links (only large devices) */}
                    <div className="hidden md:flex space-x-8 text-lg">
                        {Links_FOR_LARG}
                    </div>

                    {/* Right Side: Login Button */}
                    <div>
                        {!user ? (
                            <Link
                                to="/login"
                                className="bg-blue-500 px-5 py-2 rounded-lg hover:bg-blue-600 transition"
                            >
                                Login
                            </Link>
                        ) : (
                            <img
                                src={user.photoURL}
                                alt="Profile"
                                className="w-10 h-10 rounded-full border-2 border-blue-400"
                            />
                        )}
                    </div>
                </div>
            </nav>

            {/* Sidebar (for small devices) */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300 ease-in-out z-40 shadow-lg`}
            >
                {/* Sidebar Header */}
                <div className="flex justify-between items-center px-4 py-3 border-b border-gray-700">
                    <h2 className="text-xl font-semibold text-blue-400">Menu</h2>
                    <button onClick={toggleSidebar} className="text-2xl focus:outline-none">
                        ✕
                    </button>
                </div>

                {/* Sidebar Menu Items */}
                <div className="flex flex-col mt-4 space-y-3 px-6">
                    {Links}
                </div>
            </div>

            {/* Background Overlay (when sidebar open) */}
            {sidebarOpen && (
                <div
                    onClick={toggleSidebar}
                    className="fixed inset-0 bg-[rgba(0,0,0,0.3)] backdrop-blur-lg bg-opacity-50 z-30 transition-opacity duration-300"
                ></div>
            )}
        </>
    );
};

export default Navbar;
