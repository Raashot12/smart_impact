/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./BuildSingle.css"
import moment from "moment";
import styled from "styled-components";
import imgbanner from "../assests/images/singlepost.png";
import Container from "@material-ui/core/Container";
import { Context } from "../store/GlobalStateProvider";
import Loading from "../Utilities/Loading";
import { useParams, useHistory } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import Contact from "../components/ContactForm/Contact";
import MDEditor from "@uiw/react-md-editor";


const BuildSingle = () => {
    const { build, isLoaded, err, buildLength, educationLength } =
        useContext( Context );
    const [errMessage, setErrormessage] = useState( null );
    const [componentIsLoading, setCompontentIsloading] = useState( false );
    const [singleData, setSingleData] = useState( [] );
    const { id } = useParams();
    const history = useHistory();
    const EducationDetailPage = async () => {
        try {
            const response = await axios.get(
                `${ process.env.REACT_APP_BASE_URL }articles?id=${ id }`
            );
            const data = await response.data;
            console.log( data );
            setSingleData( data );
            setCompontentIsloading( true );
        } catch ( error ) {
            setErrormessage( error.message );
            setCompontentIsloading( true );
        }
    };
    useEffect( () => {
        EducationDetailPage();
    }, [id] );
    if ( errMessage ) {
        return <h3 className="text-center alert alert-danger">{ errMessage }</h3>;
    }
    if ( !componentIsLoading ) {
        return <Loading />;
    }
    return (
        <>
            <ScrollToTop>
                { singleData.map( single => {
                    return (
                        <div key={ single.id }>
                            <SinglePostContainer>
                                <Container>
                                    <div className="faded-card-container">
                                        <h4 className="title-singlepost">{ single.title }</h4>
                                    </div>
                                </Container>
                            </SinglePostContainer>
                            <Container>
                                <div>
                                    <div className="text-navigate-container">
                                        <p>Home </p>
                                        <i className="fas fa-angle-double-right"></i>
                                        <p>{ single.title } </p>
                                    </div>
                                    <div className="parent-container-article">
                                        <div className="article-container">
                                            <img src={ single.image?.url } alt="" height="auto" width="100%" />
                                            <div className="posted-flex-container">
                                                <p className="date-posted">Posted on { moment( single.date ).format( "LL" ) }</p>
                                                <div className="item-flex-container-for-singlepost">
                                                    <div className="circle-gray"></div>
                                                    <p>By { single.author.name }</p>
                                                </div>
                                                <div className="item-flex-container-for-singlepost">
                                                    <div className="circle-gray"></div>
                                                    <p>on { single.category.name }</p>
                                                </div>
                                            </div>
                                            <p className="aritcle-content-for-singlepage">
                                                <MDEditor.Markdown source={ single.content } />
                                            </p>
                                            <div className="mobile-contact-form-desktop">
                                                <Contact />
                                            </div>
                                        </div>
                                        <div className="article-sidebar">
                                            <h3>CATEGORIES</h3>
                                            <hr></hr>
                                            <div
                                                onClick={ () => history.push( "/education" ) }
                                                style={ {
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                    alignItems: "center",
                                                    cursor: "pointer",
                                                } }
                                            >
                                                <p>Education</p>
                                                <span>({ educationLength.length })</span>
                                            </div>
                                            <hr></hr>
                                            <div
                                                onClick={ () => history.push( "/build-dev" ) }
                                                style={ {
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                    alignItems: "center",
                                                    cursor: "pointer",
                                                } }
                                            >
                                                <p>Build & Development</p>
                                                <span>({ buildLength.length })</span>
                                            </div>
                                            <hr></hr>
                                            <section className="trending-section">
                                                <h3>TRENDING NOW</h3>
                                                <hr></hr>
                                                <div>
                                                    { err ? (
                                                        <h3 className="text-center alert alert-danger">
                                                            { err }
                                                        </h3>
                                                    ) : !isLoaded ? (
                                                        <Loading />
                                                    ) : (
                                                                build.slice( 0, 4 ).map( buildpage => {
                                                            return (
                                                                <div className="sidebar-cards-detailed-page" key={ buildpage.id } onClick={ () => history.push( `/build-dev/page/${ buildpage.id }` ) }>
                                                                    <img src={ buildpage.image?.url } alt="" width="100%" height="250px" />
                                                                    <div className="text-container-sidebar">
                                                                        <h3> { buildpage.title }</h3>
                                                                        <p>{ moment( buildpage.date ).format( "LL" ) }</p>
                                                                    </div>
                                                                </div>
                                                            );
                                                        } )
                                                    ) }
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                                <div className="mobile-contact-form">
                                    <Contact />
                                </div>
                            </Container>
                        </div>
                    );
                } ) }
            </ScrollToTop>
        </>
    );
};

export default BuildSingle;

const SinglePostContainer = styled.div`
  width: 100%;
  background-image: url(${ imgbanner });
  height: 307px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`;


