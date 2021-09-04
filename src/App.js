import React from "react"
import Navbar from "./components/Navbar/Navbar"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Welcome from "./components/Navbar/Welcome"
import Home from "./pages/Home"
import Footer from "./components/Footer/Footer"
import "./styles/bootstrap.css"
import CompanyDetails from "./components/CompanyDetails/CompanyDetails"
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Welcome />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about-us" exact component={CompanyDetails} />
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  )
}
