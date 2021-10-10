import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./categoriesReducer";
import todosReducer from "./todosReducer";
import userReducer from "./userReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    categories:categoriesReducer,
    todos: todosReducer,
  },
});

export default store;
