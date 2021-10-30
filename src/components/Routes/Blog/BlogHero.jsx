import React, { useState, useContext } from "react";
import Container from "@material-ui/core/Container";

//Icon
import SearchIcon from "../../../components/Routes/Education/Icon/SearchIcon.jsx";
import BlogCard from "./BlogCard.jsx";
import { Context } from "../../../store/GlobalStateProvider";
import Loading from "../../../Utilities/Loading";


const BlogHero = () => {
  const { blogData, blogDataPage, isLoaded, err, setBlogData } = useContext( Context )
  const [faqtitle, setFaqTitle] = useState( "" );
  const search = e => {
    const keyword = e.target.value;
    if ( keyword !== "" ) {
      const results = blogData.filter( question => {
        return (
          question.title.trim().toLowerCase().includes( keyword.toLowerCase() ) ||
          question.description.toLowerCase().startsWith( keyword.toLowerCase() )
        );
      } );
      // If there is current input value then filter based on the value
      setBlogData( results );
      console.log( results )
    } else {
      setBlogData( blogDataPage );
    }
    setFaqTitle( keyword );
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
              onChange={ search }
            />
            <SearchIcon />
          </form>
        </Container>
      </div>
      <Container>
        { blogData.length === 0 && (
          <h1
            className="alert-warning text-center"
            style={ { marginTop: "1rem" } }
            role="alert"
          >
            No result found
          </h1>
        ) }
        {
          <div className="education-item-container">
            { err ? (
              <h3 className="text-center alert alert-danger">{ err }</h3>
            ) : !isLoaded ? (
              <Loading />
              ) : blogData[0] !== "default" ? blogData.map( news => {
              return <BlogCard { ...news } key={ news.id } />;
            } ) : null
            }
          </div>
        }
      </Container>
    </div>
  );
};

export default BlogHero;
