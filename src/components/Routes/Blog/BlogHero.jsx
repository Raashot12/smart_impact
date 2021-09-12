import React, { useState } from "react";
import Container from "@material-ui/core/Container";

//Icon
import SearchIcon from "../../../components/Routes/Education/Icon/SearchIcon.jsx";
//Data for education
import { blog } from "../../EudcationNews/EudcationNews.jsx";
import BlogCard from "./BlogCard.jsx";
const BlogHero = () => {
  const [searchData, setSearchData] = useState(blog);
  const [faqtitle, setFaqTitle] = useState("");

  const search = e => {
    const keyword = e.target.value;
    if (keyword !== "") {
      const results = blog.filter(question => {
        return (
          question.title.trim().toLowerCase().includes(keyword.toLowerCase()) ||
          question.title.toLowerCase().startsWith(keyword.toLowerCase())
        );
      });
      // If there is current input value then filter based on the value
      setSearchData(results);
    } else {
      setSearchData(blog);
      // If the text field is empty, show all users
    }

    setFaqTitle(keyword);
  };
  return (
    <div>
      <div className="education-hero-img" id="build-dev-hero-img">
        <Container>
          <h1>BLOG</h1>
          <form onSubmit={e => e.preventDefault()}>
            <input
              type="text"
              value={faqtitle}
              placeholder="Search"
              onChange={e => {
                search(e);
              }}
            />
            <SearchIcon />
          </form>
        </Container>
      </div>
      <Container>
        {searchData.length === 0 ? (
          <h1
            className="alert-warning text-center"
            style={{ marginTop: "1rem" }}
            role="alert"
          >
            No result found
          </h1>
        ) : (
          <div className="education-item-container">
            {searchData.map(news => {
              return <BlogCard {...news} key={news.id} />;
            })}
          </div>
        )}
        <div>
          <h3 className="ourservice">Recent Post</h3>
          <div className="underline"></div>
          <section className="education-item-container">
            {blog.slice(0, 3).map(newsinfo => {
              return <BlogCard {...newsinfo} key={newsinfo.id} />;
            })}
          </section>
        </div>
      </Container>
    </div>
  );
};

export default BlogHero;
