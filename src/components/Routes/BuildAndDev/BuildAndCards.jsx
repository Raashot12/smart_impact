import React from "react";
import moment from "moment";
import { Link } from "react-router-dom"
const BuildAndCards = ( { date, title, description, image, id } ) => {
  return (
    <div className="education-news-cards">
      <article>
        <img src={ image?.url } height="150px" width="100%" alt="card news blog" />
        <h4>{title}</h4>
        <p>{ description }</p>
        <p style={ { textAlign: "right" } }>{ moment( date ).format( "LL" ) }</p>
        <Link to={ `build-dev/page/${ id }` }> <button>Read More...</button></Link>
      </article>
    </div>
  );
};

export default BuildAndCards;