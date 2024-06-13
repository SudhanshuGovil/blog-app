import { createBrowserRouter } from "react-router-dom";
import { AddEditBlog, Blog, BlogList } from "./pages";
import { ROUTES } from "./constant";
import { Root } from "./components";

const { ADD_BLOG, BLOG_DETAILS, EDIT_BLOG, HOME } = ROUTES;

export const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      { path: ADD_BLOG, element: <AddEditBlog /> },
      { path: EDIT_BLOG, element: <AddEditBlog /> },
      { path: BLOG_DETAILS, element: <Blog /> },
      { path: HOME, element: <BlogList /> },
    ],
  },
]);
