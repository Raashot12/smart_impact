import React from "react";
import "./HeroEducation.css";
const EducationCards = ({ img, date, title, content }) => {
  return (
    <div className="education-news-cards">
      <article>
        <img src={img} height="150px" width="100%" alt="card news blog" />
        <h4>{title}</h4>
        <p>{content}</p>
        <p style={{ textAlign: "right" }}>{date}</p>
        <button>Read More...</button>
      </article>
    </div>
  );
};

export default EducationCards;
