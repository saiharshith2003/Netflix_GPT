import { useState } from "react";
import { background } from "../utils/logos";
import Header from "./Header";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    return (
        <div>
            <Header />
            <div className="absolute inset-0">
                <img className="w-full h-full object-cover" src={background} alt="Background" />
            </div>
            <form className="absolute w-3/12 text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black p-8 rounded-xl shadow-lg bg-opacity-85" style={{ top: '55%' }}>
                <h1 className="text-3xl font-bold py-3  m-2">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input className="w-full px-4 py-4 m-2 border bg-gray-950 rounded-lg bg-opacity-35" type="text" placeholder="Enter full name" />}
                <input className="w-full px-4 py-4 m-2 border bg-gray-950 rounded-lg bg-opacity-35" type="text" placeholder="Email or phone number" />
                <input className="w-full px-4 py-4 m-2 border bg-gray-950 rounded-lg bg-opacity-35" type="password" placeholder="Enter password" />
                {!isSignInForm && <input className="w-full px-4 py-4 m-2 border bg-gray-950 rounded-lg bg-opacity-35" type="password" placeholder="Re-enter password" />}
                <button className="py-3 px-4 m-2 bg-red-500 rounded-lg w-full">Sign in</button>
                <p className="py-2 m-2">{isSignInForm ? "New to Netflix? " : "Already a User? "}<span className="text-base font-semibold cursor-pointer" onClick={toggleForm}>{isSignInForm ? "Sign up now" : "Sign in now"}</span></p>
            </form>
        </div>
    );
}

export default Login;
