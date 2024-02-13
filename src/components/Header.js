import { netflixLogo } from "../utils/logos";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGpt } from "../utils/gptSlice";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);

    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Handle sign out success
        }).catch((error) => {
            // Handle sign out error
        });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
                navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate("/");
            }
        });

        return () => unsubscribe();
    }, [dispatch, navigate]);

    const handleShowGpt = () => {
        dispatch(toggleGpt());
    }



    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <div>
                <img className="w-44 mx-18 " src={netflixLogo} alt="Logo" />
            </div>
            {user && user.uid && (
                <div className="py-2 px-4 flex">
                    <div>
                        <button className="bg-purple-800 px-4 py-2 bg-opacity-75 text-base rounded-lg text-white hover:bg-opacity-50" onClick={handleShowGpt}>
                            GPTSearch
                        </button>
                    </div>
                    <div className="px-2">
                        <button className="px-4 py-2 bg-red-600 rounded-lg text-base bg-opacity-75  text-white hover:bg-opacity-50" onClick={handleSignOut}>
                            Sign out
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Header;
