import React, { useEffect } from "react"
import styled from "styled-components"
import { Power3 } from "gsap"
import gsap from "gsap"

// Imgs
import church from "../images/church/1.jpg"
import garden from "../images/garden/1.jpg"
import gamos from "../images/gamos2.jpg"

const DreamItContainer = styled.article`
  background-color: var(--white-color);
  display: block;
  position: static;
  margin-top: -8.5rem;
  padding-top: 2rem;
  padding-bottom: 13rem;
  width: 100%;

  blockquote {
    margin-top: 3rem;
  }

  header {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background: url(${gamos}) no-repeat center center;
    background-size: 79vh;
    height: 45vh;
    color: var(--white-color);
    .header-text {
      margin: 2rem;
      margin-left: 0.5rem;
    }
    figcaption {
      font-size: 0.8rem;
    }
    /* h4 {
        color: var(--light-brown);
    } */
    blockquote {
      margin-top: 2rem;
      font-size: 0.8rem;
    }

    h1 {
      font-family: var(--secondary-title-font);
      font-weight: 900;
      display: flex;
      font-size: 1.1rem;
      text-transform: uppercase;
      letter-spacing: 5px;
      justify-self: center;
      /* color: var(--primary-color); */
    }

    /* figcaption {
        float: right;
    } */
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
  }

  .prolog {
    font-size: 1.1rem;
    margin-top: 2rem;
  }

  main {
    margin: 0 2rem;
  }

  section {
    /* margin-top: 6rem; */
    font-family: var(--greek-paragraph-font);
  }
`

const DreamIt = () => {
  useEffect(() => {
    gsap.fromTo(
      ".animText",
      {
        autoAlpha: 0,
        y: 50,
      },
      {
        scrollTrigger: {
          trigger: ".animText",
          scrub: 1,
        },
        duration: 2,
        autoAlpha: 1,
        y: 0,
      }
    )
  }, [])
  return (
    <DreamItContainer>
      {/* <div className="imgCont">
        <img src={church} />
      </div> */}
      <section>
        <header>
          {/* <h4 className="content__subtitle">DREAM IT</h4> */}
          <div className="header-text">
            <h1>Ζήστε την στιγμή</h1>
            {/* <h1>Dream it today</h1> */}
            <blockquote>
              <p>
                <i>&ldquo;Μια αστραπή η ζωή μας... μα προλαβαίνουμε&rdquo;</i>
              </p>
            </blockquote>
            <figcaption>—Νίκος Καζαντζάκης</figcaption>
          </div>
        </header>
        <main>
          <p className="prolog animText">
            Με αγάπη, μεράκι και σεβασμό προς την φύση, δημιουργήσαμε ένα
            παραμυθένιο χώρο από Πέτρα και Ξύλο, που μας χαρίζει την ευχαρίστηση
            να γεμήσουμε τους ανθρώπους αξέχαστες στιγμές.
          </p>
        </main>
      </section>
    </DreamItContainer>
  )
}

export default DreamIt
