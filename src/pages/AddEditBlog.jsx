import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v1 as uuid } from "uuid";
import { addNewBlog, editBlog, selectors } from "../reducers/blogs";
import { useNavigate, useParams } from "react-router-dom";
import { Title } from "../components";

const { selectBlogById } = selectors;

const AddEditBlog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { blogId } = useParams();
  const selectedBlog = useSelector((state) => selectBlogById(state, blogId));
  const [blogDetails, setBlogDetails] = useState({
    blogId: uuid(),
    content: "",
    title: "",
    category: "",
    like: false,
  });

  useEffect(() => {
    if (selectedBlog) setBlogDetails(selectedBlog);
  }, [selectedBlog]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (blogId) dispatch(editBlog(blogDetails));
    else dispatch(addNewBlog(blogDetails));
    navigate("/");
  };

  const onChange = (e, label) => {
    setBlogDetails({ ...blogDetails, [label]: e.target.value });
  };

  const onCancelClick = () => navigate("/");

  return (
    <div className="container mx-auto mt-10">
      <Title
        title={selectedBlog ? "Edit post" : "Create new post"}
        showBackButton
      />
      <form className="ml-1" onSubmit={onSubmit}>
        <div>
          <div className="font-semibold my-2">Title </div>
          <input
            type="text"
            name="title"
            id="title"
            value={blogDetails.title}
            onChange={(e) => onChange(e, "title")}
            className="bg-gray-200 rounded-lg p-3 text-gray-800 w-full md:w-1/2"
            placeholder="Blog post title ..."
          />
        </div>
        <div className="mt-5">
          <div className="font-semibold my-2">Category </div>
          <input
            type="text"
            name="category"
            id="category"
            value={blogDetails.category}
            onChange={(e) => onChange(e, "category")}
            className="bg-gray-200 rounded-lg p-3 text-gray-800 w-full md:w-1/2"
            placeholder="Blog post category ..."
          />
        </div>
        <div className="mt-5">
          <div className="font-semibold my-2">Content </div>
          <textarea
            name="content"
            id="content"
            value={blogDetails.content}
            onChange={(e) => onChange(e, "content")}
            rows={10}
            className="bg-gray-200 rounded-lg p-3 text-gray-800 w-full"
            placeholder="Blog content ..."
          />
        </div>
        <div className="flex justify-between items-center mt-5">
          <button
            className="bg-gray-300 py-2 flex justify-center items-center px-6 hover:bg-gray-400 hover:text-white rounded-xl font-medium"
            type="submit"
          >
            Publish
          </button>
          <button
            className="py-2 px-6 border rounded-xl border-gray-300 font-medium hover:bg-gray-400 hover:text-white"
            type="button"
            onClick={onCancelClick}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEditBlog;
