import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        trailerInfo: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailer: (state, action) => {
            state.trailerInfo = action.payload;
        }
    },
})


export const { addNowPlayingMovies, addTrailer } = moviesSlice.actions;
export default moviesSlice.reducer;