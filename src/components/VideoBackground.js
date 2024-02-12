import { useSelector } from "react-redux";
import useMovieTrailer from "../utils/useMovieTrailer"


const VideoBackground = ({ movieId }) => {
    useMovieTrailer(movieId);
    const trailer = useSelector((store) => store.movies?.trailerInfo)
    console.log("Hi", trailer)
    return (
        <div className="w-screen">
            <iframe
                className="w-screen aspect-video object-cover"
                src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=1&start=13&controls=0&iv_load_policy=3`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />


        </div>
    )
}

export default VideoBackground