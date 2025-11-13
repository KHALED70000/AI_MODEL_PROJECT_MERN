import React, { use, useEffect, useState } from 'react';
import axiosInstance from '../../AXIOS_api/Axio';
import { AuthContext } from '../../CONTEXT/AuthContext';
import { NavLink } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBinLine } from 'react-icons/ri';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

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

    const handleDeleteModel = (_id) => {
        Swal.fire({
             title: "⚠️ Delete This Model?",
    text: "You won’t be able to recover this model once deleted!",
    icon: "warning",
    background: "#0a0a0f",
    color: "#e0f7ff",
    iconColor: "#00ffff",
    showCancelButton: true,
    confirmButtonColor: "#00bfff",
    cancelButtonColor: "#ff3366",
    confirmButtonText: "Yes, Delete It!",
    cancelButtonText: "Cancel",
    customClass: {
      popup: "rounded-3xl shadow-[0_0_25px_rgba(0,200,255,0.3)] border border-[#00bfff33]",
      title: "text-neon-blue text-2xl font-semibold tracking-wide",
      htmlContainer: "text-gray-300 text-sm font-light",
      confirmButton:
        "bg-[#00bfff] text-black font-semibold px-6 py-2 rounded-lg hover:shadow-[0_0_15px_#00ffff] transition-all duration-300 cursor-pointer",
      cancelButton:
        "bg-[#1e1e2f] text-gray-300 font-semibold px-6 py-2 rounded-lg hover:bg-[#2a2a3d] hover:text-white transition-all duration-300 ml-4 cursor-pointer",
    },
    buttonsStyling: false,
    showClass: {
      popup: "animate__animated animate__fadeInDown animate__faster",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp animate__faster",
    },
        }).then((result) => {
            if (result.isConfirmed) {
                axiosInstance.delete(`/Mymodels/${_id}`)
                    .then(res => {
                        console.log(res.data)
                        const deltedModel = res.data;
                        if (deltedModel.deletedCount > 0) {
                            const remainingModels = mymodels.filter(model => model._id !== _id);
                            setMymodels(remainingModels);
                            Swal.fire({
                                icon: "success",
                                title: "The bid has been rejected successfully",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
                    .catch()
            }
        })

    }

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
                                    <button className='flex items-center justify-center gap-2 w-full mt-4 text-center bg-neon-blue text-white font-semibold py-3 rounded-xl shadow-[0_0_10px_rgba(0,200,255,0.6)] hover:shadow-[0_0_15px_rgba(0,200,255,0.9)] transition-all duration-300 hover:scale-102'>Edit <span className='text-blue-500'><FaEdit size={20} /></span></button>
                                    <button onClick={() => handleDeleteModel(allmodel._id)} className='flex items-center justify-center gap-2 w-full mt-4 text-center bg-neon-blue text-white font-semibold py-3 rounded-xl shadow-[0_0_10px_rgba(0,200,255,0.6)] hover:shadow-[0_0_15px_rgba(0,200,255,0.9)] transition-all duration-300 hover:scale-102'>Delete <span className='text-red-600'><RiDeleteBinLine size={20} /></span> </button>
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