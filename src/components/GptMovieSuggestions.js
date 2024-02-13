import { useSelector } from "react-redux"
import MovieList from "./MovieList";
const GptMovieSuggestions = () => {
    const { moviesNames, gptResults } = useSelector((store) => store.gpt)
    if (!moviesNames) return;
    return (
        <div className="-z-10  bg-black bg-opacity-90 bg-gradient-to-tr from-black text-white">
            <div>
                {
                    moviesNames.map(((movieName, index) => (<MovieList key={movieName} title={movieName} movies={gptResults[index]} />)))

                }
            </div>
        </div>
    )
}

export default GptMovieSuggestions