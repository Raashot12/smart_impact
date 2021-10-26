import React, { useState, useContext } from "react";
import Container from "@material-ui/core/Container";
import "./HeroEducation.css";
//Icon
import SearchIcon from "../../../components/Routes/Education/Icon/SearchIcon.jsx";
import EducationCards from "./EducationCards";
import { Context } from "../../../store/GlobalStateProvider";
import Loading from "../../../Utilities/Loading";
const HeroEducation = () => {
  const { education, defaultEduData, educationPage, isLoaded, err, setEducationPage } = useContext( Context )
  const [faqtitle, setFaqTitle] = useState("");

  const search = e => {
    const keyword = e.target.value;
    if ( keyword !== "" ) {
      const results = educationPage.filter( question => {
        return (
          question.title.trim().toLowerCase().includes( keyword.toLowerCase() ) ||
          question.description.toLowerCase().startsWith( keyword.toLowerCase() )
        );
      } );
      // If there is current input value then filter based on the value
      setEducationPage( results );
    } else {
      setEducationPage( defaultEduData );
    }
    setFaqTitle( keyword );
  };
  return (
    <div>
      <div className="education-hero-img">
        <Container>
          <h1>EDUCATION</h1>
          <form onSubmit={e => e.preventDefault()}>
            <input
              type="text"
              value={ faqtitle }
              placeholder="Search"
              onChange={ search }
            />
            <SearchIcon />
          </form>
        </Container>
      </div>
      <Container>
        { educationPage.length === 0 && (
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
            ) : educationPage[0] !== "default" ? educationPage.map( news => {
              return <EducationCards { ...news } key={ news.id } />;
            } ) : null
            }
          </div>
        }
        <div>
          <h3 className="ourservice">Recent Post</h3>
          <div className="underline"></div>
          <section className="education-item-container">
            { education.slice( 0, 3 ).map( newsinfo => {
              return <EducationCards {...newsinfo} key={newsinfo.id} />;
            })}
          </section>
        </div>
      </Container>
    </div>
  );
};

export default HeroEducation;
