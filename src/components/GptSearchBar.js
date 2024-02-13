import { useRef } from 'react'
import openai from '../utils/openai';
import { API_OPTIONS } from '../utils/logos';
import { addSearchResults } from '../utils/gptSlice';
import { useDispatch } from 'react-redux';

const GptSearchBar = () => {
  const searchText = useRef()

  const dispatch = useDispatch()
  const tlgbSearchResults = async (movie) => {
    const url = "https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1";
    const data = await fetch(url, API_OPTIONS)
    const json = await data.json();
    return json.results;
  }


  const handleSearch = async () => {

    if (searchText === "") return null;
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya, if he gives a movie name just give the result as single movie of that dont show any other movies show only that movie result and if you cant find any result just give the result as No results found";
    const moviesSuggestions = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });
    if (!moviesSuggestions) return

    const moviesData = moviesSuggestions.choices?.[0]?.message.content.split(",")
    const PromiseData = moviesData.map((movie) => tlgbSearchResults(movie))
    const resultsData = await Promise.all(PromiseData)

    dispatch(addSearchResults({ movieNames: moviesData, gptResults: resultsData }))
  };

  return (
    <div className="pt-[35%] lg:pt-[8%] flex justify-center">
      <form
        className="w-full lg:w-1/2 bg-black bg-opacity-70 rounded-lg overflow-hidden shadow-lg grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          ref={searchText}
          className="p-4 m-4 col-span-9 bg-black bg-opacity-80 rounded-lg focus:outline-none focus:ring focus:border-blue-400 transition duration-300 ease-in-out hover:bg-opacity-100 text-white font-semibold hover:bg-gray-800"
          placeholder="What do you want to watch today?"
        />

        <button onClick={handleSearch} className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg hover:bg-opacity-80">
          Search
        </button>
      </form>

    </div>
  )
}

export default GptSearchBar