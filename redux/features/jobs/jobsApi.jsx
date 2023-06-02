import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {server} from "@config/index"

export const jobsApi = createApi({
    reducerPath: 'jobsApi',
    baseQuery:fetchBaseQuery({baseUrl:`${server}/api/`}),
    endpoints:(builder)=>({
        getAlljobs: builder.query({
            query: () => `jobs`
        }),
        getJobById: builder.query({
            query: (id) => `jobs/${id}`,
        }),
        deleteJob: builder.mutation({
            query: (id) => ({
                url: `jobs/${id}`,
                method: 'DELETE'
              }),
        }),
        updateJob: builder.mutation({
            query: ({ id, ...rest }) => ({
                url: `jobs/${id}`,
                method: 'PUT',
                body: rest,
              }),
        }),
        AddJob: builder.mutation({
            query: (body) => ({
                url: `jobs`,
                method: 'Post',
                body: body,
              }),
        })
    })
});

export const { 
    useGetAlljobsQuery, 
    useGetJobByIdQuery, 
    useDeleteJobMutation, 
    useUpdateJobMutation,
    useAddJobMutation 
} = jobsApi



