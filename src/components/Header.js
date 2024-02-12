import { netflixLogo } from "../utils/logos";
import { useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Header = () => {
    const navigate = useNavigate();
    const user = useSelector((store) => store.user)
    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate("/")
        }).catch((error) => {
            // An error happened.
        });
    }
    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <img className="w-44 mx-28" src={netflixLogo} alt="Logo" />
            {user && (<div className="py-5 px-8">

                <button className="px-4 py-2 bg-red-600 rounded-lg" onClick={handleSignOut}>Sign out</button>
            </div>)}
        </div>

    );
}

export default Header;