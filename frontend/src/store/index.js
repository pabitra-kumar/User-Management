import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices/UserSlice";
import { userApi } from "./api";

const store = configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducer, // [userApi.reducerPath] is the same as [userApi.name]: userApi.reducer
        users: userSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware),
});

export default store;