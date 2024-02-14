import { useSelector } from "react-redux";
import useMovieTrailer from "../utils/useMovieTrailer"


const VideoBackground = ({ movieId }) => {
    useMovieTrailer(movieId);
    const trailer = useSelector((store) => store.movies?.trailerInfo)

    return (
        <div className="w-screen overflow-x-hidden lg:mt-[-6%]">
            <div className="lg:-mt-5%">
                <iframe
                    className="w-[99%] aspect-video "

                    src={
                        "https://www.youtube.com/embed/" +
                        trailer?.key +
                        "?rel=0&autoplay=1&mute=1&start=14&end=120&loop=1"
                    }
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>

            </div>
        </div>
    )
}

export default VideoBackground