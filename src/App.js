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
import SinglePost from "./components/SingleBlogPost/SinglePost"
import GlobalStateProvider from "./store/GlobalStateProvider"
import BuildSingle from "./SingleBuildDev/BuildSingle"


export default function App() {
  return (
    <div>
      <GlobalStateProvider>
        <BrowserRouter>
          <Welcome />
          <Navbar />
          <Switch>
            <Route path="/" exact component={ Home } />
            <Route path="/about-us" exact component={ CompanyDetails } />
            <Route path="/education" exact component={ Education } />
            <Route path="/build-dev" exact component={ BuildDev } />
            <Route path="/blog" exact component={ Blog } />
            <Route path="/contact-us" exact component={ Contact } />
            <Route path="/privacy" exact component={ Privacy } />
            <Route path="/education/page/:id" exact component={ SinglePost } />
            <Route path="/build-dev/page/:id" exact component={ BuildSingle } />
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </GlobalStateProvider>
    </div>
  );
}

// import React from "react"
// function App() {
//   const [timer, setTimer] = React.useState( 60 )

//   const start = () => {
//     setInterval( () => {
//       setTimer( timer => timer - 1 )
//       console.log( "timer value:", timer )  // ?
//     }, 1000 )
//   }

//   React.useEffect( start, [] )

//   return <p>{ timer }</p>
// }
// export default App
// import React from "react"
// class App extends React.Component {
//   constructor ( props ) {
//     // set the default internal state
//     this.state = {
//       cnt: 0,
//       hover: false
//     };
//     super( props );
//   }

//   funcs = {
//     onClick: () => {
//       this.setState( ( s ) => ( { cnt: s.cnt + 1 } ) );
//     },
//     onHover: () => {
//       this.setState( ( s ) => ( { hover: !s.hover } ) );
//     }
//   };

//   render() {
//     const s = this.state;
//     return (
//       <div { ...this.funcs }>
//         { Comp => clicks: { s.cnt }, hover: { "" + s.hover }}
//       </div>
//     );
//   }
// }
// export default App