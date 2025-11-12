import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

const Ragister = () => {

    //hide show toggle...
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    //hide show toggle end//

    const [passconferm, setPassconferm] = useState()

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        if (password !== confirm) {
            setPassconferm("Passwords do not match!");
            return;
        }

        console.log({ name, email, password });
        form.reset()
        // Later: Firebase Auth or your backend API logic here
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-950 to-gray-900 px-4">
            <div className="bg-gray-900 shadow-xl rounded-2xl p-8 w-full max-w-md border border-gray-800">
                <h2 className="text-3xl font-semibold text-center text-blue-400 mb-6">
                    Create an Account
                </h2>

                <form onSubmit={handleRegister} className="space-y-6">
                    {/* Name */}
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-gray-300 font-medium mb-2"
                        >
                            Full Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            className="w-full px-4 py-3 bg-gray-800 text-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="John Doe"
                        />
                    </div>

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
                            className="absolute right-3 top-11.5 text-gray-400 hover:text-blue-400"
                        >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>

                    {/* Confirm Password */}
                    <div className="relative">
                        <label
                            htmlFor="confirm"
                            className="block text-gray-300 font-medium mb-2"
                        >
                            Confirm Password
                        </label>
                        <input
                            id="confirm"
                            name="confirm"
                            type={showConfirm ? "text" : "password"}
                            required
                            className="w-full px-4 py-3 bg-gray-800 text-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                            placeholder="••••••••"
                        />
                        <button
                            type="button"
                            onClick={() => setShowConfirm(!showConfirm)}
                            className="absolute right-3 top-11.5 text-gray-400 hover:text-blue-400"
                        >
                            {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>
                    {
                        passconferm ? <p className="text-red-600 font-semibold">{passconferm}</p> : ''
                    }

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition"
                    >
                        Register
                    </button>
                </form>
                <button className="mt-6 w-full flex items-center justify-center gap-3 bg-gray-800 hover:bg-gray-700 text-gray-200 border border-gray-700 py-3 rounded-lg font-medium transition-all duration-200">
                   <FcGoogle size={25}/> Continue with Google
                </button>

                <p className="text-gray-400 text-center mt-6">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="text-blue-400 hover:text-blue-500 font-medium"
                    >
                        Log in here
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Ragister;
