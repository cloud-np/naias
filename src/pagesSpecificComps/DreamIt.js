import React, { useEffect } from "react"
import styled from "styled-components"
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
  width: 100%;
  height: 100%;
  overflow:hidden;

  blockquote {
    margin-top: 3rem;
  }

  header {
    /* background-size: 100vw; */
    /* TODO: Fix this with a media query or something */
    /* height: 75vh; */
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

  @media screen and (min-width: 1200px) {
    main {
      display: none;
    }
  }

  .prolog {
    font-size: 1.1rem;
    margin-top: 2rem;
  }

  main {
    margin: 0 2rem;
    h4 {
      color: var(--primary-color);
    }
    h2 {
      position: relative;
      font-size: 2rem;
    }
  }

  section {
    font-family: var(--greek-paragraph-font);
  }
`

const DreamIt = () => {
  // const {windowWidth, windowHeight} = useWindowDimensions()
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
        { window.innerWidth >= 1200 ? '' :
         <main>
          <h4 className="content__subtitle">DREAM IT</h4>
          <h2>Κτήμα Ναϊάς</h2>
          <p className="prolog animText">
            Με αγάπη, μεράκι και σεβασμό προς την φύση, δημιουργήσαμε ένα
            παραμυθένιο χώρο από Πέτρα και Ξύλο, που μας χαρίζει την ευχαρίστηση
            να γεμήσουμε τους ανθρώπους αξέχαστες στιγμές.
          </p>
        </main>
        }
      </section>
    </DreamItContainer>
  )
}

export default DreamIt
