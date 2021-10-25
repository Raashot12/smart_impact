import React from "react";
import styled from "styled-components";
import imgbanner from "../../assests/images/singlepost.png";
import Container from "@material-ui/core/Container";
import articleimage from "./../../assests/images/articleimage.png";
import "./SinglePost.css";

const SinglePost = () => {
  return (
    <div>
      <SinglePostContainer>
        <Container>
          <div className="faded-card-container">
            <h4 className="title-singlepost">
              NYSC Camp Orientation Begin Today
            </h4>
          </div>
        </Container>
      </SinglePostContainer>
      <Container>
        <div>
          <div className="text-navigate-container">
            <p>Home </p>
            <i className="fas fa-angle-double-right"></i>
            <p>NYSC Camp Orientation Begin Today </p>
          </div>
          <div className="parent-container-article">
            <div className="article-container">
              <img src={articleimage} alt="" height="auto" width="100%" />
              <div className="posted-flex-container">
                <p className="date-posted">Posted on August 20, 2015</p>
                <div className="item-flex-container-for-singlepost">
                  <div className="circle-gray"></div>
                  <p>By Admin</p>
                </div>
                <div className="item-flex-container-for-singlepost">
                  <div className="circle-gray"></div>
                  <p>on Education</p>
                </div>
              </div>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don’t look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn’t anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary,
                making this the first true generator on the Internet. It uses a
                dictionary of over 200 Latin words, combined with a handful of
                model sentence structures, to generate Lorem Ipsum which looks
                reasonable. The generated Lorem Ipsum is therefore always free
                from repetition, injected humour, or non-characteristic words
                etc.
                <br></br>
                <br></br>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don’t look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn’t anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary,
                making this the first true generator on the Internet. It uses a
                dictionary of over 200 Latin words, combined with a handful of
                model sentence structures, to generate Lorem Ipsum which looks
                reasonable. The generated Lorem Ipsum is therefore always free
                from repetition, injected humour, or non-characteristic words
                etc.
                <br></br>
                <br></br>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don’t look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn’t anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary,
                making this the first true generator on the Internet. It uses a
                dictionary of over 200 Latin words, combined with a handful of
                model sentence structures, to generate Lorem Ipsum which looks
                reasonable. The generated Lorem Ipsum is therefore always free
                from repetition, injected humour, or non-characteristic words
                etc.
              </p>
            </div>
            <div className="article-sidebar">
              <h3>Categories</h3>
              <hr></hr>
              <div style={ { display: "flex", justifyContent: "space-between", alignItems: "center" } }>
                <p>Education</p>
                <span>(2)</span>
              </div>
              <hr></hr>
              <div style={ { display: "flex", justifyContent: "space-between", alignItems: "center" } }>
                <p>Build & Development</p>
                <span>(5)</span>
              </div>
              <hr></hr>
              <section className="trending-section">
                <h3>
                  Trending
                </h3>

              </section>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SinglePost;

const SinglePostContainer = styled.div`
  width: 100%;
  background-image: url(${imgbanner});
  height: 307px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`;
