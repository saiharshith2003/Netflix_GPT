import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showSearch: false,
        gptResults: null,
    },
    reducers: {
        toggleGpt: (state) => {
            state.showSearch = !state.showSearch
        },
        addSearchResults: (state, action) => {
            state.gptResults = action.payload
        },
    }

})

export const { toggleGpt, addSearchResults } = gptSlice.actions;
export default gptSlice.reducer;