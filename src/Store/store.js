import { configureStore } from "@reduxjs/toolkit";
import { allUsersDataReducer } from "./allUsersDataSlice/allUsersDataSlice";

const store = configureStore({
    reducer: {
        allUsersData: allUsersDataReducer
    }
})

export default store;