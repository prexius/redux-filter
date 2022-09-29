import { configureStore } from '@reduxjs/toolkit';
import tagsReducer from "./tags/tags"
import productsReducer from "./products/products"
// import videoReducer from "./video/video"
import filterReducer from "./filter/filter"
// import relatedVideosReducer from "./relatedVideos/relatedVideos"

export const store = configureStore({
  reducer: {
    products: productsReducer,
    // video: videoReducer,
    tags: tagsReducer,
    // relatedVideos: relatedVideosReducer,
    filter:filterReducer
  },
});