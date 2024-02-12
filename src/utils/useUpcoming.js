import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/logos";
import { useEffect } from "react";
import { addUpcoming } from "./moviesSlice";
const useUpcoming = () => {
    const dispatch = useDispatch()
    const upcoming = async () => {

        const data = await fetch("https://api.themoviedb.org/3/movie/upcoming", API_OPTIONS)
        const json = await data.json()

        dispatch(addUpcoming(json.results))
    }
    useEffect(() => {
        upcoming()
    }, [])
}
export default useUpcoming;