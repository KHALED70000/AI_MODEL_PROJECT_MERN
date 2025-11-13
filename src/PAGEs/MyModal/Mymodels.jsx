import React, { use, useEffect, useState } from 'react';
import axiosInstance from '../../AXIOS_api/Axio';
import { AuthContext } from '../../CONTEXT/AuthContext';
import { NavLink } from 'react-router-dom';

const Mymodels = () => {

    const { user } = use(AuthContext);
    ;

    const [mymodels, setMymodels] = useState([]);
    useEffect(() => {
        if (!user?.email) return
        axiosInstance.get(`/Mymodels?email=${user?.email}`)
            // .then((res) => res.json())
            .then((res) => setMymodels(res.data))
            .catch((err) => console.error("Error fetching models:", err));
    }, [user]);

    console.log(mymodels)
    return (
        <div className='mt-30 container mx-auto'>
            <h1 className="text-3xl font-semibold text-center text-blue-400 mb-16">My AI Models</h1>
            <h1 className="text-2xl font-semibold text-blue-400 mb-8">Total AI Models: "<span className='text-white'>{mymodels.length}</span>"</h1>
            <div className='grid grid-cols-3 gap-6 max-[800px]:grid-cols-2 max-[600px]:grid-cols-1 container mx-auto'>
                {
                    mymodels.map(allmodel => (
                        <div key={allmodel._id} className='from-gray-900 to-gray-950 bg-gradient-to-t p-4 rounded-2xl shadow-[0_0_25px_rgba(0,170,255,0.2)] hover:shadow-[0_0_35px_rgba(0,170,255,0.4)] transition-all duration-300'>
                            <div>
                                <img className='rounded-2xl h-[300px] w-full' src={allmodel.image} alt={allmodel.name} />
                            </div>

                            <div className='mt-4 grid gap-1'>
                                <p className='text-[20px] font-semibold'>{allmodel.name}</p>
                                <p> <span className='font-semibold'>Framework:</span> <button className='bg-gray-950 px-2 py-1 rounded-full italic text-[12px] text-blue-400'>{allmodel.framework}</button></p>

                                <p className='text-gray-400 italic h-[50px]'>
                                    {allmodel.description.split(" ").length > 10
                                        ? allmodel.description.split(" ").slice(0, 10).join(" ") + "......"
                                        : allmodel.description}
                                </p>

                                <div className='flex justify-between gap-4'>
                                    <NavLink to={`/viewmodel/${allmodel._id}`} className='w-full mt-4 text-center bg-neon-blue text-white font-semibold py-3 rounded-xl shadow-[0_0_10px_rgba(0,200,255,0.6)] hover:shadow-[0_0_15px_rgba(0,200,255,0.9)] transition-all duration-300 hover:scale-102'>View Details</NavLink>
                                    <NavLink to={`/viewmodel/${allmodel._id}`} className='w-full mt-4 text-center bg-neon-blue text-white font-semibold py-3 rounded-xl shadow-[0_0_10px_rgba(0,200,255,0.6)] hover:shadow-[0_0_15px_rgba(0,200,255,0.9)] transition-all duration-300 hover:scale-102'>View Details</NavLink>
                                </div>
                                <NavLink to={`/viewmodel/${allmodel._id}`} className='mt-4 text-center bg-neon-blue text-white font-semibold py-3 rounded-xl shadow-[0_0_10px_rgba(0,200,255,0.6)] hover:shadow-[0_0_15px_rgba(0,200,255,0.9)] transition-all duration-300 hover:scale-102'>View Details</NavLink>
                            </div>

                        </div>
                    ))
                }

            </div>
        </div>
    );
};

export default Mymodels;