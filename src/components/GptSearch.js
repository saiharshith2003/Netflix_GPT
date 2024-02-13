import { background } from "../utils/logos";
import GptMovieSuggestions from "./GptMovieSuggestions";

import GptSearchBar from "./GptSearchBar";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className="" src={background} alt="logo" />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestions />

      </div>
    </>
  );
};
export default GPTSearch;