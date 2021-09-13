import React from "react";
import ScrollToTop from "../components/ScrollToTop";
import Container from "@material-ui/core/Container";
import "../components/Routes/Contact/Contact.css";
const Privacy = () => {
  return (
    <ScrollToTop>
      <div>
        <Container>
          <div className="privacy-container">
            <h3>Privacy Policy</h3>
            <p>
              Our Commitment To You Smartimpact Consults LTD respects your
              privacy and is committed to protecting personal information
              collected from you through our website. This privacy policy
              governs the way we collect and use information, and by using the
              services on our website ('Services') you agree to be bound by this
              policy. All references within this policy to 'we/us/our' refer to
              Smartimpact Consults LTD.
            </p>
            <h3> Information We Collect </h3>
            <p>
              When you use the Services you will have the option to provide us
              with personal information, such as your email address, so that we
              may keep you informed. We use this information only in response to
              your requests and to provide the Services. <br></br> <br></br>{" "}
              When visiting our website, we may place one or more cookies (a
              small file that is stored by your browser to recognise you and
              store your preferences) on your computer. This helps us to improve
              our Services by personalising information you may want. You may
              adjust the settings on your browser to refuse cookies but some of
              the Services may not work if you do so. We may also log
              information from your computer including the existence of cookies,
              your IP address and information about your browser program in
              order to allow us to diagnose problems, administer and track your
              usage of the Services.
            </p>
            <h3> How We Use Information</h3>
            <p>
              We use the information we collect to provide the Services and to
              communicate with you. We do not rent or sell personal information
              and will only share your information in the following
              circumstances: <br></br>
              <br></br>
              1. When you have consented or directed us to share the
              information.<br></br>
              2. With service providers or affiliate companies who perform
              services on our behalf.<br></br>
              3. In order to satisfy any requirement under the law or to protect
              our rights or prevent any concerns relating to fraud or security.
              <br></br>
              4. In the event of a merger or sale of all or part of our business
              whereby personal information may be transferred as an asset of the
              business. We may share with third parties aggregate information or
              information that does not personally identify individuals.
              <br></br>
            </p>
            <h3> Communicating With You</h3>
            <p>
              If you prefer not to receive emails about our Services, you may
              opt out of such communications by following the instructions at
              the bottom of any of our emails, or by mailing us via
              info@smartimpact.ng
            </p>
            <h3> Third Parties </h3>
            <p>
              We use third parties to serve advertisements on our website and
              these third parties may use cookies or other means to help measure
              the effectiveness of their advertisements. Our website may also
              include links to other unrelated websites and/or contact forms to
              other unrelated parties which may collect personal information.
              Our privacy policy does not extend to these third parties or other
              websites and we recommend that users refer directly to these
              parties regarding their privacy policies before supplying personal
              details to these companies.
            </p>
            <h3> Safety And Security </h3>
            <p>
              Personal information is processed and stored in our databases and
              we have taken reasonable steps to secure and protect the
              information under our control, including establishing processes to
              prevent unauthorized access or disclosure of this information.
              However, whilst we make every effort to ensure the security of
              your information, we are unable to guarantee the protection of the
              information from misuse, accidental disclosure or unauthorised
              acts by others. Information provided by you may be stored or
              processed outside Nigeria.
            </p>
            <h3> Changes To Privacy Policy </h3>
            <p>
              We reserve the right to change this privacy policy at any time
              without prior notice to you. Any changes will be posted on our
              website and become effective at the time of posting. In the event
              that material changes are made that affect the use or disclosure
              of your personal information, we will make reasonable efforts to
              notify you of these changes.<br></br>
              <br></br>
              If you have any questions or comments about our privacy policy,
              please Contact us.
            </p>
          </div>
        </Container>
      </div>
    </ScrollToTop>
  );
};

export default Privacy;
