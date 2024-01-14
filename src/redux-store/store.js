import { configureStore } from "@reduxjs/toolkit";
import UsersReducer from "./users-slice";

export default configureStore({
  reducer: {
    users: UsersReducer,
  },
});
