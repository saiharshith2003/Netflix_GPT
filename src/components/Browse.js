import useNowPlayingMovies from "../utils/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {

    useNowPlayingMovies();
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