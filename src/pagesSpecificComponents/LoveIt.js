import React from "react"
import { AiFillInstagram } from "react-icons/ai"
import Carousel from "../components/carousel/Carousel"
import styled from "styled-components"
import Categories from "../components/categoriescarousel/CategoriesCarousel"

import aithousa from "../images/aithousa/1.jpg"

const Section = styled.nav`
  position: relative;
  width: 100%;
  background-color: var(--light-brown);
  text-align: center;
  padding-top: 1rem;
  color: white;

  .Love-it__imgs {
    display: flexbox;
    display: -ms-flexbox;
    justify-content: center;
    margin-top: -15rem;
  }

  .Love-it__cupcakes {
    width: 15rem;
    margin-top: -12rem;
    margin-right: 6rem;
  }

  .Love-it__ring {
    width: 16.5rem;
    margin-left: 2.5rem;
  }

  .Love-it__title {
    font-family: var(--title-font);
    font-size: 2.7rem;
    font-weight: 500;
    letter-spacing: -1px;
    margin: 0 2rem;
    margin-bottom: 1.5rem;
  }

  .Love-it__undertitle {
    margin-bottom: 3rem;
  }
`
const LoveIt = () => {
  const carouselPhotos = [{ photo: aithousa, alt: "Αίθουσα" }]
  return (
    <Section id="loveIt">
      <Categories />
      <h4 className="content__subtitle">LOVE IT</h4>
      <h1 className="Love-it__title">#ktimanaias</h1>
      <h5 className="Love-it__undertitle">
        Follow us
        <AiFillInstagram
          style={{
            position: "relative",
            top: "5px",
            fontSize: "20px",
            marginLeft: "4px",
          }}
        />
        <a
          style={{ marginLeft: "2px", textDecoration: "underline" }}
          href="https://www.instagram.com/ktimanaiasgr/"
        >
          @ktimanaias
        </a>
      </h5>
      <div className="Live-it__content">
        <Carousel photos={carouselPhotos} isForInsta={true} />
      </div>
    </Section>
  )
}

export default LoveIt
