import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const interviewApi = createApi({
    reducerPath: "interviewApi",

    baseQuery: fetchBaseQuery({
        baseUrl:
            import.meta.env.VITE_API_URL ||
            "http://localhost:8000",

        prepareHeaders: (headers, { getState }) => {
            const token = getState().auth.token;

            if (token) {
                headers.set(
                    "Authorization",
                    `Bearer ${token}`
                );
            }

            return headers;
        },
    }),

    endpoints: (builder) => ({

        startInterview: builder.mutation({
            query: (data) => ({
                url: "/interview/start",
                method: "POST",
                body: data,
            }),
        }),

        submitAnswer: builder.mutation({
            query: (data) => ({
                url: "/interview/answer",
                method: "POST",
                body: data,
            }),
        }),

        getReport: builder.query({
            query: (sessionId) =>
                `/interview/report/${sessionId}`,
        }),

    }),
});

export const {
    useStartInterviewMutation,
    useSubmitAnswerMutation,
    useGetReportQuery,
} = interviewApi;