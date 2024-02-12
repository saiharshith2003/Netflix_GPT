import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/logos";
import { useEffect } from "react";
import { addTopRatedTv } from "./moviesSlice";
const useTopRatedTv = () => {
    const dispatch = useDispatch()
    const TopRatedTv = async () => {

        const data = await fetch("https://api.themoviedb.org/3/tv/top_rated", API_OPTIONS)
        const json = await data.json()

        dispatch(addTopRatedTv(json.results))
    }
    useEffect(() => {
        TopRatedTv()
    }, [])
}
export default useTopRatedTv;