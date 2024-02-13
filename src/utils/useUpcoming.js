import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/logos";
import { useEffect } from "react";
import { addUpcoming } from "./moviesSlice";
import { useSelector } from "react-redux";
const useUpcoming = () => {
    const dispatch = useDispatch()
    const upcomingMovies = useSelector((store) => store.gpt.upcoming)
    const upcoming = async () => {

        const data = await fetch("https://api.themoviedb.org/3/movie/upcoming", API_OPTIONS)
        const json = await data.json()

        dispatch(addUpcoming(json.results))
    }

    useEffect(() => {
        !upcomingMovies && upcoming()
    }, [])
}
export default useUpcoming;