import { netflixLogo } from "../utils/logos";

const Header = () => {
    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10">
            <img className="w-44 mx-28" src={netflixLogo} alt="Logo" />
        </div>
    );
}

export default Header;