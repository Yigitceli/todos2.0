import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodos = createAsyncThunk(
  "fetchTodos",
  async (categoryId, thunkAPI) => {
    const { data } = await axios.get(
      `http://localhost:3001/api/todos/${categoryId}`,
      { withCredentials: true }
    );       
    
    return data;
  }
);

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    isLoading: true,
    isError: false,
    todos: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state, action) => {
      state.isError = false;
      state.isLoading = true;
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.todos = action.payload;
      state.isError = false; 
      state.isLoading = false;
    });
    builder.addCase(fetchTodos.rejected, (state, action) => {
      state.isError = true;
      state.isLoading = false;
      state.todos = null;
    });
  },
});

export default todosSlice.reducer;
