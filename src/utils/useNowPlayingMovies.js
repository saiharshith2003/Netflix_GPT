import { useDispatch } from "react-redux";
import { API_OPTIONS, nowPlayingMoviesUrl } from "../utils/logos";
import { useEffect } from "react";
import { addNowPlayingMovies } from "./moviesSlice";
const useNowPlayingMovies = () => {
    const dispatch = useDispatch()
    const nowPlayingMovies = async () => {

        const data = await fetch(nowPlayingMoviesUrl, API_OPTIONS)
        const json = await data.json()
        console.log(json.results)
        dispatch(addNowPlayingMovies(json.results))
    }
    useEffect(() => {
        nowPlayingMovies()
    }, [])
}
export default useNowPlayingMovies;