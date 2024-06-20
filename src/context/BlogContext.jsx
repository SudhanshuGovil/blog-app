import { createContext, useState } from "react";

export const BlogContext = createContext();

const BlogProvider = ({ children }) => {
  const [blogId, setBlogId] = useState();
  return (
    <BlogContext.Provider value={{ blogId, setBlogId }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogProvider;
