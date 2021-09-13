import React from "react";
import ContactSection from "../components/Routes/Contact/ContactSection";

import ScrollToTop from "../components/ScrollToTop";

const Contact = () => {
  return (
    <div>
      <ScrollToTop>
        <ContactSection></ContactSection>
      </ScrollToTop>
    </div>
  );
};

export default Contact;
