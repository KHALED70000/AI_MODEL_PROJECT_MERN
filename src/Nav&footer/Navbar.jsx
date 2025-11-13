import { use, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../CONTEXT/AuthContext";
import { TbLogout } from "react-icons/tb";

const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Toggle function: same icon open/close
    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

    const Links = <>
        <NavLink
            to="/"
            className="hover:text-blue-400 transition  px-6"
            onClick={toggleSidebar}
        >
            Home
        </NavLink>
        <NavLink
            to="/addmodel"
            className="hover:text-blue-400 transition  px-6"
            onClick={toggleSidebar}
        >
            Add Model
        </NavLink>
        <NavLink
            to="/allmodels"
            className="hover:text-blue-400 transition  px-6"
            onClick={toggleSidebar}
        >
            All Models
        </NavLink>
    </>
    const Links_FOR_LARG = <>
        <NavLink
            to="/"
            className="hover:text-blue-400 transition p-1 font-semibold"
        >
            Home
        </NavLink>
        <NavLink
            to="/addmodel"
            className="hover:text-blue-400 transition p-1 font-semibold"
        >
            Add Model
        </NavLink>
        <NavLink
            to="/allmodels"
            className="hover:text-blue-400 transition p-1 font-semibold"
        >
            All Models
        </NavLink>
    </>
    const { user, signOutUser } = use(AuthContext);

    const profile = useRef()
    const handleProfile = () => {
        profile.current.showModal()
    }

    const navigate = useNavigate()
    const modalClose = () => {
        profile.current.close()
    }

    const modalCloseLog = () => {
        signOutUser()
            .then(() => {
                navigate('/login')
            })
        profile.current.close()
    }

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
                    <div className="hidden md:flex space-x-8 text-lg AC_parent">
                        {Links_FOR_LARG}
                    </div>

                    {/* Right Side: Login Button */}
                    <div>
                        {!user ? (
                            <div className="flex gap-2">
                                <Link
                                    to="/login"
                                    className="bg-transparent border border-blue-500 px-5 py-2 rounded-lg hover:bg-blue-600 transition"
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/ragister"
                                    className="bg-blue-500 px-5 py-2 rounded-lg hover:bg-blue-600 transition"
                                >
                                    Register
                                </Link>
                            </div>
                        ) : (
                            <div onClick={handleProfile}>
                                <img
                                    src={user.photoURL}
                                    alt="Profile"
                                    className="w-10 h-10 rounded-full border-2 border-blue-400"
                                />


                            </div>
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
                <div className="flex flex-col mt-4 space-y-3 AC_parent_mobile">
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

            {/* Open the modal using document.getElementById('ID').showModal() method */}

            <dialog ref={profile} className="modal">
                <div className="modal-box">
                    <div className="flex justify-center w-full">
                        <img className="rounded-full w-[200px] h-[200px]" src={user?.photoURL} alt="" />
                    </div>
                    <p className="text-2xl uppercase italic text-center font-semibold mt-2">{user?.displayName}</p>
                    <p className="text-gray-300  italic text-center">{user?.email}</p>
                    <ul className="grid gap-4 mt-6">

                        
                        <li onClick={modalClose} className="cursor-pointer font-bold">
                            <NavLink to="/mymodels">My Models</NavLink>
                        </li>
                        <li onClick={modalClose} className="cursor-pointer font-bold">
                            <NavLink to="/modelspurchese">Models Purchese</NavLink>
                        </li>
                        <li onClick={modalCloseLog} className="cursor-pointer flex gap-2 text-red-500 font-bold">
                            <TbLogout size={25} /> Log Out
                        </li>

                    </ul>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </>
    );
};

export default Navbar;
