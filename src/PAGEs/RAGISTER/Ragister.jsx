import { use, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../CONTEXT/AuthContext";


const Ragister = () => {

    //hide show toggle...
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    //hide show toggle end//
    const [passconferm, setPassconferm] = useState();
    const [logerror, setLogerror] = useState('')

    const { creatUser, signInWithGoogle, setUser, userNameUrl } = use(AuthContext);
    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault();

        const form = e.target;
        const photo = form.photoURL.value;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if(!passwordPattern.test(password)){
            setLogerror('Password must be contain at least one uppercase letter one lowercase letter and 6 characters long...!');
            return;
        }


        if (password !== confirm) {
            setPassconferm("Passwords do not match!");
            return;
        }

        creatUser(email, password)
            .then(async (result) => {
                const NEW_USER = result.user;
                await userNameUrl(name, photo);
                setUser(NEW_USER);
                form.reset();
                navigate('/');
            })
            .catch(() => {
                setLogerror('This email account is already used, Try another account....');
            });


        // Later: Firebase Auth or your backend API logic here
    };

    const googleSignIn = () => {
        signInWithGoogle()
        .then((result)=>{
            const NEW_USER = result.user;
            setUser(NEW_USER);
            navigate('/');
        })
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-950 to-gray-900 px-4 mt-20">
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

                    {/* photoURL */}
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-gray-300 font-medium mb-2"
                        >
                            Photo URL
                        </label>
                        <input
                            id="photoURL"
                            name="photoURL"
                            type="url"
                            required
                            className="w-full px-4 py-3 bg-gray-800 text-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Your Photo URL"
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
                            Set Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            required
                            className="w-full px-4 py-3 bg-gray-800 text-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                            placeholder="password..."
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
                            placeholder="Confirm password..."
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
                    {
                        logerror && <p className="text-red-600 font-semibold">{logerror}</p>
                    }

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition"
                    >
                        Register
                    </button>
                </form>
                <button onClick={googleSignIn} className="mt-6 w-full flex items-center justify-center gap-3 bg-gray-800 hover:bg-gray-700 text-gray-200 border border-gray-700 py-3 rounded-lg font-medium transition-all duration-200">
                    <FcGoogle size={25} /> Continue with Google
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
