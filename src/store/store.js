import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/authSlice";

import { authApi } from "./api/authApi";
import { interviewApi } from "./api/interviewApi";
import { voiceApi } from "./api/voiceApi";
import { interviewHistoryApi } from "./api/interviewHistoryApi";
import { jobsApi } from "./api/jobsApi";

export const store = configureStore({
  reducer: {
    auth: authReducer,

    [authApi.reducerPath]:
      authApi.reducer,

    [interviewApi.reducerPath]:
      interviewApi.reducer,

    [voiceApi.reducerPath]:
      voiceApi.reducer,

    [interviewHistoryApi.reducerPath]:
      interviewHistoryApi.reducer,

    [jobsApi.reducerPath]:
      jobsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(interviewApi.middleware)
      .concat(voiceApi.middleware)
      .concat(interviewHistoryApi.middleware)
      .concat(jobsApi.middleware),
});