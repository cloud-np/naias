import React, { useEffect } from "react"
import styled from "styled-components"
import gsap from "gsap"

// Imgs
import church from "../images/church/1.jpg"
import garden from "../images/garden/1.jpg"
import goldenLeef from "../images/misc/golden-leef2.png"
import ringPhoto from "../images/ring-photo.png"
import naiasTopView from "../static/top-view-naias.jpg"
import gamos from "../images/gamos2.jpg"
import DreamItText from "./DreamItText"

const DreamItContainer = styled.article`
  /* background-color: var(--white-color); */

  background: url(${ringPhoto}) no-repeat top right;
  /* background-size: cover; */
  /* background-size: 0% 0%; */
  /* background-position: center; */
  background-size: 45% auto;
  background-position: 100% 100%;
  display: block;
  position: static;
  padding-top: 4rem;
  width: 100%;
  margin-top: -4rem;
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
    /* color: var(--white-color); */
    display: flex;
    margin-left: 10%;
    padding: 3vh 0;
    padding-bottom: 6vh;

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
      /* letter-spacing: 5px; */
      font-size: 5vw;
    }

    h1,
    blockquote,
    figcaption,
    p {
      margin: 0 2rem;
    }
    blockquote {
      margin-top: 1rem;
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
    background: rgb(194, 178, 153);
    background-color: #8a875e;
    justify-content: end;
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
        margin-bottom: -0.4rem;
      }
    }
    .dreamItText {
      /* margin-right: 4rem; */
    }
  }

  .goldenLeef {
    width: 5rem;
    height: auto;
    position: absolute;
  }
  .header-paragraph {
    width: 40vw;
    margin-top: 1rem;
  }
  .ringPhoto {

  }
`

const DreamIt = () => {
  useEffect(() => {
    gsap.to(".parallaxDreamIt", {
      backgroundPosition: "100% 0%",
      ease: "easeInOut",
      scrollTrigger: {
        trigger: ".parallaxDreamIt",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    })
    gsap.to(".showLive", {
      opacity: 1,
      ease: "easeInOut",
      scrollTrigger: {
        trigger: ".showLive",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    })
  }, [])
  return (
    <DreamItContainer id="dreamIt" className="parallaxDreamIt">
      <section>
        <header className="parallaxHeader">
          <div className="header-text">
            <div className="title">
              <img className="goldenLeef" src={goldenLeef} alt="golden leef" />
              <img className="goldenLeef" src={goldenLeef} alt="golden leef" />
              <h1 className="showLive">Ζήστε την στιγμή</h1>
            </div>
            <blockquote>
              <p>
                <i>&ldquo;Μια αστραπή η ζωή μας... μα προλαβαίνουμε&rdquo;</i>
              </p>
            </blockquote>
            <figcaption>—Νίκος Καζαντζάκης</figcaption>
            <p className="header-paragraph">
              Με αγάπη, μεράκι και σεβασμό προς την φύση και οικολογική
              συνείδηση δημιουργήσαμε ένα παραμυθένιο χώρο από Πέτρα και Ξύλο
              μέσα σε πλούσια βλάστηση με ανθισμένα παρτέρια και μποκαμβίλιες,
              τριανταφυλλιές και πλακόστρωτα σοκάκια δημιουργώντας πολύχρωμες
              πινελιές στον καμβά του σκηνικού σας, σαν πίνακας του Μονέ.
              Καταρράκτες, βραχόκηποι, πισίνα, πλούσια βλάστηση και όμορφες
              γωνιές εμπλωτίζουν την ρομαντική σας προσοχή.
            </p>
          </div>
          {/* <img src={ringPhoto} alt="ring-photo" className="ringPhoto" /> */}
        </header>
        <div className="dreamItContainer">
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
