import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, nowPlayingMoviesUrl } from "../utils/logos";
import { useEffect } from "react";
import { addNowPlayingMovies } from "./moviesSlice";
const useNowPlayingMovies = () => {
    const dispatch = useDispatch()
    const nowPlaying = useSelector(store => store.gpt.nowPlayingMovies)
    const nowPlayingMovies = async () => {

        const data = await fetch(nowPlayingMoviesUrl, API_OPTIONS)
        const json = await data.json()

        dispatch(addNowPlayingMovies(json.results))
    }
    useEffect(() => {
        !nowPlaying && nowPlayingMovies()
    }, [])
}
export default useNowPlayingMovies;