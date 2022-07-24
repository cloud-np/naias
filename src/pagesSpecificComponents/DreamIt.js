import React, { useEffect } from "react"
import styled from "styled-components"

// Imgs
import church from "../images/church/1.jpg"
import garden from "../images/garden/1.jpg"
import naiasTopView from "../static/top-view-naias.jpg"
import gamos from "../images/gamos2.jpg"
import DreamItText from "./DreamItText"
import { StaticImage } from "gatsby-plugin-image"

const DreamItContainer = styled.article`
  /* background-color: var(--white-color); */
  background-color: var(--light-brown);
  display: block;
  position: static;
  margin-top: -8.5rem;
  padding-top: 2rem;
  width: 100%;
  height: 100%;
  overflow: hidden;

  blockquote {
    margin-top: 3rem;
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  header {
    background: url(${gamos}) no-repeat center center;
    background-size: cover;
    color: var(--white-color);
    display: grid;
    place-items: center;
    padding: 35vh 0;

    .header-text {
      text-align: center;
    }
    figcaption {
      font-size: 0.8rem;
    }
    blockquote {
      margin-top: 2rem;
      font-size: 0.8rem;
    }

    h1 {
      font-family: var(--secondary-title-font);
      font-weight: 900;
      display: flex;
      text-transform: uppercase;
      letter-spacing: 5px;
      justify-self: center;
    }

    h1,
    blockquote,
    figcaption {
      margin: 0 2rem;
    }
    blockquote {
      margin-top: 1rem;
      /* background-color: rgba(0, 0, 0, .3);
        border-radius: 1px; */
    }

    @media screen and (max-width: 690px) {
      h1 {
        font-size: 1.5rem;
      }
    }
  }

  section {
    font-family: var(--greek-paragraph-font);
  }

  .dreamItContainer {
    display: flex;
    background: rgb(194,178,153);
    background-color: #8a875e;
    /* background: linear-gradient(0deg, rgba(194,178,153,1) 0%, rgba(194,178,153,1) 18%, rgba(138,135,94,1) 18%, rgba(138,135,94,1) 100%); */
    justify-content: end;
    /* justify-content: space-between; */
    /* margin: rem; */
    .naiasImg {
      width: 45%;
      height: auto;
      justify-self: end;
      margin: 0;
      object-fit: cover;
    }
    @media screen and (max-width: 690px) {
      display: inline-block;
      .naiasImg {
        width: 100%;
        margin-bottom: -.4rem;
      }
    }
    .dreamItText {
      /* margin-right: 4rem; */
    }
  }
`

const DreamIt = () => {
  return (
    <DreamItContainer>
      <section>
        <header>
          <div className="header-text">
            <h1>Ζήστε την στιγμή</h1>
            <blockquote>
              <p>
                <i>&ldquo;Μια αστραπή η ζωή μας... μα προλαβαίνουμε&rdquo;</i>
              </p>
            </blockquote>
            <figcaption>—Νίκος Καζαντζάκης</figcaption>
          </div>
        </header>
        <div className="dreamItContainer">
          <DreamItText className="dreamItText" />
          <img src={naiasTopView} className="naiasImg" />
          {/* Swap to static sizes once you decide. */}
          {/* <StaticImage
            src={"../static/top-view-naias.jpg"}
            alt="Kthma Naias logo"
            formats={["auto", "webp", "avif"]}
            className="top-view-naias"
          /> */}
        </div>
      </section>
    </DreamItContainer>
  )
}

export default DreamIt
