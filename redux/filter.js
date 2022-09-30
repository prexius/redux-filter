import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tags: [],
    types: [],
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        tagSelected: (state, action) => {
            state.tags = action.payload;
        },
        typeSelected: (state, action) => {
            state.types = action.payload;
        },
    },
});

export default filterSlice.reducer;
export const {
    tagSelected,
    typeSelected
} = filterSlice.actions;
