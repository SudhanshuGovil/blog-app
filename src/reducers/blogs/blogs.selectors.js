import slice from "./blogs.slice";

const selectSlice = (state) => state[slice.name];

export const selectAllBlogs = (state) => selectSlice(state).blogs;

export const selectBlogById = (state, blogId) =>
  selectSlice(state).blogs.find((blog) => blog.blogId === blogId);
