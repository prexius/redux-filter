import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "../utils/axios";


const initialState = {
    types: [],
    isLoading: false,
    isError: false,
    error: ""
}

export const getTypes = async () => {
    const response = await axios.get('/types');
    return response.data
}

// async thunk
export const fetchTypes = createAsyncThunk('types/fetchTypes',
    async () => {
        const types = await getTypes()
        return types;
    })

const typesSlice = createSlice({
    name: "types",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchTypes.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchTypes.fulfilled, (state, action) => {
                state.isLoading = false;
                state.types = action.payload
            })
            .addCase(fetchTypes.rejected, (state, action) => {
                state.isLoading = false;
                state.types = [];
                state.isError = true;
                state.error = action.error?.message
            })
    }
})

export default typesSlice.reducer;