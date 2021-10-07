import React from "react";
import Container from "@material-ui/core/Container";
import "./CompanyDetails.css";
import Team from "../../components/Team/Team";
import Accordion from "./Accordion";
// SVG
import aboutus from "../../assests/images/aboutus.svg";
import chooseus from "../../assests/images/chooseus.svg";
import mission from "../../assests/images/mission.svg";
import believe from "../../assests/images/believe.svg";
import strenght from "../../assests/images/strenght.svg";
import ScrollToTop from "../ScrollToTop";

const aboutusdata = [
  {
    title: "About us",
    content:
      "Smartimpact Consults Ltd is a consultancy that helps organisations, individuals to achieve exceptional goals by findings and applying practical solutions to complex business and people's challenges.",
    img: aboutus,
    id: 1,
  },

  {
    title: "Why to Choose Us?",
    content:
      "We provide ourselves on helping you to deliver exceptional business results within a short time frame which have a long lasting impact.",
    img: chooseus,
    id: 2,
  },
  {
    title: "Our Mission",
    content:
      "We aim to develop relationship that make a positive difference in our customers life. We aim to build a strong and profitable maid service by delivering to our customers a professional service that is always fair, efficient and responsive. ",
    img: mission,
    id: 3,
  },
  {
    title: "Our Vision",
    content:
      "We are committed to building the loyalty of our customer and ensuring that the satisfaction of there needs is central to everything we do.",
    img: mission,
    id: 4,
  },
  {
    title: "What We Believe",
    content:
      "We believe that bold steps define the future and that doing the right things is rarely easy but always worth it",
    img: believe,
    id: 5,
  },
  {
    title: "Passion & Commitment",
    content:
      "   We have a passion for results align with our clients success and a commitment to the highest level of professionalism in everything we do.",
    img: strenght,
    id: 6,
  },
];

const CompanyDetails = () => {
  return (
    <div>
      <ScrollToTop>
        <div className="about-hero-img">
          <Container>
            <h1>ABOUT US</h1>
          </Container>
        </div>
        <Container>
          {aboutusdata.map(about => {
            const { title, content, id } = about;
              return (
                <Accordion
                  title={title}
                  content={content}
                  key={ id }
                  id={`${id}`}
                />
              );
            
          })}
        </Container>
        <Team />
      </ScrollToTop>
    </div>
  );
};

export default CompanyDetails;
