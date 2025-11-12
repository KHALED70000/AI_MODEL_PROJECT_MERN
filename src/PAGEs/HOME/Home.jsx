import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    // 🔹 Demo data (later replace with API fetch)
    const [models, setModels] = useState([]);

    useEffect(() => {
        const demoData = [
            {
                name: "BERT",
                framework: "TensorFlow",
                useCase: "NLP",
                dataset: "Wikipedia",
                description:
                    "A transformer-based model for NLP tasks like text classification.",
                image: "https://i.ibb.co/sample-image-bert-diagram.jpg",
            },
            {
                name: "ResNet-50",
                framework: "PyTorch",
                useCase: "Image Recognition",
                dataset: "ImageNet",
                description:
                    "A convolutional neural network for image classification and feature extraction.",
                image: "https://i.ibb.co/sample-image-resnet.jpg",
            },
            {
                name: "GPT-3",
                framework: "TensorFlow",
                useCase: "Text Generation",
                dataset: "Common Crawl",
                description:
                    "An autoregressive transformer model for natural language generation.",
                image: "https://i.ibb.co/sample-image-gpt3.jpg",
            },
            {
                name: "YOLOv5",
                framework: "PyTorch",
                useCase: "Object Detection",
                dataset: "COCO",
                description:
                    "Real-time object detection model optimized for speed and accuracy.",
                image: "https://i.ibb.co/sample-image-yolo.jpg",
            },
            {
                name: "Stable Diffusion",
                framework: "PyTorch",
                useCase: "Image Generation",
                dataset: "LAION-5B",
                description:
                    "A text-to-image model that generates high-quality visuals from prompts.",
                image: "https://i.ibb.co/sample-image-sd.jpg",
            },
            {
                name: "Whisper",
                framework: "OpenAI",
                useCase: "Speech Recognition",
                dataset: "Multilingual Audio",
                description:
                    "A general-purpose speech recognition model that transcribes multiple languages.",
                image: "https://i.ibb.co/sample-image-whisper.jpg",
            },
        ];
        setModels(demoData);
    }, []);

    return (
        <div className="bg-gray-950 text-gray-200 my-20 max-[768px]:mt-[56px] ">
            {/* 🌟 Hero Section */}
            <section className="text-center py-20 bg-gradient-to-b from-gray-900 to-gray-950">
                <h1 className="text-4xl md:text-6xl font-bold text-blue-400 mb-4">
                    Welcome to AI Model Hub
                </h1>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                    Manage, explore, and showcase your AI models effortlessly — built for
                    developers, researchers, and innovators.
                </p>
            </section>

            {/* 🧩 Dynamic Section: Featured AI Models */}
            <section className="py-16 container mx-auto px-4">
                <h2 className="text-3xl font-semibold text-blue-400 mb-10 text-center">
                    Featured AI Models
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {models.map((model, index) => (
                        <div
                            key={index}
                            className="bg-gray-900 rounded-2xl shadow-lg hover:shadow-blue-500/20 overflow-hidden transition-all"
                        >
                            <img
                                src={model.image}
                                alt={model.name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-5">
                                <h3 className="text-xl font-bold text-blue-400">
                                    {model.name}
                                </h3>
                                <p className="text-sm text-gray-400 mt-1">
                                    Framework: <span className="text-gray-300">{model.framework}</span>
                                </p>
                                <p className="text-gray-300 mt-3 text-sm">{model.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 🧠 Static Section: About AI Models */}
            <section className="py-16 bg-gray-900 text-center px-6">
                <h2 className="text-3xl font-semibold text-blue-400 mb-6">
                    About AI Models
                </h2>
                <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
                    AI models are the backbone of modern machine learning systems. They
                    learn patterns from vast datasets to make intelligent predictions or
                    generate creative outputs. From chatbots and translators to image
                    generators and recommendation engines, AI models are transforming how
                    humans and machines interact.
                </p>
            </section>

            {/* 🚀 Static Section: Get Started */}
            <section className="py-20 text-center bg-gradient-to-t from-gray-900 to-gray-950">
                <h2 className="text-3xl font-semibold text-blue-400 mb-4">
                    Get Started Today
                </h2>
                <p className="text-gray-400 mb-8">
                    Join now to create, manage, and explore cutting-edge AI models.
                </p>
                <Link
                    to="/login"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition"
                >
                    Register / Log In
                </Link>
            </section>
        </div>
    );
};

export default Home;
