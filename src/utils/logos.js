export const netflixLogo = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
export const background = "https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_large.jpg"

export const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNWMxNmExMGU0YTVkY2VmNjI2ZDU3NzQyNjZjZWIzMCIsInN1YiI6IjY1YzljM2ZiZTRiNTc2MDE3ZDE3M2NmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9_xIspTV-t_8Fpjry5DsYGhc0RDEirwo5fM65FPFLSE'
    }
};
export const nowPlayingMoviesUrl = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
export const getRandomElementFromArray = (array) => {
    if (Array.isArray(array) && array.length > 0) {
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    } else {
        return null;
    }
}

export const IMG_CDN = "https://image.tmdb.org/t/p/w500/"


export const GPT_API = "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"