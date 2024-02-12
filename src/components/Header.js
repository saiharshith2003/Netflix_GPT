import { netflixLogo } from "../utils/logos";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
const Header = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const user = useSelector((store) => store.user)
    const handleSignOut = () => {
        signOut(auth).then(() => {

        }).catch((error) => {
            // An error happened.
        });


    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName }))
                navigate("/browse")
            } else {
                dispatch(removeUser())
                navigate("/")
            }
        });
        return () => unsubscribe();
    }, [])
    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <img className="w-44 mx-28" src={netflixLogo} alt="Logo" />
            {user && user.uid && (
                <div className="py-5 px-8">
                    <button className="px-4 py-2 bg-red-600 rounded-lg" onClick={handleSignOut}>
                        Sign out
                    </button>
                </div>
            )}
        </div>

    );
}

export default Header;