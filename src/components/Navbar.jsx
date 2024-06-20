import React, { useContext } from "react";
import {
  Link,
  matchRoutes,
  useLocation,
  useNavigate,
  // useParams,
} from "react-router-dom";
import { ROUTES } from "../constant";
import { useDispatch, useSelector } from "react-redux";
import { deleteBlog, likeBlog } from "../reducers/blogs";
import { selectBlogById } from "../reducers/blogs/blogs.selectors";
import { like, logo, unLike, write } from "../assets";
import { BlogContext } from "../context/BlogContext";

const { ADD_BLOG, BLOG_DETAILS, EDIT_BLOG, HOME } = ROUTES;

const routes = [
  { path: ADD_BLOG },
  { path: BLOG_DETAILS },
  { path: EDIT_BLOG },
  { path: HOME },
];

const Navbar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { blogId } = useParams();
  const { blogId } = useContext(BlogContext);
  const [{ route }] = matchRoutes(routes, location);
  const isHomeRoute = route.path === HOME;
  const isBlogRoute = route.path === BLOG_DETAILS;

  const blogDetails = useSelector((state) => selectBlogById(state, blogId));

  const handleDeleteClick = () => {
    dispatch(deleteBlog({ blogId }));
    navigate("/");
  };

  const handleLikeClick = () => dispatch(likeBlog({ blogId }));

  return (
    <nav className="mx-auto lg:mx-5 flex p-2 justify-between items-center">
      <div className="cursor-pointer" onClick={() => navigate(HOME)}>
        <img src={logo} width={150} height={100} />
      </div>

      <div className="flex justify-between items-center">
        {isHomeRoute && (
          <Link
            className="bg-gray-300 py-2 flex justify-center content-center px-6 hover:bg-gray-400 rounded-xl font-medium"
            to={ADD_BLOG}
          >
            <img src={write} width={20} height={20} />
            <span className="ml-2">Write</span>
          </Link>
        )}
        {blogDetails && isBlogRoute && (
          <div className="flex items-center">
            <button className="mr-5" onClick={handleLikeClick}>
              <img
                src={blogDetails.like ? like : unLike}
                width={20}
                height={20}
              />
            </button>
            <Link
              className="bg-gray-300 py-2 flex justify-center items-center px-6 hover:bg-gray-400 rounded-xl font-medium mr-5"
              to={`/edit/${blogId}`}
            >
              <img src={write} width={20} height={20} />
              <span className="ml-2">Edit</span>
            </Link>
            <button
              className="py-2 px-6 border rounded-xl border-gray-300 font-medium hover:bg-gray-400 hover:text-white"
              onClick={handleDeleteClick}
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
