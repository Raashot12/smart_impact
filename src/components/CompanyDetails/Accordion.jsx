import React, { useState } from "react"

// icons
import ArrowDownIcon from "../Icons/ArrowDownIcon"
import ArrowUpIcon from "../Icons/ArrowUpIcon"

const Accordion = ({ title, content, id, img }) => {
  const [isIopen, setIsopen] = useState(false)
  const handleClose = () => {
    setIsopen(prev => {
      return !prev
    })
  }
  return (
    <div>
      <div className=" accordion-bg" key={id}>
        <div className="accordion-space-up">
          <div
            className="accordion-title-container"
            id={`${id}`}
            onClick={handleClose}
          >
            <h3 className="accordion-title-bar">{title}</h3>
            <span>{isIopen ? <ArrowUpIcon /> : <ArrowDownIcon />}</span>
          </div>
          <div className={`accordion-content ${isIopen && "active-accordion"}`}>
            {content}
          </div>

          <div className="underline-accordion" id="accordion-ruler"></div>
        </div>
      </div>
    </div>
  )
}

export default Accordion
