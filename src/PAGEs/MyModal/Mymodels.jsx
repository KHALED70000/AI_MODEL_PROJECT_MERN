import React, { use, useEffect, useRef, useState } from 'react';
import axiosInstance from '../../AXIOS_api/Axio';
import { AuthContext } from '../../CONTEXT/AuthContext';
import { NavLink } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBinLine } from 'react-icons/ri';
import Swal from 'sweetalert2';
import { ToastContainer } from 'react-toastify';

const Mymodels = () => {

    const { user } = use(AuthContext);

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

                        const deltedModel = res.data;
                        if (deltedModel.deletedCount > 0) {
                            const remainingModels = mymodels.filter(model => model._id !== _id);
                            setMymodels(remainingModels);
                            Swal.fire({
                                icon: "success",
                                title: "✅ The Model has been Deleted successfully!",
                                background: "#0a0a0f", // deep cyber black
                                color: "#ccf7ff", // soft neon text
                                iconColor: "#00ffff", // neon cyan icon glow
                                showConfirmButton: false,
                                timer: 1500,
                                customClass: {
                                    popup: "rounded-2xl shadow-[0_0_30px_rgba(0,200,255,0.3)] border border-[#00bfff33]",
                                    title: "text-[#00ffff] font-semibold tracking-wide text-lg drop-shadow-[0_0_5px_#00ffff]",
                                },
                                showClass: {
                                    popup: "animate__animated animate__fadeInUp animate__faster",
                                },
                                hideClass: {
                                    popup: "animate__animated animate__fadeOutDown animate__faster",
                                },
                            });
                        }
                    })
                    .catch()
            }
        })

    }

    const modelReff = useRef();
    const [editmodalinfo, setEditmodalinfo] = useState();

    const handleEditModel = (_id) => {
        // Editmodels

        axiosInstance.get(`/Editmodels/${_id}`)
            .then((res) => {

                setEditmodalinfo(res.data)
                modelReff.current.showModal()
            }).catch();

    }

    const handleEditForm = (e, _id) => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const framework = form.framework.value;
        const useCase = form.useCase.value;
        const dataset = form.dataset.value;
        const description = form.description.value;
        const image = form.image.value;

        axiosInstance.patch(`/EditedModel/${_id}`, { name, framework, useCase, dataset, description, image })
            .then(res => {
                console.log('after update', res.data);
                if (document.activeElement) {
                    document.activeElement.blur();
                }
                if (res.data.modifiedCount > 0) {
                    const updatedModels = mymodels.map(model =>
                        model._id === _id
                            ? { ...model, name, framework, useCase, dataset, description, image }
                            : model
                    );
                    setMymodels(updatedModels);
                    Swal.fire({
                        icon: "success",
                        title: "✅ The Model has been Updated successfully!",
                        background: "#0a0a0f",
                        color: "#ccf7ff",
                        iconColor: "#00ffff",
                        showConfirmButton: false,
                        timer: 1500,
                        customClass: {
                            popup: "rounded-2xl shadow-[0_0_30px_rgba(0,200,255,0.3)] border border-[#00bfff33]",
                            title: "text-[#00ffff] font-semibold tracking-wide text-lg drop-shadow-[0_0_5px_#00ffff]",
                        },
                        showClass: {
                            popup: "animate__animated animate__fadeInUp animate__faster",
                        },
                        hideClass: {
                            popup: "animate__animated animate__fadeOutDown animate__faster",
                        },
                    });


                    setTimeout(() => {
                        modelReff.current.close();
                        if (document.activeElement) {
                            document.activeElement.blur();
                        }
                    }, 50);
                }

            }).catch(err => console.log(err))


    }

    return (
        <div className='mt-30 container mx-auto mb-10'>
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

                                <p className="text-gray-400 italic h-[50px]">
                                    {allmodel?.description
                                        ? allmodel.description.split(" ").length > 10
                                            ? allmodel.description.split(" ").slice(0, 10).join(" ") + "..."
                                            : allmodel.description
                                        : "No description available"}
                                </p>


                                <div className='flex justify-between gap-4'>
                                    <button onClick={() => handleEditModel(allmodel._id)} className='flex items-center justify-center gap-2 w-full mt-4 text-center bg-neon-blue text-white font-semibold py-3 rounded-xl shadow-[0_0_10px_rgba(0,200,255,0.6)] hover:shadow-[0_0_15px_rgba(0,200,255,0.9)] transition-all duration-300 hover:scale-102'>Edit <span className='text-blue-500'><FaEdit size={20} /></span></button>
                                    <button onClick={() => handleDeleteModel(allmodel._id)} className='flex items-center justify-center gap-2 w-full mt-4 text-center bg-neon-blue text-white font-semibold py-3 rounded-xl shadow-[0_0_10px_rgba(0,200,255,0.6)] hover:shadow-[0_0_15px_rgba(0,200,255,0.9)] transition-all duration-300 hover:scale-102'>Delete <span className='text-red-600'><RiDeleteBinLine size={20} /></span> </button>
                                </div>
                                <NavLink to={`/viewmodel/${allmodel._id}`} className='mt-4 text-center bg-neon-blue text-white font-semibold py-3 rounded-xl shadow-[0_0_10px_rgba(0,200,255,0.6)] hover:shadow-[0_0_15px_rgba(0,200,255,0.9)] transition-all duration-300 hover:scale-102'>View Details</NavLink>
                            </div>



                        </div>
                    ))
                }

            </div>
            {/* modal */}
            <dialog ref={modelReff} id="my_modal_2" className="modal">
                <div className="modal-box">

                    {/* form */}
                    <div className="bg-gray-900 shadow-xl rounded-2xl p-8 w-full max-w-2xl border border-gray-800 max-[600px]:p-2">
                        <h2 className="text-3xl font-semibold text-center text-blue-400 mb-8">
                            Add New AI Model
                        </h2>
                        <ToastContainer position="top-center" />

                        <form onSubmit={() => handleEditForm(event, editmodalinfo._id)} className="space-y-6">
                            {/* Model Name */}
                            <div>
                                <label htmlFor="name" className="block text-gray-300 mb-2">
                                    Ai Model Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"

                                    required
                                    className="w-full px-4 py-3 bg-gray-800 text-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="BERT"
                                    defaultValue={editmodalinfo?.name}
                                />
                            </div>

                            {/* Framework */}
                            <div>
                                <label htmlFor="framework" editmodalinfo="block text-gray-300 mb-2">
                                    Framework Type
                                </label>
                                <input
                                    type="text"
                                    id="framework"
                                    name="framework"

                                    required
                                    className="w-full px-4 py-3 bg-gray-800 text-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="TensorFlow, PyTorch..."
                                    defaultValue={editmodalinfo?.framework}
                                />
                            </div>

                            {/* Use Case */}
                            <div>
                                <label htmlFor="useCase" className="block text-gray-300 mb-2">
                                    Use Case
                                </label>
                                <input
                                    type="text"
                                    id="useCase"
                                    name="useCase"

                                    required
                                    className="w-full px-4 py-3 bg-gray-800 text-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="NLP, Image Recognition..."
                                    defaultValue={editmodalinfo?.useCase}
                                />
                            </div>

                            {/* Dataset */}
                            <div>
                                <label htmlFor="dataset" className="block text-gray-300 mb-2">
                                    Dataset
                                </label>
                                <input
                                    type="text"
                                    id="dataset"
                                    name="dataset"

                                    required
                                    className="w-full px-4 py-3 bg-gray-800 text-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Wikipedia, ImageNet..."
                                    defaultValue={editmodalinfo?.dataset}
                                />
                            </div>



                            {/* Image URL */}
                            <div>
                                <label htmlFor="image" className="block text-gray-300 mb-2">
                                    Image URL
                                </label>
                                <input
                                    type="url"
                                    id="image"
                                    name="image"

                                    required
                                    className="w-full px-4 py-3 bg-gray-800 text-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="https://ibb.co/sample-image"
                                    defaultValue={editmodalinfo?.image}
                                />
                            </div>

                            {/* Description */}
                            <div>
                                <label htmlFor="description" className="block text-gray-300 mb-2">
                                    Description
                                </label>
                                <textarea
                                    id="description"
                                    name="description"

                                    required
                                    rows="3"
                                    className="w-full px-4 py-3 bg-gray-800 text-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="A transformer-based model for NLP tasks like text classification..."
                                    defaultValue={editmodalinfo?.description}
                                ></textarea>
                            </div>


                            {/* Submit */}
                            <button
                                type="submit"
                                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition"
                            >
                                Add Model
                            </button>
                        </form>

                    </div>
                    {/* form */}
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
            {/* modal */}

        </div>
    );
};

export default Mymodels;