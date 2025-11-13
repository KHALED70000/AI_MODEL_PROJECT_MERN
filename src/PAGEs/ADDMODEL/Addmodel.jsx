import { use } from "react";
import { AuthContext } from "../../CONTEXT/AuthContext";
import axios from "../../AXIOS_api/Axio";

const AddModel = () => {

    const { user } = use(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const framework = form.framework.value;
        const useCase = form.useCase.value;
        const dataset = form.dataset.value;
        const description = form.description.value;
        const image = form.image.value;
        const createdBy = user ? user.email : 'fake@fake.fake';
        const createdAt = new Date().toISOString().split("T")[0];
        const purchased = 0;

        // const NewAIMODEL = { name, framework, useCase, dataset, description, image, createdBy, createdAt, purchased };
        // console.log("New Model Added:", NewAIMODEL);

        axios.post("/AllModels", { name, framework, useCase, dataset, description, image, createdBy, createdAt, purchased })
            .then(res => {
                const Uploated = res.data;
                if(Uploated.insertedId){
                    alert('Successfully Uploated')
                    form.reset();
                }
                console.log("Added:", res.data)
            })
            .catch(err => console.error(err));

        // later: send data to MongoDB via API
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-gray-950 to-gray-900 px-4 mt-20">
            <div className="bg-gray-900 shadow-xl rounded-2xl p-8 w-full max-w-2xl border border-gray-800 max-[600px]:p-2">
                <h2 className="text-3xl font-semibold text-center text-blue-400 mb-8">
                    Add New AI Model
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
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
                        />
                    </div>

                    {/* Framework */}
                    <div>
                        <label htmlFor="framework" className="block text-gray-300 mb-2">
                            Framework Type
                        </label>
                        <input
                            type="text"
                            id="framework"
                            name="framework"

                            required
                            className="w-full px-4 py-3 bg-gray-800 text-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="TensorFlow, PyTorch..."
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
        </div>
    );
};

export default AddModel;
