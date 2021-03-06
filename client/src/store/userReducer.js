import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getProfilPicture } from "./profilPictureReducer";

export const checkIsAuthenticated = createAsyncThunk(
  "isAuthenticated",
  async (thunkAPI) => {
    const { data } = await axios.get(
      "https://todos-yigit.herokuapp.com/auth/is-authenticated",
      { withCredentials: true }
    );
    return data;
  }
);

export const logIn = createAsyncThunk("logIn", async (userData, thunkAPI) => {
  const { data } = await axios.post(
    "https://todos-yigit.herokuapp.com/auth/login",
    userData,
    { withCredentials: true }
  );

  thunkAPI.dispatch(getProfilPicture());
  return data;
});

export const logOut = createAsyncThunk("logOut", async (thunkAPI) => {
  const { data } = await axios.get("https://todos-yigit.herokuapp.com/auth/logout", {
    withCredentials: true,
  });
  return data;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    username: "",
    isAdmin: false,
    id: null,
    profilPicture: null,
    isAuthenticated: false,
    isLoading: true,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(checkIsAuthenticated.pending, (state, action) => {
      state.isError = false;
      state.isLoading = true;
    });
    builder.addCase(checkIsAuthenticated.fulfilled, (state, action) => {
      const { username, id, isAdmin } = action.payload;
      state.username = username;
      state.id = id;
      state.isAdmin = isAdmin;
      state.isLoading = false;
      state.isError = false;
      state.isAuthenticated = true;
    });
    builder.addCase(checkIsAuthenticated.rejected, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(logIn.pending, (state, action) => {
      state.isError = false;
      state.isLoading = true;
    });
    builder.addCase(logIn.fulfilled, (state, action) => {
      const { username, id, isAdmin } = action.payload;
      state.username = username;
      state.id = id;
      state.isAdmin = isAdmin;
      state.isLoading = false;
      state.isError = false;
      state.isAuthenticated = true;
    });
    builder.addCase(logIn.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });
    builder.addCase(logOut.pending, (state, action) => {
      state.isError = false;
      state.isLoading = true;
    });
    builder.addCase(logOut.fulfilled, (state, action) => {
      state.username = "";
      state.id = null;
      state.isAdmin = false;
      state.isLoading = false;
      state.isError = false;
      state.isAuthenticated = false;
    });
    builder.addCase(logOut.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default userSlice.reducer;
