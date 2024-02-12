import { IMG_CDN } from "../utils/logos";

const MovieCard = ({ poster_path }) => {
    if (!poster_path) return null;
    return (
        <div className="w-36 md:w-48 pr-4">
            <img alt="Movie Card" src={IMG_CDN + poster_path} />
        </div>
    );
};
export default MovieCard;