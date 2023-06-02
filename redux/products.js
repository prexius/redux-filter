import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "../utils/axios";

const initialState = {
    isLoading: false,
    products: [],
    isError: false,
    error: "",
}

export const getProducts = async (tags) => {
    
    if (tags?.length > 0) {
        queryString += tags.map((tag) => `tags=${tag}`).join("&");
    }
    let queryString = "";

    const response = await axios.get(`/products?${queryString}`);
    return response.data;
};
  


// async thunk
export const fetchProducts = createAsyncThunk('products/fetchproducts',
    async ({ tags }) => {
        const products = await getProducts(tags)
        return products;
    })

const productSlice = createSlice({
    name: "products",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.products = action.payload;
                state.totalCount = action.payload.totalCount;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.products = [];
                state.isError = true;
                state.error = action.error?.message
            })
    }
})

export default productSlice.reducer;