import React from "react";
import BlogHero from "../components/Routes/Blog/BlogHero";

import ScrollToTop from "../components/ScrollToTop";

const Blog = () => {
  return (
    <div>
      <ScrollToTop>
        <BlogHero></BlogHero>
      </ScrollToTop>
    </div>
  );
};

export default Blog;
