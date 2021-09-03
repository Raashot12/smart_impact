import React from "react"
import Container from "@material-ui/core/Container"
import "./CompanyDetails.css"
import aboutus from "../../assests/images/aboutus.svg"
import chooseus from "../../assests/images/chooseus.svg"
import mission from "../../assests/images/mission.svg"
import believe from "../../assests/images/believe.svg"
import strenght from "../../assests/images/strenght.svg"
const CompanyDetails = () => {
  return (
    <div>
      <Container>
        <div className="companydetails">
          <section className="details-one">
            <h3 className="details-of-smart">ABOUT US</h3>

            <div>
              <img src={aboutus} alt="about us" height="200px" width="100%" />
            </div>
            <p>
              Smartimpact Consults Ltd is a consultancy that helps
              organisations, individuals to achieve exceptional goals by
              findings and applying practical solutions to complex business and
              people's challenges.
            </p>
          </section>
          <section className="details-two">
            <h3 className="details-of-smart">WHY TO CHOSE US ?</h3>

            <div>
              <img src={chooseus} alt="about us" height="200px" width="100%" />
            </div>
            <p>
              We provide ourselves on helping you to deliver exceptional
              business results within a short time frame which have a long
              lasting impact.
            </p>
          </section>
          <section className="details-three">
            <h3 className="details-of-smart">OUR MISSION</h3>

            <div>
              <img src={mission} alt="about us" height="200px" width="100%" />
            </div>
            <p>
              Our mission is to help our clients create such high level of value
              that together we set new standards of excellence.
            </p>
          </section>
        </div>
        <CompanyDetailtwo />
      </Container>
    </div>
  )
}

export default CompanyDetails

const CompanyDetailtwo = () => {
  return (
    <div>
      <div className="companydetails-two">
        <section className="details-one">
          <h3 className="details-of-smart">WHAT WE BELIEVE</h3>

          <div>
            <img src={believe} alt="about us" height="200px" width="100%" />
          </div>
          <p>
            We believe that bold steps define the future and that doing the
            right things is rarely easy but always worth it.
          </p>
        </section>
        <section className="details-two">
          <h3 className="details-of-smart">PASSION & COMMITMENT</h3>

          <div>
            <img src={strenght} alt="about us" height="200px" width="100%" />
          </div>
          <p>
            We have a passion for results align with our clients success and a
            commitment to the highest level of professionalism in everything we
            do.
          </p>
        </section>
      </div>
    </div>
  )
}
