import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = ({ Aimodel }) => {
    const { _id, image, name, framework, description } = Aimodel;
    return (
        <div className='from-gray-900 to-gray-950 bg-gradient-to-t p-4 rounded-2xl shadow-[0_0_25px_rgba(0,170,255,0.2)] hover:shadow-[0_0_35px_rgba(0,170,255,0.4)] transition-all duration-300'>
            <div>
                <img className='rounded-2xl h-[300px] w-full' src={image} alt={name} />
            </div>

            <div className='mt-4 grid gap-1'>
                <p className='text-[20px] font-semibold'>{name ? name : 'No name given'}</p>
                <p> <span className='font-semibold'>Framework:</span> <button className='bg-gray-950 px-2 py-1 rounded-full italic text-[12px] text-blue-400'>{framework}</button></p>

                <p className="text-gray-400 italic h-[50px]">
                    {description
                        ? description.split(" ").length > 10
                            ? description.split(" ").slice(0, 10).join(" ") + "..."
                            : description
                        : "No description available"}
                </p>


                <NavLink to={`/viewmodel/${_id}`} className="mt-4 text-center bg-neon-blue text-white font-semibold py-3 rounded-xl shadow-[0_0_10px_rgba(0,200,255,0.6)] hover:shadow-[0_0_15px_rgba(0,200,255,0.9)] transition-all duration-300 hover:scale-102">View Model</NavLink>
            </div>

        </div>
    );
};

export default Card;