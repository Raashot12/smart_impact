import React from "react";
import moment from "moment";
const BuildAndCards = ( {  date, title, description, image } ) => {
  return (
    <div className="education-news-cards">
      <article>
        <img src={ image?.url } height="150px" width="100%" alt="card news blog" />
        <h4>{title}</h4>
        <p>{ description }</p>
        <p style={ { textAlign: "right" } }>{ moment( date ).format( "LL" ) }</p>
        <button>Read More...</button>
      </article>
    </div>
  );
};

export default BuildAndCards;