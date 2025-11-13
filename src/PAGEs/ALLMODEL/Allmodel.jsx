import React, { useEffect, useState } from 'react';
import axiosInstance from '../../AXIOS_api/Axio';
import { NavLink } from 'react-router-dom';

const Allmodel = () => {

    const [allmodels, setAllmodels] = useState([]);
    useEffect(() => {
        axiosInstance.get("/AllModels")
            // .then((res) => res.json())
            .then((data) => setAllmodels(data.data))
            .catch((err) => console.error("Error fetching models:", err));
    }, []);

    console.log(allmodels)

    return (
        <div className='mt-20 max-[768px]:mt-[56px] '>
            <div className='grid grid-cols-3 gap-4 max-[800px]:grid-cols-2 max-[600px]:grid-cols-1 container mx-auto'>
                {
                    allmodels.map(allmodel => (
                        <div className='from-gray-900 to-gray-950 bg-gradient-to-t p-4 rounded-2xl shadow-blue-glow'>
                            <div>
                                <img className='rounded-2xl h-[300px] w-full' src={allmodel.image} alt={allmodel.name} />
                            </div>

                            <div className='mt-4 grid gap-1'>
                                <p className='text-[20px] font-semibold'>{ allmodel.name }</p>
                                <p> <span className='font-semibold'>Framework:</span> <button className='bg-gray-950 px-2 py-1 rounded-full italic text-[12px] text-blue-400'>{allmodel.framework}</button></p>

                                <p className='text-gray-400 italic h-[50px]'>
                                    {allmodel.description.split(" ").length > 10
                                        ? allmodel.description.split(" ").slice(0, 10).join(" ") + "......"
                                        : allmodel.description}
                                </p>

                                <NavLink to={`/viewmodel/${allmodel._id}`} className='btn bg-blue-500 mt-2'>View Details</NavLink>
                            </div>

                        </div>
                    ))
                }

            </div>
        </div>
    );
};

export default Allmodel;