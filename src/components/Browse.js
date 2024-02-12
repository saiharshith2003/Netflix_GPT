import useNowPlayingMovies from "../utils/useNowPlayingMovies";
import usePopular from "../utils/usePopular";
import useTopRated from "../utils/useTopRated";
import useTopRatedTv from "../utils/useTopRatedTv";
import useUpcoming from "../utils/useUpcoming";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {

    useNowPlayingMovies();
    usePopular()
    useUpcoming()
    useTopRated()
    useTopRatedTv()
    /*
       MainContainer
        -Video title
        -Video Background
       SecondaryContainer
        -Movie Suggestions
        -cards
    */
    return (
        <div>
            <Header />
            <MainContainer />
            <SecondaryContainer />
        </div>
    )
}

export default Browse;