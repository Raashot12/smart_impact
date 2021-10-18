import React from "react";
import ContactSection from "../components/Routes/Contact/ContactSection";

import ScrollToTop from "../components/ScrollToTop";

const Contact = () => {
  return (
    <div className="contact-us-grand">
      <ScrollToTop>
        <ContactSection></ContactSection>
      </ScrollToTop>
    </div>
  );
};

export default Contact;
