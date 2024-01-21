import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  loginWithEmailAndPassword as loginWithEmailAndPasswordService,
  logout as logoutService,
  signup as signupService,
  deleteAccount as deleteAccountService,
} from "../services/auth-service.js";

export const loginWithEmailAndPassword = createAsyncThunk(
  "auth/loginWithEmailAndPassword",
  async ({ email, password }) => {
    const data = await loginWithEmailAndPasswordService(email, password);

    return data;
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  const data = await logoutService();
  return data;
});

export const signup = createAsyncThunk("auth/signup", async (userInfo) => {
  const data = await signupService(userInfo);
  return data;
});

export const deleteAccount = createAsyncThunk("auth/delete", async () => {
  const data = await deleteAccountService();
  return data;
});

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginWithEmailAndPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginWithEmailAndPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(loginWithEmailAndPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(logout.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(signup.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(signup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteAccount.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteAccount.fulfilled, (state, action) => {
        state.loading = false;
        state.data = state.data.filter((item) => item.id !== action.payload);
      })
      .addCase(deleteAccount.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;
