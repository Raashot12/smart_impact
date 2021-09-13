import React from "react"
import Navbar from "./components/Navbar/Navbar"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Welcome from "./components/Navbar/Welcome"
import Home from "./pages/Home.jsx"
import Footer from "./components/Footer/Footer.jsx"
import "./styles/bootstrap.css"
import CompanyDetails from "./components/CompanyDetails/CompanyDetails"
import Education from "./pages/Education"
import BuildDev from "./pages/BuildDev";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Privacy from "./pages/Privacy";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Welcome />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about-us" exact component={CompanyDetails} />
          <Route path="/education" exact component={Education} />
          <Route path="/build-dev" exact component={BuildDev} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/contact-us" exact component={Contact} />
          <Route path="/privacy" exact component={Privacy} />
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}
