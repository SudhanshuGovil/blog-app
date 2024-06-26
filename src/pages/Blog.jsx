import React, { useContext } from "react";
import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
import { selectBlogById } from "../reducers/blogs/blogs.selectors";
import { Title } from "../components";
import { Helmet } from "react-helmet";
import { BlogContext } from "../context/BlogContext";

const Blog = () => {
  const { blogId } = useContext(BlogContext);
  // const { blogId } = useParams();
  const blogDetails = useSelector((state) => selectBlogById(state, blogId));

  if (!blogDetails)
    return (
      <div className="container mx-auto mt-10 font-bold text-2xl">
        No blog found!!
      </div>
    );

  const { title, content, category } = blogDetails;

  return (
    <div className="container mx-auto mt-10">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Title title={title} showBackButton />
      <p className="text-gray-600 my-3">{category}</p>
      <p className="text-gray-800">{content}</p>
    </div>
  );
};

export default Blog;
