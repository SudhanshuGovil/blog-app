import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v1 as uuid } from "uuid";
import { addNewBlog, editBlog, selectors } from "../reducers/blogs";
import { useNavigate, useParams } from "react-router-dom";
import { Title } from "../components";
import { Helmet } from "react-helmet";
import * as Yup from "yup";
import { ROUTES } from "../constant";
import { Field, Form, Formik } from "formik";

const { HOME } = ROUTES;
const { selectBlogById } = selectors;

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  category: Yup.string().required("Category is required"),
  content: Yup.string().required("Content is required"),
});

const AddEditBlog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { blogId } = useParams();
  const selectedBlog = useSelector((state) => selectBlogById(state, blogId));
  const [initialValues, setInitialValues] = useState({
    blogId: uuid(),
    content: "",
    title: "",
    category: "",
    like: false,
  });

  useEffect(() => {
    if (selectedBlog) setInitialValues(selectedBlog);
  }, [selectedBlog]);

  const navigateToHome = () => navigate(HOME);

  const onSubmit = (values) => {
    if (blogId) dispatch(editBlog(values));
    else dispatch(addNewBlog(values));
    navigateToHome();
  };

  // const onChange = (e, label) =>
  //   setBlogDetails({ ...blogDetails, [label]: e.target.value });

  return (
    <div className="container mx-auto mt-10">
      <Helmet>
        <title>{selectedBlog ? "Edit blog post" : "Create new post"}</title>
      </Helmet>
      <Title
        title={selectedBlog ? "Edit post" : "Create new post"}
        showBackButton
      />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        enableReinitialize
        onSubmit={onSubmit}
      >
        {({ dirty, errors, touched, values, isValid }) => (
          <Form>
            <div>
              <div className="font-semibold my-2">Title </div>
              <Field
                name="title"
                value={values.title}
                className={`bg-gray-200 rounded-lg p-3 text-gray-800 w-full md:w-1/2 ${
                  errors.title && touched.title ? "border border-red-800" : ""
                }`}
                placeholder="Blog post title ..."
              />
              {errors.title && touched.title && (
                <div className="text-red-800 text-sm">{errors.title}</div>
              )}
            </div>
            <div className="mt-5">
              <div className="font-semibold my-2">Category </div>
              <Field
                name="category"
                className={`bg-gray-200 rounded-lg p-3 text-gray-800 w-full md:w-1/2 ${
                  errors.category && touched.category
                    ? "border border-red-800"
                    : ""
                }`}
                placeholder="Blog post category ..."
              />
              {errors.category && touched.category && (
                <div className="text-red-800 text-sm">{errors.category}</div>
              )}
            </div>
            <div className="mt-5">
              <div className="font-semibold my-2">Content </div>
              <Field
                as="textarea"
                name="content"
                rows={10}
                className={`bg-gray-200 rounded-lg p-3 text-gray-800 w-full ${
                  errors.content && touched.content
                    ? "border border-red-800"
                    : ""
                }`}
                placeholder="Blog content ..."
              />
              {errors.content && touched.content && (
                <div className="text-red-800 text-sm">{errors.content}</div>
              )}
            </div>
            <div className="flex justify-between items-center mt-5">
              <button
                disabled={!isValid || !dirty}
                className="bg-gray-300 py-2 flex justify-center items-center px-6 hover:bg-gray-400 hover:text-white rounded-xl font-medium disabled:cursor-not-allowed disabled:opacity-75"
                type="submit"
              >
                Publish
              </button>
              <button
                className="py-2 px-6 border rounded-xl border-gray-300 font-medium hover:bg-gray-400 hover:text-white"
                type="button"
                onClick={navigateToHome}
              >
                Cancel
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddEditBlog;
