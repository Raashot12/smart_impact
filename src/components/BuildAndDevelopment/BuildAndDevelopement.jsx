import React, { useContext } from "react"
import CenterContent from "../../Utilities/CenterContent"
import Container from "@material-ui/core/Container"
import aboutus from "../../assests/images/aboutus.svg"
import { Link } from "react-router-dom"
import moment from "moment";
import { Context } from "../../store/GlobalStateProvider";
import Loading from "../../Utilities/Loading";
const blog = [
  {
    img: aboutus,
    title: "NYSC Camp Orientation Begin Today",
    content:
      "Maecenas lacinia lacus in viverra gravida. Vestibulum ut mi in nisi laoreet viverra eu ultricies ante. Cras mollis ex neque.",
    date: "3rd September, 2021",
    id: 1,
  },
  {
    img: aboutus,
    title: "LASU well-known Killed",
    content:
      "Maecenas lacinia lacus in viverra gravida. Vestibulum ut mi in nisi laoreet viverra eu ultricies ante. Cras mollis ex neque.",
    date: "1st September, 2021",
    id: 2,
  },
  {
    img: aboutus,
    title: "Real Estate Land at Ibadan",
    content:
      "Maecenas lacinia lacus in viverra gravida. Vestibulum ut mi in nisi laoreet viverra eu ultricies ante. Cras mollis ex neque.",
    date: "1st September, 2021",
    id: 3,
  },
  {
    img: aboutus,
    title: "UI Admission form is out",
    content:
      "Maecenas lacinia lacus in viverra gravida. Vestibulum ut mi in nisi laoreet viverra eu ultricies ante. Cras mollis ex neque.",
    date: "4th September, 2021",
    id: 3,
  },
  {
    img: aboutus,
    title: "Lagos is in mess as Lekki is fluided with water",
    content:
      "Maecenas lacinia lacus in viverra gravida. Vestibulum ut mi in nisi laoreet viverra eu ultricies ante. Cras mollis ex neque.",
    date: "4th September, 2021",
    id: 4,
  },
]
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
                  <button>Read More...</button>
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
