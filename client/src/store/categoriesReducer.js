import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCategories = createAsyncThunk(
  "fetchCategories",
  async (userId, thunkAPI) => {
    const { data } = await axios.get(
      "https://todos-yigit.herokuapp.com/api/todos/categories",
      { withCredentials: true }
    );

    return data;
  }
);

export const postCategory = createAsyncThunk(
  "postCategory",
  async (categoryName, thunkAPI) => {
    const { data } = await axios.post(
      "https://todos-yigit.herokuapp.com/api/todos/categories",
      { categoryName },
      { withCredentials: true }
    );

    return data[0];
  }
);

const categoriesSlicer = createSlice({
  name: "categories",
  initialState: {
    isLoading: false,
    isError: false,
    categories: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.categories = action.payload;
    });
    builder.addCase(fetchCategories.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });
    builder.addCase(postCategory.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(postCategory.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.categories = [...state.categories, action.payload];
    });
    builder.addCase(postCategory.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default categoriesSlicer.reducer;
