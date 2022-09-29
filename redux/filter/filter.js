import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tags: [],
    search: "",
    currentPage: 1,
    pageSize: 24,
    types: [],
    chosenType: '',
    subtypes: [],
    chosenSubtype: '',
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        changePerPageValue(state, action) {
            state.pageSize = action.payload;
            state.currentPage = 1;
        },
        changeCurrentPageValue(state, action) {
            state.currentPage = action.payload;
        },
        getTypes(state, action) {
            state.types = action.payload.data;
        },
        getSubtypes(state, action) {
            state.subtypes = action.payload.data;
        },
        getChosenType(state, action) {
            state.chosenType = action.payload;
            state.currentPage = 1;
        },
        getChosenSubtype(state, action) {
            state.chosenSubtype = action.payload;
            state.currentPage = 1;
        },

        tagSelected: (state, action) => {
            state.tags = action.payload;
        },
        tagRemoved: (state, action) => {
            state.tags = action.payload;
        },
        searched: (state, action) => {
            state.search = action.payload;
        },
        resetFilter: (state) => {
            state.tags = [],
                state.search = ""
        },
    },
});

export default filterSlice.reducer;
export const { changePerPageValue, changeCurrentPageValue, getTypes, getSubtypes, getChosenType, getChosenSubtype, tagSelected, tagRemoved, searched, resetFilter } = filterSlice.actions;
