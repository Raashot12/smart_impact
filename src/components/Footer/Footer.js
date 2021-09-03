import React from "react"
import { Link } from "react-router-dom"
// icons
import TwitterIcon from "../Icons/TwitterIcon"
import FacebookIcon from "../Icons/FacebookIcon"
import InstagramIcon from "../Icons/InstagramIcon"
import Linkedin from "../Icons/LinkedInIcon"
// import YoutubeIcon from "../Icons/YoutubeIcon"
import SamartImpact from "../Icons/SamartImpact"
import logo from "../../assests/images/Logo.png"
// styles
import "./Footer.css"
import { Container } from "@material-ui/core"

const footerLinks = [
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Build & Dev",
    href: "/build-dev",
  },
  {
    title: "Education",
    href: "/education",
  },
  {
    title: "Contact Us",
    href: "/contact-us",
  },
  {
    title: "FAQs",
    href: "/faqs",
  },
]

export const getSocialLinks = fillColor => {
  return [
    {
      icon: <TwitterIcon fillColor={fillColor} />,
      alt: "samar-twitter channel",
      href: "https://twitter.com/trysamar",
    },
    {
      icon: <FacebookIcon fillColor={fillColor} />,
      alt: "samar-facebook channel",
      href: "https://fb.com/trysamar",
    },
    {
      icon: <InstagramIcon fillColor={fillColor} />,
      alt: "samar-instagram channel",
      href: "https://instagram.com/trysamar",
    },
    {
      icon: <Linkedin fillColor={fillColor} />,
      alt: "samar-linkedin channel",
      href: "https://www.linkedin.com/trysamar",
    },
  ]
}

const Footer = ({ bgVariant = "dark" }) => {
  const fillColor = bgVariant === "light" ? "#1C1D1A" : "#C4C4C4"
  const logoFillColor = bgVariant === "light" ? "#3DDC84" : "#FFFFFF"
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
                      <Link to={link.href}>{link.title}</Link>
                    ))}
                  </div>
                  <ul className="d-flex footer-social-icons pt-absolute">
                    {getSocialLinks(fillColor).map(socialLink => (
                      <Link target="_blank" to={socialLink.href}>
                        {socialLink.icon}
                      </Link>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <hr className="divider" />
            <p className="footer-main-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              dictum felis quis placerat bibendum. Maecenas pharetra tortor
              tristique nisi ultricies, quis ultricies lectus vulputate.
              <br></br>
              <br></br> Maecenas lacinia lacus in viverra gravida. Vestibulum ut
              mi in nisi laoreet viverra eu ultricies ante. Cras mollis ex
              neque, non pharetra ex ultricies auctor. Integer id dapibus orci,
              id volutpat diam. Sed ac dolor sed nibh pellentesque malesuada nec
              et ligula. Sed in varius mauris, tincidunt auctor felis. Nunc
              euismod vel augue at accumsan. Nullam condimentum elit nisi,
              venenatis hendrerit nisi lobortis eget. In cursus pulvinar
              eleifend. Nulla tincidunt, dolor id facilisis porta, turpis dolor
              aliquet neque, in malesuada felis sem non dolor. Ut semper, purus
              nec mattis sodales, nisl nulla posuere eros, at dignissim nisl
              enim quis arcu.<br></br>
              <br></br> Nunc suscipit, leo a vehicula faucibus, ex diam porta
              arcu, ut euismod risus ante id arcu. Vestibulum fermentum
              venenatis gravida. Etiam nibh eros, pretium sit amet diam ut,
              tempus congue dolor. Donec laoreet interdum dui, nec suscipit
              ipsum pulvinar nec. In id risus in justo dictum condimentum. Sed
              et ullamcorper nisi. Mauris ultricies sapien id elit luctus
              bibendum. Nam pharetra, dolor et volutpat congue, sapien metus
              blandit nulla, ut tincidunt est risus sed enim. In pharetra justo
              eros, et ultrices leo suscipit porta. Phasellus sed nisi at erat
              aliquet sagittis. Vestibulum aliquam massa a eros pulvinar, quis
              varius orci elementum. Praesent tincidunt dolor mi, et faucibus
              sem fringilla at. Nulla facilisi. Curabitur accumsan iaculis odio,
              ut molestie eros lobortis vitae. <br></br>
              <br></br>Nunc suscipit, leo a vehicula faucibus, ex diam porta
              arcu, ut euismod risus ante id arcu. Vestibulum fermentum vene. By
              using this website, you accept our{" "}
              <Link to="/terms-of-use" className="term-policy">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link to="/data-privacy" className="term-policy">
                FAQs
              </Link>
              .
            </p>
          </div>
        </Container>
      </section>
      <section className="footer-bottom text-white text-center">
        <section className=" container-lg ">
          <p className="footer-last-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            <br className="non-brake"></br>
            Praesent tempor suscipit risus, non aliquam felis eleifend eu.
            <br></br>
            <span className="brake">
              Cras tincidunt tellus sit amet leo luctus auctor.Nullam viverra
              sollicitudin velit. In luctus maximus maximus. Maecenas id diam
              nec felis molestie ultrices.
            </span>
          </p>
        </section>
      </section>
    </>
  )
}

export default Footer
