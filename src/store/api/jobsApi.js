import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const jobsApi = createApi({
  reducerPath: "jobsApi",

  baseQuery: fetchBaseQuery({
    baseUrl:
      import.meta.env.VITE_API_URL ||
      "http://localhost:8000",
  }),

  endpoints: (builder) => ({
    getJobs: builder.query({
      query: () => "/jobs",
    }),

    getJobById: builder.query({
      query: (jobId) => `/jobs/${jobId}`,
    }),
  }),
});

export const {
  useGetJobsQuery,
  useGetJobByIdQuery,
} = jobsApi;