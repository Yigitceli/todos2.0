import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProfilPicture = createAsyncThunk(
  "getProfilPicture",
  async (thunkAPI) => {
    const { data } = await axios.get("https://todos-yigit.herokuapp.com/api/user/image", {
      withCredentials: true,
    });
    return data;
  }
);

export const updateProfilPicture = createAsyncThunk(
  "updateProfilPicture",
  async (fd, thunkAPI) => {
    const { data } = await axios.put(
      `https://todos-yigit.herokuapp.com/api/user/me/image`,
      fd,
      {
        withCredentials: true,
        headers: {
          "content-type": "multipart/form-data",
        },
      }
    );
    thunkAPI.dispatch(getProfilPicture());
    return data;
  }
);

const profilPictureSlice = createSlice({
  name: "profilPicture",
  initialState: {
    isLoading: true,
    isError: false,
    profilPicture: null,
    isNull: true,
  },
  extraReducers: (builder) => {
    builder.addCase(getProfilPicture.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
      state.profilPicture = null;
      state.isNull = true;
    });
    builder.addCase(getProfilPicture.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.profilPicture = "https://todos-yigit.herokuapp.com/api/user/image";
      state.isNull = false;
    });
    builder.addCase(getProfilPicture.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.profilPicture = null;
      state.isNull = true;
    });
  },
});

export default profilPictureSlice.reducer;
