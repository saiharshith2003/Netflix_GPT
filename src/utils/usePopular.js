import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/logos";
import { useEffect } from "react";
import { addPopularMovies } from "./moviesSlice";
const usePopular = () => {
    const dispatch = useDispatch()
    const popularmovies = useSelector(store => store.gpt.popularMovies)
    const popularMovies = async () => {

        const data = await fetch("https://api.themoviedb.org/3/tv/popular", API_OPTIONS)
        const json = await data.json()

        dispatch(addPopularMovies(json.results))
    }
    useEffect(() => {
        !popularmovies && popularMovies()
    }, [])
}
export default usePopular;