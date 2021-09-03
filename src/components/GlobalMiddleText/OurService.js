import React from "react"
import Container from "@material-ui/core/Container"
import "./OurService.css"
import CenterContent from "../../Utilities/CenterContent"
import educationSvg from "../../assests/images/education.svg"
import housing from "../../assests/images/housing.svg"
import Arrow from "./Arrow"

const OurService = () => {
  return (
    <div>
      <Container>
        <CenterContent>
          <h3 className="ourservice">OUR SERVICES</h3>
          <div className="underline"></div>
        </CenterContent>
        <div className="ourservicecontainer">
          <article className="ourserviceflexitem spacecard-bottom">
            <img
              src={educationSvg}
              alt="eduction icon"
              width="100%"
              height="238px"
            />
            <h2>EDUCATION </h2>
            <hr className="dividercard"></hr>
            <div className="ourserviceslist space-bottom-card">
              <span>✔️</span>
              <p>EDUCATIONAL COUNSELLING</p>
            </div>
            <div className="ourserviceslist space-bottom-card">
              <span>✔️</span>
              <p>ADMISSION PROCESSING</p>
            </div>
            <div className="ourserviceslist space-bottom-card">
              <span>✔️</span>
              <p>POST UTME FORMS</p>
            </div>
            <div className="ourserviceslist space-bottom-card">
              <span>✔️</span>
              <p>ONLINE REGISTRATION</p>
            </div>
            <div className="ourserviceslist space-bottom-card">
              <span>✔️</span>
              <p>NYSC</p>
            </div>
            <div className="ourserviceslist space-bottom-card">
              <span>✔️</span>
              <p>JAMB & WAEC</p>
            </div>
            <div className="ourserviceslist space-bottom-card">
              <span>✔️</span>
              <p>NECO</p>
            </div>
            <div className="ourserviceslist space-bottom-card">
              <span>✔️</span>
              <p>ICT TRAINING</p>
            </div>
            <div className="btn-holder">
              <button className="explore-btn">
                Explore <Arrow />
              </button>
            </div>
          </article>
          <article className="ourserviceflexitem">
            <img
              src={housing}
              alt="eduction icon"
              width="100%"
              height="238px"
            />
            <h2>BUILD & DEVELPOMENT </h2>
            <hr className="dividercard"></hr>
            <div className="ourserviceslist space-bottom-card">
              <span>✔️</span>
              <p>GEOLOGICAL SERVICE</p>
            </div>
            <div className="ourserviceslist space-bottom-card">
              <span>✔️</span>
              <p>ESTATE MANAGEMENT</p>
            </div>
            <div className="ourserviceslist space-bottom-card">
              <span>✔️</span>
              <p>GRAPHICS AND BRANDING </p>
            </div>
            <div className="ourserviceslist space-bottom-card">
              <span>✔️</span>
              <p>PROJECT MANAGEMENT</p>
            </div>
            <div className="ourserviceslist space-bottom-card">
              <span>✔️</span>
              <p>ARCHITECTURE MANAGEMENT</p>
            </div>
            <div className="ourserviceslist space-bottom-card">
              <span>✔️</span>
              <p>LAND SURVEY/LAYOUT DESIGN</p>
            </div>
            <div className="ourserviceslist space-bottom-card">
              <span>✔️</span>
              <p>DEVELOPER/CONSTRUCTION</p>
            </div>

            <div className="ourserviceslist space-bottom-card">
              <span>✔️</span>
              <p>MERCHANDISING</p>
            </div>
            <div className="btn-holder-two">
              <button className="explore-btn">
                Explore <Arrow />
              </button>
            </div>
          </article>
        </div>
      </Container>
    </div>
  )
}

export default OurService
