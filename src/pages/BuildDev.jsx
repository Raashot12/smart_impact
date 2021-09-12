import React from "react";
import BuildAndDevHero from "../components/Routes/BuildAndDev/BuildAndDevHero";

import ScrollToTop from "../components/ScrollToTop";

const BuildDev = () => {
  return (
    <div>
      <ScrollToTop>
        <BuildAndDevHero></BuildAndDevHero>
      </ScrollToTop>
    </div>
  );
};

export default BuildDev;
