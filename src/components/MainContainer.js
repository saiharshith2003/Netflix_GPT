//import { getRandomElementFromArray } from "../utils/logos";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const MainContainer = () => {

    const movies = useSelector((store) => store.movies.nowPlayingMovies)
    if (movies === null) return;
    const movieData = movies[7]

    const { id, original_title, overview } = movieData
    return (
        <div className="pt-[18%] bg-black lg:pt-0">
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movieId={id} />

        </div>
    )
}

export default MainContainer;