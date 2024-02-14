import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies);

    return (
        movies.nowPlayingMovies && (
            <div className="bg-black">
                <div className=" mt-0 md:-mt-[19%] pl-4 md:pl-12 relative z-20">
                    <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
                    <MovieList title={"Trending Tv Series"} movies={movies.popularMovies} />
                    <MovieList title={"Popular"} movies={movies.topRated} />
                    <MovieList
                        title={"Upcoming Movies"}
                        movies={movies.upcoming}
                    />
                    <MovieList title={"TopRated Tv Series"} movies={movies.topRatedTv} />
                </div>
            </div>
        )
    );
};
export default SecondaryContainer;