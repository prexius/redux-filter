import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getProducts } from "./productsApi"

const initialState = {
    isLoading: false,
    products: [],
    productDetails: [],
    isError: false,
    error: "",
    totalCount: ""
}
// async thunk
export const fetchProducts = createAsyncThunk('products/fetchproducts',
    async ({ tags, search, types }) => {
        const products = await getProducts(tags, search, types)
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