import React, { useState } from "react"
import teams from "./data"
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa"
import Container from "@material-ui/core/Container"
import "./Team.css"
const Team = () => {
  String.prototype.camelCase = function () {
    return this.split(" ")
      .map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1)
      })
      .join(" ")
  }
  const [index, setIndex] = useState(0)
  const { name, role, image, text } = teams[index]
  return (
    <div>
      <Container>
        <article className="review">
          <div className="img-container">
            <img src={image} alt="profile display" className="person-img" />
            <span className="quote-icon">
              <FaQuoteRight />
            </span>
          </div>
          <h4 className="author">{name}</h4>
          <p className="job">{role}</p>
          <p className="info">{text.camelCase()}</p>
        </article>
      </Container>
    </div>
  )
}

export default Team
