import { createApi, fetchBaseQuery }
    from "@reduxjs/toolkit/query/react";

export const interviewHistoryApi =
    createApi({

        reducerPath:
            "interviewHistoryApi",

        baseQuery:
            fetchBaseQuery({
                baseUrl:
                    import.meta.env.VITE_API_URL ||
                    "http://localhost:8000",
            }),

        endpoints:
            (builder) => ({

                getHistory:
                    builder.query({

                        query:
                            () =>
                                "/interview/history",

                    }),

                getInterviewById:
                    builder.query({

                        query:
                            (id) =>
                                `/interview/history/${id}`,

                    }),

            }),
    });

export const {

    useGetHistoryQuery,

    useGetInterviewByIdQuery,

} = interviewHistoryApi;