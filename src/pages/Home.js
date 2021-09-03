import React from "react"
import Hero from "../components/HeroSection/Hero"
import OurService from "../components/GlobalMiddleText/OurService"
import CompanyDetails from "../components/CompanyDetails/CompanyDetails"
import PopularNews from "../components/PopularNews/PopularNews"

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <OurService></OurService>
      <CompanyDetails />
      <PopularNews />
    </div>
  )
}

export default Home
