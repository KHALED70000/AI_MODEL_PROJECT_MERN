import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react"; // 👁️ React icons (lucide-react)
import { FcGoogle } from "react-icons/fc";

// যদি lucide-react install না করা থাকে:
// npm install lucide-react

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log({ email, password });
        // later: add Firebase / JWT auth logic here
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-950 to-gray-900 px-4">
            <div className="bg-gray-900 shadow-xl rounded-2xl p-8 w-full max-w-md border border-gray-800">
                <h2 className="text-3xl font-semibold text-center text-blue-400 mb-6">
                    Login to Your Account
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Email */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-gray-300 font-medium mb-2"
                        >
                            Email Address
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            className="w-full px-4 py-3 bg-gray-800 text-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="you@example.com"
                        />
                    </div>

                    {/* Password */}
                    <div className="relative">
                        <label
                            htmlFor="password"
                            className="block text-gray-300 font-medium mb-2"
                        >
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            required
                            className="w-full px-4 py-3 bg-gray-800 text-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                            placeholder="••••••••"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-11 text-gray-400 hover:text-blue-400"
                        >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition"
                    >
                        Log In
                    </button>
                </form>
                <button className="mt-6 w-full flex items-center justify-center gap-3 bg-gray-800 hover:bg-gray-700 text-gray-200 border border-gray-700 py-3 rounded-lg font-medium transition-all duration-200">
                    <FcGoogle size={25} /> Continue with Google
                </button>

                <p className="text-gray-400 text-center mt-6">
                    Don't have an account?{" "}
                    <Link
                        to="/ragister"
                        className="text-blue-400 hover:text-blue-500 font-medium"
                    >
                        Register here
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
