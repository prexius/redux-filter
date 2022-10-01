import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tags: [],
    types: [],
    selectedId: undefined
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        tagSelected: (state, action) => {
            state.tags = action.payload;
        },
        typeSelected: (state, action) => {
            state.types.push(action.payload);
        },
        typeRemoved: (state, action) => {
            const indexToRemove = state.types.indexOf(action.payload);

            if (indexToRemove !== -1) {
                state.types.splice(indexToRemove, 1);
            }
        },
    },
});

export default filterSlice.reducer;
export const {
    tagSelected,
    typeSelected,
    typeRemoved
} = filterSlice.actions;
