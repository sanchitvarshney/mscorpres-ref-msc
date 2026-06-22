import { configureStore } from "@reduxjs/toolkit";
import { careersApi } from "./careersApi";

export const store = configureStore({
  reducer: {
    [careersApi.reducerPath]: careersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(careersApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
