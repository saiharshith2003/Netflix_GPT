import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/logos";
import { useEffect } from "react";
import { addTopRatedTv } from "./moviesSlice";
import { useSelector } from "react-redux";
const useTopRatedTv = () => {
    const dispatch = useDispatch()
    const topRatedTv = useSelector(store => store.gpt.topRatedTv)
    const TopRatedTv = async () => {

        const data = await fetch("https://api.themoviedb.org/3/tv/top_rated", API_OPTIONS)
        const json = await data.json()

        dispatch(addTopRatedTv(json.results))
    }
    useEffect(() => {
        !topRatedTv && TopRatedTv()
    }, [])
}
export default useTopRatedTv;