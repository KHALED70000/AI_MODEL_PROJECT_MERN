import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = ({ Aimodel }) => {
    const { _id, image, name, framework, description } = Aimodel;
    return (
        <div className='from-gray-900 to-gray-950 bg-gradient-to-t p-4 rounded-2xl shadow-blue-glow'>
            <div>
                <img className='rounded-2xl' src={image} alt={name} />
            </div>

            <div className='mt-4 grid gap-1'>
                <p className='text-[20px] font-semibold'>{name}</p>
                <p> <span className='font-semibold'>Framework:</span> <button className='bg-gray-950 px-2 py-1 rounded-full italic text-[12px] text-blue-400'>{framework}</button></p>

                <p className='text-gray-400 italic'>
                    {description.split(" ").length > 10
                        ? description.split(" ").slice(0, 10).join(" ") + "......"
                        : description}
                </p>

                <NavLink to={`/viewmodel/${_id}`} className='btn bg-blue-500 mt-2'>View Model</NavLink>
            </div>

        </div>
    );
};

export default Card;