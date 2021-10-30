import React, { useState, useContext } from "react";
import Container from "@material-ui/core/Container";
//Icon
import SearchIcon from "../../../components/Routes/Education/Icon/SearchIcon.jsx";
//Data for education
import BuildAndCards from "./BuildAndCards";
import { Context } from "../../../store/GlobalStateProvider";
import Loading from "../../../Utilities/Loading";
const BuildAndDevHero = () => {
  const { build, isLoaded, err, buildPage, setBuildPage, buildDefaultData } = useContext( Context );
  const [faqtitle, setFaqTitle] = useState( "" );
  const search = e => {
    const keyword = e.target.value;
    if (keyword !== "") {
      const results = buildPage.filter( question => {
        return (
          question.title.trim().toLowerCase().includes(keyword.toLowerCase()) ||
          question.description.toLowerCase().startsWith( keyword.toLowerCase() )
        );
      });
      // If there is current input value then filter based on the value
      console.log( "hELLO WROLD" )
      setBuildPage( results );
    } else {
      setBuildPage( buildDefaultData );
    }
    setFaqTitle(keyword);
  };
  return (
    <div>
      <div className="education-hero-img" id="build-dev-hero-img">
        <Container>
          <h1>BUILD & DEVELOPMENT</h1>
          <form onSubmit={e => e.preventDefault()}>
            <input
              type="text"
              value={faqtitle}
              placeholder="Search"
              onChange={ search }
            />
            <SearchIcon />
          </form>
        </Container>
      </div>
      <Container>
        { buildPage.length === 0 && (
          <h1
            className="alert-warning text-center"
            style={{ marginTop: "1rem" }}
            role="alert"
          >
            No result found
          </h1>
        ) }
        {
          <div className="education-item-container">
            { err ? (
              <h3 className="text-center alert alert-danger">{ err }</h3>
            ) : !isLoaded ? (
              <Loading />
              ) : buildPage[0] !== "default" ? buildPage.map( news => {
              return <BuildAndCards { ...news } key={ news.id } />;
            } ) : null
            }
          </div>
        }
        <div>
          <h3 className="ourservice">Recent Post</h3>
          <div className="underline"></div>
          <section className="education-item-container">
            { build.slice( 0, 3 ).map( newsinfo => {
              return <BuildAndCards {...newsinfo} key={newsinfo.id} />;
            })}
          </section>
        </div>
      </Container>
    </div>
  );
};

export default BuildAndDevHero;
