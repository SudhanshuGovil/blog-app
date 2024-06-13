import { selectAllBlogs, selectBlogById } from "./blogs.selectors";
import slice from "./blogs.slice";

export const {
  actions: { addNewBlog, deleteBlog, editBlog, likeBlog },
} = slice;

export const selectors = {
  selectAllBlogs,
  selectBlogById,
};
