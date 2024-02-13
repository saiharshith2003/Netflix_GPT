import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showSearch: false,
        gptResults: null,
        moviesNames: null,
    },
    reducers: {
        toggleGpt: (state) => {
            state.showSearch = !state.showSearch
        },
        addSearchResults: (state, action) => {
            const { movieNames, gptResults } = action.payload;
            state.moviesNames = movieNames;
            state.gptResults = gptResults;
        },
        removeSearchResults: (state) => {
            state.moviesNames = null;
            state.gptResults = null;
        }
    }

})

export const { toggleGpt, addSearchResults, removeSearchResults } = gptSlice.actions;
export default gptSlice.reducer;