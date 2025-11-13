import React, { useContext, useEffect } from "react";
import { AuthContext } from "../CONTEXT/AuthContext";
import { useNavigate } from "react-router-dom";

const Privetrout = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate("/login");
        }
    }, [user, loading, navigate]);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen text-blue-400 text-xl">
                <span className="loading loading-spinner text-info h-[100px] w-[100px]"></span>
            </div>
        );
    }

    return user ? children : null;
};

export default Privetrout;
