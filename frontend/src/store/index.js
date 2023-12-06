import { configureStore } from "@reduxjs/toolkit";
import { userSlice, fetchData } from "./slices/UserSlice";

const store = configureStore({
    reducer: {
        users: userSlice.reducer,
    },
});

store.dispatch(fetchData());

export default store;