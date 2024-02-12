import { getRandomElementFromArray } from "../utils/logos";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const MainContainer = () => {

    const movies = useSelector((store) => store.movies.nowPlayingMovies)
    if (movies === null) return;
    const movieData = movies[7]

    const { id, original_title, overview } = movieData
    return (
        <div >

            <VideoBackground movieId={id} />
            <VideoTitle title={original_title} overview={overview} />
        </div>
    )
}

export default MainContainer;