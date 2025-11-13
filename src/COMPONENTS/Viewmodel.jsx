import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Viewmodel = () => {
    const Model = useLoaderData();
    console.log(Model)
    return (
        <div className='mt-20'>
            <div className="min-h-screen bg-gray-950 text-gray-200 py-10 px-5 md:px-16">
                <div className="mb-6">
                    <Link to="/models" className="text-blue-400 hover:underline">
                        ← Back To Models
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 gap-8 bg-gray-900 p-6 rounded-2xl shadow-xl border border-gray-800">
                    {/* Left: Image */}
                    <div className="flex justify-center items-center bg-gray-800 rounded-xl overflow-hidden">
                        <img
                            src={Model.image}
                            alt={Model.name}
                            className="w-full h-72 object-contain"
                        />
                    </div>

                    {/* Right: Info */}
                    <div>
                        <h1 className="text-2xl font-bold text-white mb-2">{Model.name}</h1>
                        <p className="text-blue-400 mb-1">Framework: {Model.framework}</p>
                        <p className="text-gray-400 mb-1">Use Case: {Model.useCase}</p>
                        <p className="text-gray-400 mb-1">Dataset: {Model.dataset}</p>

                        <div className="mt-4">
                            <p className="text-gray-400 leading-relaxed italic">{Model.description}</p>
                        </div>

                        <div className="mt-6 space-y-1 text-sm">
                            <p>
                                <span className="font-semibold text-gray-300">Created By:</span>{" "}
                                {Model.createdBy}
                            </p>
                            <p>
                                <span className="font-semibold text-gray-300">Created At:</span>{" "}
                                {new Date(Model.createdAt).toLocaleString()}
                            </p>
                            <p>
                                <span className="font-semibold text-gray-300">Purchased:</span>{" "}
                                {Model.purchased ?? 0} times
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Viewmodel;