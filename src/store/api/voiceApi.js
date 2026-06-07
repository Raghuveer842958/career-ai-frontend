import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const voiceApi = createApi({
    reducerPath: "voiceApi",

    baseQuery: fetchBaseQuery({
        baseUrl:
            import.meta.env.VITE_API_URL ||
            "http://localhost:8000",
    }),

    endpoints: (builder) => ({

        transcribeAudio:
            builder.mutation({

                query: (formData) => ({
                    url: "/voice/transcribe",
                    method: "POST",
                    body: formData,
                }),

            }),

    }),
});

export const {
    useTranscribeAudioMutation,
} = voiceApi;