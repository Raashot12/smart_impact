/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import Container from "@material-ui/core/Container";
import "./Contact.css";
const ContactSection = () => {
  return (
    <div>
      <Container>
        <div className="contact-container-flex">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d7912.4114919759595!2d3.903211!3d7.442474000000001!3m2!1i1024!2i768!4f13.1!4m8!3e2!4m5!1s0x1039ed62326606bb%3A0x52bf4ab92157b46!2sSango-Ojoo%20Road%2C%20Ibadan%2C%20Nigeria!3m2!1d7.4407535!2d3.9067844!4m0!5e0!3m2!1sen!2sid!4v1631457040984!5m2!1sen!2sid"
            // width="50%"
            // height="450"
            className="map-contact-page"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            lazy-loading="true"
            tabIndex="0"
          />
          <div className="flex-item-tex-content">
            <h1>Contact us</h1>
            <p>
              Smart Impact Consult Limited is available 24hours to provide
              solutions/answers to problems the company tries solving. To
              explore further beyond our website, you can join our Whatsapp
              Group and Telegram Channel to communicate with the admin.
            </p>
            <p className="address">
              Address: Water bus stop, opposite UI, Sango Road ,Ibadan.🍳
            </p>
            <h3 className="telephone-number">
              (234)<span style={{ color: "#334f7d" }}>8167975973</span> (234)
              <span style={{ color: "#334f7d" }}>8067835164</span>
            </h3>
            <span>
              <i className="fas fa-envelope message-envlope"></i>
              Info@smartimpact.ng
            </span>
            <div className="join-us-container">
              <h4>Join Us:</h4>
              <div className="icon-container-social">
                <span className="icon-border">
                  <i
                    className="fab fa-whatsapp size"
                    onClick={() =>
                      window.open(
                        "https://chat.whatsapp.com/L3EMAt36M7YFS1kjIdoGf9"
                      )
                    }
                  ></i>
                </span>
                <span className="icon-border">
                  <i
                    className="fab fa-telegram-plane size"
                    onClick={() =>
                      window.open("https://t.me/joinchat/RPspM_RIWMw3NGI0")
                    }
                  ></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactSection;
