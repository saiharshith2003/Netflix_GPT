import { API_OPTIONS } from "./logos";

const useOpenAi = (movie) => {
    const tmdbSearchResults = async () => {
        const url = "https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1";
        const data = await fetch(url, API_OPTIONS)
        const json = await data.json();
        return json.results;
    }
}

export default useOpenAi