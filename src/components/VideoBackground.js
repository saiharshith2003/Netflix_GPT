import { useSelector } from "react-redux";
import useMovieTrailer from "../utils/useMovieTrailer"


const VideoBackground = ({ movieId }) => {
    useMovieTrailer(movieId);
    const trailer = useSelector((store) => store.movies?.trailerInfo)

    return (
        <div className="w-screen overflow-x-hidden ">
            <iframe
                className="w-[99%] aspect-video "

                src={
                    "https://www.youtube.com/embed/" +
                    trailer?.key +
                    "?rel=0&autoplay=1&mute=1&start=14&end=140&controls=0&loop=1&iv_load_policy=3"
                }
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>


        </div>
    )
}

export default VideoBackground