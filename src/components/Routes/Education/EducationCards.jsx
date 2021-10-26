import React from "react";
import "./HeroEducation.css";
import moment from "moment";
import { Link } from "react-router-dom";
const EducationCards = ( { id, date, title, description, image } ) => {

  return (
    <div className="education-news-cards">
      <article>
        <img src={ image?.url } height="150px" width="100%" alt="card news blog" />
        <h4>{title}</h4>
        <p>{ description }</p>

        <p style={ { textAlign: "right" } }>{ moment( date ).format( "LL" ) }</p>
        <Link to={ `education/${ id }` }> <button>Read More...</button></Link>
      </article>
    </div>
  );
};

export default EducationCards;
