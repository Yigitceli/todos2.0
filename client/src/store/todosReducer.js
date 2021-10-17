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

export const submitTodo = createAsyncThunk(
  "submitTodo",
  async ({ categoryId, todoData }, thunkAPI) => {
    const { data } = await axios.post(
      `http://localhost:3001/api/todos/${categoryId}`,
      todoData,
      { withCredentials: true }
    );

    return data[0];
  }
);

export const toggleTodo = createAsyncThunk(
  "togleTodo",
  async ({ todoId, isComplete }, thunkAPI) => {
    const { data } = await axios.put(
      `http://localhost:3001/api/todos/${parseInt(todoId)}`,
      { isComplete },
      { withCredentials: true }
    );
    console.log(data[0]);
    return data[0];
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

    builder.addCase(submitTodo.fulfilled, (state, action) => {
      state.todos = [...state.todos, action.payload];
      state.isError = false;
      state.isLoading = false;
    });
    builder.addCase(submitTodo.rejected, (state, action) => {
      state.isError = true;
    });
    builder.addCase(toggleTodo.fulfilled, (state, action) => {
      const todoIndex = state.todos.findIndex(
        (item) => item.id === action.payload.id
      );
      state.todos[todoIndex].is_complete = action.payload.is_complete;
      state.isError = false;
      state.isLoading = false;
    });
  },
});

export default todosSlice.reducer;
