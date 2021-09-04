import React from "react"
import Hero from "../components/HeroSection/Hero"
import OurService from "../components/GlobalMiddleText/OurService"
import PopularNews from "../components/PopularNews/PopularNews"
import EudcationNews from "../components/EudcationNews/EudcationNews"

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <OurService></OurService>
      <PopularNews />
      <EudcationNews />
    </div>
  )
}

export default Home
