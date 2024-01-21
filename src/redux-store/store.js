import { configureStore } from "@reduxjs/toolkit";
import UsersReducer from "./users-slice";
import AuthReducer from "./auth-slice";

export default configureStore({
  reducer: {
    users: UsersReducer,
    auth: AuthReducer,
  },
});
