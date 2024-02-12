import { useSelector } from "react-redux";
import useMovieTrailer from "../utils/useMovieTrailer"


const VideoBackground = ({ movieId }) => {
    useMovieTrailer(movieId);
    const trailer = useSelector((store) => store.movies?.trailerInfo)
    console.log("Hi", trailer)
    return (
        <div className="w-screen ">
            <iframe
                className="w-screen absolute mt-[-6%] aspect-video "

                src={
                    "https://www.youtube.com/embed/" +
                    trailer?.key +
                    "?&autoplay=1&mute=1&start=14&rel=0&start=13"
                }
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>


        </div>
    )
}

export default VideoBackground