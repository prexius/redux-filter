import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getProducts } from "./productsApi"

const initialState = {
    products: [],
    isLoading: false,
    isError: false,
    error: ""
}
// async thunk
export const fetchProducts = createAsyncThunk('products/fetchproducts',
    async ({tags, search}) => {
        const products = await getProducts(tags, search)
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
                state.products = action.payload
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