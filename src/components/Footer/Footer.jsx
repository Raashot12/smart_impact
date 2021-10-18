/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, useHistory } from "react-router-dom";
// icons
import TwitterIcon from "../Icons/TwitterIcon";
import FacebookIcon from "../Icons/FacebookIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import YouTubeIcon from "../Icons/YouTubeIcon";
// import YoutubeIcon from "../Icons/YoutubeIcon"
import SamartImpact from "../Icons/SamartImpact";

// styles
import "./Footer.css";
import { Container } from "@material-ui/core";

const footerLinks = [
  {
    title: "Build & Dev",
    href: "/build-dev",
  },
  {
    title: "Education",
    href: "/education",
  },
  {
    title: "About Us",
    href: "/about-us",
  },
  {
    title: "Contact Us",
    href: "/contact-us",
  },
];

export const getSocialLinks = fillColor => {
  return [
    {
      icon: <InstagramIcon fillColor={fillColor} />,
      alt: "samartimpact-instagram channel",
      href: "https://www.instagram.com/smartimpact_ng?r=nametag",
      id: 4,
    },
    {
      icon: <YouTubeIcon fillColor={fillColor} />,
      alt: "samartimpact-linkedin channel",
      href: undefined,
      id: 3,
    },

    {
      icon: <FacebookIcon fillColor={fillColor} />,
      alt: "samartimpact-facebook channel",
      href: "https://www.facebook.com/Smartimpact.ng/",
      id: 2,
    },
    {
      icon: <TwitterIcon fillColor={fillColor} />,
      alt: "samartimpact-twitter channel",
      href: undefined,
      id: 1,
    },
  ];
};

const Footer = ({ bgVariant = "dark" }) => {
  const fillColor = bgVariant === "light" ? "#1C1D1A" : "#C4C4C4";
  const history = useHistory();
  const getYear = new Date().getFullYear();
  console.log(getYear);
  return (
    <>
      <section className={`footer-container footer-container-${bgVariant}`}>
        <Container>
          <div className="add-padding-for">
            <div>
              <div className="footer-items">
                <div>
                  <Link to="/">
                    <SamartImpact />
                  </Link>
                </div>
                <div className="d-flex flex-column flex-lg-row justify-content-lg-between position-relative">
                  <div className="d-flex justify-content-between footer-links">
                    {footerLinks.map(link => (
                      <Link to={link.href} key={link.href}>
                        {link.title}
                      </Link>
                    ))}
                  </div>
                  <ul className="d-flex footer-social-icons pt-absolute">
                    {getSocialLinks(fillColor).map(socialLink => {
                      if (socialLink.href === undefined) {
                        return (
                          <a
                            style={{ cursor: "pointer" }}
                            key={socialLink.id}
                            href={socialLink.href}
                          >
                            {socialLink.icon}
                          </a>
                        );
                      } else {
                        return (
                          <a
                            style={{ cursor: "pointer" }}
                            target="_blank"
                            href={socialLink.href}
                            rel="noreferrer"
                            key={socialLink.id}
                          >
                            {socialLink.icon}
                          </a>
                        );
                      }
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="footer-bottom text-white text-center">
        <section className=" container-lg ">
          <p className="footer-last-text">
            Copyright © {getYear}. All rights reserved.
            <a onClick={() => history.push("/privacy")}> Privacy Policy</a>
          </p>
        </section>
      </section>
    </>
  );
};

export default Footer;
