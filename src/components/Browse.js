import { useSelector } from "react-redux";
import useNowPlayingMovies from "../utils/useNowPlayingMovies";
import usePopular from "../utils/usePopular";
import useTopRated from "../utils/useTopRated";
import useTopRatedTv from "../utils/useTopRatedTv";
import useUpcoming from "../utils/useUpcoming";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GptSearch";

const Browse = () => {

    useNowPlayingMovies();
    usePopular()
    useUpcoming()
    useTopRated()
    useTopRatedTv()
    const showGptSearch = useSelector((store) => store.gpt.showSearch)
    console.log(showGptSearch)
    return (
        <div>
            <Header />
            {
                showGptSearch ? <GptSearch /> : <><MainContainer /> <SecondaryContainer /></>}

        </div>
    )
}

export default Browse;