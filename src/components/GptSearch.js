import { background } from "../utils/logos";
import GptMovieSuggestions from "./GptMovieSuggestions";

import GptSearchBar from "./GptSearchBar";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className="object-cover h-screen lg:h-auto " src={background} alt="logo" />
      </div>
      <div className="py-4 lg:p-0">
        <GptSearchBar />
        <GptMovieSuggestions />

      </div>
    </>
  );
};
export default GPTSearch;