import { Link } from "react-router-dom";
import LetestProducts from "../../COMPONENTS/LetestProducts";
import { useEffect, useState } from "react";

const Home = () => {
    // 🔹 Demo data (later replace with API fetch)


    // const letestModelsPromise = fetch("http://localhost:3000/Letest-AllModels").then(res => res.json())
    const [latestModels, setLatestModels] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/Letest-AllModels")
      .then((res) => res.json())
      .then((data) => setLatestModels(data))
      .catch((err) => console.error("Error fetching models:", err));
  }, []);


    return (
        <div className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-200 my-16 max-[768px]:mt-[56px] ">
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
                    Most Recently Added
                </h2>

                <div>

                    <LetestProducts latestModels = {latestModels}></LetestProducts>
                    
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
