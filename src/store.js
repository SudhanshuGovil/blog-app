import { configureStore } from "@reduxjs/toolkit";
import blogsSlice from "./reducers/blogs/blogs.slice";

export const store = configureStore({
  reducer: { [blogsSlice.name]: blogsSlice.reducer },
});
