import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 border-t border-gray-800">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Left side: Logo / Project Name */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-blue-400">AI Model Hub</h2>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} AI Model Hub — All rights reserved.
          </p>
        </div>

        {/* Middle: Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <Link to="/" className="hover:text-blue-400 transition">
            Home
          </Link>
          <Link to="/add-model" className="hover:text-blue-400 transition">
            Add Model
          </Link>
          <Link to="/all-models" className="hover:text-blue-400 transition">
            All Models
          </Link>
          <Link to="/model-purchase" className="hover:text-blue-400 transition">
            Model Purchase
          </Link>
          <Link to="/my-models" className="hover:text-blue-400 transition">
            My Models
          </Link>
        </div>

        {/* Right side: GitHub link */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/your-username/ai-model-hub"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-400 transition"
          >
            <FaGithub className="text-2xl" />
            <span>GitHub Repo</span>
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
