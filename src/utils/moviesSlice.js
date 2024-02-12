import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        trailerInfo: null,
        popularMovies: null,
        topRated: null,
        upcoming: null,
        topRatedTv: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailer: (state, action) => {
            state.trailerInfo = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedTv: (state, action) => {
            state.topRatedTv = action.payload
        },
        addTopRated: (state, action) => {
            state.topRated = action.payload;
        },
        addUpcoming: (state, action) => {
            state.upcoming = action.payload;
        },
    },
})


export const { addNowPlayingMovies, addTrailer, addTopRated, addPopularMovies, addUpcoming, addTopRatedTv } = moviesSlice.actions;
export default moviesSlice.reducer;