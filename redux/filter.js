import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tags: []
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        tagSelected: (state, action) => {
            state.tags.push(action.payload);
        },
        tagRemoved: (state, action) => {
            const indexToRemove = state.tags.indexOf(action.payload);

            if (indexToRemove !== -1) {
                state.tags.splice(indexToRemove, 1);
            }
        },
    },
});

export default filterSlice.reducer;
export const {
    tagSelected,
    tagRemoved
} = filterSlice.actions;
