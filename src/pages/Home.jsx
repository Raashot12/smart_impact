import React from "react";
import Hero from "../components/HeroSection/Hero";
import OurService from "../components/GlobalMiddleText/OurService";
import PopularNews from "../components/PopularNews/PopularNews";
import EudcationNews from "../components/EudcationNews/EudcationNews";
import BuildAndDevelopement from "../components/BuildAndDevelopment/BuildAndDevelopement";
import Team from "../components/Team/Team";
import ScrollToTop from "../components/ScrollToTop";
import NewsLetter from "../components/NewsLetter/NewsLetter";

const Home = () => {
  return (
    <div>
      <ScrollToTop>
        <Hero></Hero>
        <OurService></OurService>
        <PopularNews />
        <EudcationNews />
        <BuildAndDevelopement />
        <Team />
        <NewsLetter />
      </ScrollToTop>
    </div>
  );
};

export default Home;


