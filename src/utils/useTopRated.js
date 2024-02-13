import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/logos";
import { useEffect } from "react";
import { addTopRated } from "./moviesSlice";
const useTopRated = () => {
    const dispatch = useDispatch()
    const topRated = useSelector(store => store.gpt.topRated)
    const toprated = async () => {

        const data = await fetch("https://api.themoviedb.org/3/movie/top_rated", API_OPTIONS)
        const json = await data.json()

        dispatch(addTopRated(json.results))
    }
    useEffect(() => {
        !topRated && toprated()
    }, [])
}
export default useTopRated;