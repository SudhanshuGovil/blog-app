import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs: [
    {
      blogId: "1",
      title: "Lorem ipsum, dolor sit amet",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur omnis eligendi consectetur illum vero officiis atque? Quibusdam ullam voluptas sit. Nemo reiciendis quam numquam incidunt quod fugit quas vero aperiam, sint cumque amet ipsum, ducimus optio aliquam voluptatum eveniet sunt? Ut error velit consequuntur harum aliquid sint! Ad vero cumque beatae ab. Tenetur quo deleniti quisquam possimus, illum qui ab. Facilis dolor odit placeat ex vitae deserunt, voluptates, cumque quae laboriosam minus, mollitia consectetur aspernatur molestiae in amet soluta. Non. Veniam, laborum repellat. Necessitatibus ea perferendis assumenda at quia animi dolore maxime veritatis voluptatem? Consequuntur id obcaecati porro enim delectus!",
      category: "Technology",
      like: false,
    },
    {
      blogId: "2",
      title: "Lorem ipsum, dolor sit amet",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur omnis eligendi consectetur illum vero officiis atque? Quibusdam ullam voluptas sit. Nemo reiciendis quam numquam incidunt quod fugit quas vero aperiam, sint cumque amet ipsum, ducimus optio aliquam voluptatum eveniet sunt? Ut error velit consequuntur harum aliquid sint! Ad vero cumque beatae ab. Tenetur quo deleniti quisquam possimus, illum qui ab. Facilis dolor odit placeat ex vitae deserunt, voluptates, cumque quae laboriosam minus, mollitia consectetur aspernatur molestiae in amet soluta. Non. Veniam, laborum repellat. Necessitatibus ea perferendis assumenda at quia animi dolore maxime veritatis voluptatem? Consequuntur id obcaecati porro enim delectus!",
      category: "Education",
      like: false,
    },
    {
      blogId: "3",
      title: "Lorem ipsum, dolor sit amet",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur omnis eligendi consectetur illum vero officiis atque? Quibusdam ullam voluptas sit. Nemo reiciendis quam numquam incidunt quod fugit quas vero aperiam, sint cumque amet ipsum, ducimus optio aliquam voluptatum eveniet sunt? Ut error velit consequuntur harum aliquid sint! Ad vero cumque beatae ab. Tenetur quo deleniti quisquam possimus, illum qui ab. Facilis dolor odit placeat ex vitae deserunt, voluptates, cumque quae laboriosam minus, mollitia consectetur aspernatur molestiae in amet soluta. Non. Veniam, laborum repellat. Necessitatibus ea perferendis assumenda at quia animi dolore maxime veritatis voluptatem? Consequuntur id obcaecati porro enim delectus!",
      category: "Healthcare",
      like: false,
    },
  ],
};

export default createSlice({
  name: "blogs",
  initialState,
  reducers: {
    addNewBlog: (state, action) => {
      state.blogs = [...state.blogs, action.payload];
    },
    deleteBlog: (state, action) => {
      const filteredArray = state.blogs.filter(
        (each) => each.blogId !== action.payload.blogId
      );
      state.blogs = filteredArray;
    },
    editBlog: (state, action) => {
      const selectedBlogId = state.blogs.findIndex(
        (each) => each.blogId === action.payload.blogId
      );
      state.blogs.splice(selectedBlogId, 1, action.payload);
    },
    likeBlog: (state, action) => {
      const selectedBlogId = state.blogs.findIndex(
        (each) => each.blogId === action.payload.blogId
      );
      state.blogs[selectedBlogId].like = !state.blogs[selectedBlogId].like;
    },
  },
});
