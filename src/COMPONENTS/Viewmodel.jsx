import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Viewmodel = () => {
    const Model = useLoaderData();
    console.log(Model);

    return (
        <div className="mt-20 bg-gray-950 min-h-screen text-gray-200 py-10 px-5 md:px-16">
            {/* Back Button */}
            <div className="mb-8">
                <Link
                    to="/allmodels"
                    className="text-neon-blue hover:underline font-medium tracking-wide"
                >
                    ← Back To Models
                </Link>
            </div>

            {/* Main Card */}
            <div className="grid lg:grid-cols-2 gap-10 bg-gray-900 p-8 rounded-3xl shadow-[0_0_25px_rgba(0,170,255,0.2)] border border-gray-800 hover:shadow-[0_0_35px_rgba(0,170,255,0.4)] transition-all duration-300">

                {/* LEFT: Image + Info */}
                <div className="flex flex-col items-center bg-gradient-to-t from-gray-950 to-gray-900 rounded-2xl p-4 shadow-inner">
                    <img
                        src={Model.image}
                        alt={Model.name}
                        className="w-full h-72 object-cover rounded-2xl border border-gray-700 shadow-[0_0_20px_rgba(0,200,255,0.4)]"
                    />

                    {/* Purchase + Date */}
                    <div className="flex justify-between items-center w-full mt-4 px-2">
                        <p className="text-sm text-gray-400">
                            🛒 <span className="text-neon-blue font-semibold">{Model.purchased ?? 0}</span> purchases
                        </p>
                        <p className="text-sm text-gray-400">
                            📅 {new Date(Model.createdAt).toLocaleDateString()}
                        </p>
                    </div>

                    {/* Description */}
                    <div className="mt-5 bg-gray-950/60 p-4 rounded-xl border border-gray-800 backdrop-blur-sm">
                        <h2 className="text-lg font-semibold text-neon-blue mb-2">Description</h2>
                        <p className="text-gray-300 leading-relaxed text-sm italic">
                            {Model.description}
                        </p>
                    </div>
                </div>

                {/* RIGHT: Details */}
                <div className="flex flex-col justify-center space-y-6 px-2">
                    <div>
                        <h1 className="text-3xl font-extrabold text-neon-blue drop-shadow-[0_0_8px_rgba(0,200,255,0.6)] mb-3">
                            {Model.name}
                        </h1>
                        <p className="text-gray-300">
                            <span className="font-semibold text-gray-400">Framework:</span>{" "}
                            <span className="bg-gray-800 text-neon-blue px-3 py-1 rounded-full text-sm font-medium">
                                {Model.framework}
                            </span>
                        </p>
                        <p className="mt-2 text-gray-400">
                            <span className="font-semibold text-gray-400">Use Case:</span>{" "}
                            {Model.useCase}
                        </p>
                        <p className="mt-1 text-gray-400">
                            <span className="font-semibold text-gray-400">Dataset:</span>{" "}
                            {Model.dataset}
                        </p>
                    </div>

                    {/* Subscribe Button */}
                    <button
                        className="bg-neon-blue text-white font-semibold py-3 rounded-xl shadow-[0_0_15px_rgba(0,200,255,0.6)] hover:shadow-[0_0_25px_rgba(0,200,255,0.9)] transition-all duration-300 hover:scale-105"
                    >
                        🔔 Purchese Model
                    </button>

                    {/* Creator Info */}
                    <div className="text-sm text-gray-400 mt-2 border-t border-gray-700 pt-3">
                        <p><span className="text-gray-500 font-semibold">Created By:</span> {Model.createdBy}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Viewmodel;
