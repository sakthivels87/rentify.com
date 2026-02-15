import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import usersSlice from "../slices/usersSlice";
const store = configureStore({
  reducer: {
    properties: "",
    auth: authReducer,
    users: usersSlice,
  },
});

export default store;
