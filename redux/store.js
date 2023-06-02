// import { configureStore } from '@reduxjs/toolkit';
// import tagsReducer from "./tags"
// import typesReducer from "./types"
// import productsReducer from "./products"
// // import videoReducer from "./video/video"
// import filterReducer from "./filter"
// // import relatedVideosReducer from "./relatedVideos/relatedVideos"

// export const store = configureStore({
//   reducer: {
//     products: productsReducer,
//     // video: videoReducer,
//     types: typesReducer,
//     tags: tagsReducer,
//     // relatedVideos: relatedVideosReducer,
//     filter: filterReducer
//   },
// });


import { jobsApi } from '@redux/features/jobs/jobsApi'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {
        [jobsApi.reducerPath]: jobsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(jobsApi.middleware)
})