import React from "react";
import Container from "@material-ui/core/Container";
import Styles from "../Navbar/Navbar.module.css";
import moment from "moment";
const Welcome = () => {
  const date = new Date();

  return (
    <Container>
      <div className={Styles.centralizedwelcome}>
        <p className={Styles.welcome}>Welcome to Smart Impact Consults LTD.</p>
        <p className={Styles.date}>{moment(date).format("Do MMMM, YYYY")}</p>
      </div>
    </Container>
  );
};

export default Welcome;
