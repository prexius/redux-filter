import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "../utils/axios";

const initialState = {
    isLoading: false,
    products: [],
    productDetails: [],
    isError: false,
    error: "",
    totalCount: ""
}

export const getProducts = async (tags, types) => {
    // const qtags = tags?.length > 0 && tags.map((tag) => `tags_like=${tag}`)
    // const qtypes = types?.length > 0 && `types=${types}`
    // let qtags = tags?.length > 0 && `tags=${tags}`
    // let qtypes = types?.length > 0 && types.map((type) => `types=${type}`)
    let qstr = "";

    if (types?.length > 0) {
        qstr += types.map((type) => `types=${type}`).join("&");
    }

    if (tags?.length > 0) {
        qstr += `&tags=${tags}`;
    }

    const response = await axios.get(`/products?${qstr}`);
    return response.data;
};
  


// async thunk
export const fetchProducts = createAsyncThunk('products/fetchproducts',
    async ({ tags, types }) => {
        const products = await getProducts(tags, types)
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