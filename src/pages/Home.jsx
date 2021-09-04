import React from "react"
import Hero from "../components/HeroSection/Hero"
import OurService from "../components/GlobalMiddleText/OurService"
import PopularNews from "../components/PopularNews/PopularNews"
import EudcationNews from "../components/EudcationNews/EudcationNews"
import BuildAndDevelopement from "../components/BuildAndDevelopment/BuildAndDevelopement"
import Team from "../components/Team/Team"

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <OurService></OurService>
      <PopularNews />
      <EudcationNews />
      <BuildAndDevelopement />
      <Team />
    </div>
  )
}

export default Home
