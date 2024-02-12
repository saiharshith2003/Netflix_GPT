import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/logos";
import { useEffect } from "react";
import { addTopRated } from "./moviesSlice";
const useTopRated = () => {
    const dispatch = useDispatch()
    const toprated = async () => {

        const data = await fetch("https://api.themoviedb.org/3/movie/top_rated", API_OPTIONS)
        const json = await data.json()

        dispatch(addTopRated(json.results))
    }
    useEffect(() => {
        toprated()
    }, [])
}
export default useTopRated;