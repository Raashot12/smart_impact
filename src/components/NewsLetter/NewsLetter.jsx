import React from "react";
import "./NewsLetter.css";
import Container from "@material-ui/core/Container";
import Envelop from "../Icons/Envelop";
const NewsLetter = () => {
  return (
    <div>
      <Container>
        <div className="newsletter-container">
          <div className="inner-newsletter-flex">
            <div style={{ display: "flex" }} className="flex-item-newsletter">
              <Envelop></Envelop>
              <div className="newsletter-text-holder">
                <h3>GET OUR NEWSLETTER</h3>
                <p>Click the provided button link to get started</p>
              </div>
            </div>
            <div>
              <button
                onClick={() =>
                  window.open(
                    "https://docs.google.com/forms/d/e/1FAIpQLSefKhPm8bDmK3D7v8htaNx6l1wgzuAh9XoMAbaXT0aRu5Sivw/viewform?usp=sf_link"
                  )
                }
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NewsLetter;
