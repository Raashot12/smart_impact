import React, { useContext } from "react"
import CenterContent from "../../Utilities/CenterContent"
import Container from "@material-ui/core/Container"
import { Link } from "react-router-dom"
import moment from "moment";
import { Context } from "../../store/GlobalStateProvider";
import Loading from "../../Utilities/Loading";


const BuildAndDevelopement = () => {
  const { build, err, isLoaded } = useContext( Context );
  if ( err ) {
    return <h3 className="text-center alert alert-danger">{ err }</h3>;
  }
  if ( !isLoaded ) {
    return (
      <>
        <CenterContent>
          <h3 className="ourservice">GENERAL NEWS</h3>
          <div className="underline"></div>
        </CenterContent>
        <Loading />
      </>
    );
  }
  return (
    <div>
      <Container>
        <CenterContent>
          <h3 className="ourservice">REAL ESTATE & PROPERTY</h3>
          <div className="underline"></div>
        </CenterContent>
        <div className="general-new-flex-container">
          { build.map( news => {
            return (
              <div key={ news.id } className="general-news-cards">
                <article>
                  <img
                    src={ news?.image.url }
                    height="150px"
                    width="100%"
                    alt="card news blog"
                  />
                  <h4>{ news.title }</h4>
                  <p>{ news.description }</p>
                  <p style={ { textAlign: "right" } }>
                    { moment( news.published_at ).format( "LL" ) }
                  </p>
                  <Link to={ `/build-dev/page/${ news.id }` }><button>Read More...</button></Link>
                </article>
              </div>
            )
          })}
        </div>
        <div className="view-more-btn">
          <Link to="/build-dev">
            {" "}
            <button>View More...</button>
          </Link>
        </div>
      </Container>
    </div>
  )
}

export default BuildAndDevelopement
