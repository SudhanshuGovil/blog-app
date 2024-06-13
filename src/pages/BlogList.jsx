import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectAllBlogs } from "../reducers/blogs/blogs.selectors";
import { Link } from "react-router-dom";
import { like, unLike } from "../assets";
import { truncateText } from "../helpers";
import { Title } from "../components";
import { Helmet } from "react-helmet";

const BlogList = () => {
  const blogs = useSelector(selectAllBlogs);

  const [blogPost, setBlogPosts] = useState([]);

  useEffect(() => {
    if (blogs) setBlogPosts(blogs);
  }, blogs);

  return (
    <div className="container mx-2 md:mx-auto mt-10">
      <Helmet>
        <title>Blog post app</title>
      </Helmet>
      <Title title="Discover new blog posts" />
      {blogPost.length ? (
        blogPost.map((each) => (
          <div className="ml-1 mb-1" key={each.blogId}>
            <Link to={`/${each.blogId}`}>
              <div className="flex justify-between content-center mb-2">
                <h2 className="font-bold text-2xl">{each.title}</h2>
                <img src={each.like ? like : unLike} width={20} height={20} />
              </div>
              <p className="text-gray-700">{each.category}</p>
              <p className="text-gray-700">{truncateText(each.content, 25)}</p>
            </Link>
            <br />
            <div className="border border-gray-200"></div>
            <br />
          </div>
        ))
      ) : (
        <p>No Blogs to display</p>
      )}
    </div>
  );
};

export default BlogList;
