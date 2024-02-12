import { getRandomElementFromArray } from "../utils/logos";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const MainContainer = () => {

    const movies = useSelector((store) => store.movies.nowPlayingMovies)
    if (movies === null) return;
    const movieData = movies[3]

    const { id, original_title, overview } = movieData
    return (
        <div className="overflow-x-hidden">
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movieId={id} />
        </div>
    )
}

export default MainContainer;