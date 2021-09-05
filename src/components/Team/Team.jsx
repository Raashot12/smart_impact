import React, { useState } from "react";
import teams from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import CenterContent from "../../Utilities/CenterContent";
import Container from "@material-ui/core/Container";
import "./Team.css";
import { useSwipeable } from "react-swipeable";
const Team = () => {
  const [index, setIndex] = useState(0);
  const { name, role, image, text } = teams[index];

  const checkNumnber = number => {
    if (number > teams.length - 1) {
      return 0;
    }
    if (number < 0) {
      return teams.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex(index => {
      let newIndex = index + 1;
      return checkNumnber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex(index => {
      let newIndex = index - 1;
      return checkNumnber(newIndex);
    });
  };
  const handlers = useSwipeable({
    onSwipedLeft: () => nextPerson(index + 1),
    onSwipedRight: () => prevPerson(index - 1),
  });
  const randomperson = () => {
    let randomNumber = Math.floor(Math.random() * teams.length);
    console.log(randomNumber);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumnber(randomNumber));
  };
  return (
    <div>
      <Container>
        <CenterContent>
          <h3 className="ourservice">MEET STAKEHOLDERS</h3>
          <div className="underline"></div>
        </CenterContent>
        <article className="review" {...handlers}>
          <div className="img-container">
            <img src={image} alt="profile display" className="person-img" />
            <span className="quote-icon">
              <FaQuoteRight />
            </span>
          </div>
          <h4 className="author">{name}</h4>
          <p className="job">{role}</p>
          <p className="info">{text}</p>
          <div className="button-container">
            <button className="prev-btn" onClick={prevPerson}>
              <FaChevronLeft />
            </button>
            <button className="next-btn" onClick={nextPerson}>
              <FaChevronRight />
            </button>
          </div>
          <button className="random-btn" onClick={randomperson}>
            Suprise me
          </button>
        </article>
      </Container>
    </div>
  );
};

export default Team;
