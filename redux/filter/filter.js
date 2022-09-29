import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tags: [],
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        tagSelected: (state, action) => {
            state.tags = action.payload;
        },
    },
});

export default filterSlice.reducer;
export const {
    tagSelected,
} = filterSlice.actions;
