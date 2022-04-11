import React, { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import styled from "styled-components"

const Section = styled.section`
  background-color: var(--light-brown);
  padding: 5rem 0;
  /* width: 100%;
  justify-content: center; */
  justify-content: center;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(240px, 300px));
  grid-auto-rows: 240px;
  cursor: pointer;

  img {
    object-fit: cover;
  }

  @media screen and (min-width: 600px) {
    .card-tall {
      grid-row: span 2 / auto;
    }

    .card-wide {
      grid-column: span 2 / auto;
    }
  }
  .showActiveImage {
  }
`


const PhotoShowcase = ({ givenImages }) => {
  const [activeImage, setActiveImage] = useState(null);

  const handleClick = (el) => {
    setActiveImage({src: el.target.src, alt: el.target.alt, extraClasses: el.target.classList.toString()})
  }

  return (
    <Section>
      {givenImages.map((image, index) => (
        <img onClick={handleClick} key={uuidv4()} className={`grid-card ${image.extraClasses}`} src={image.src} alt={image.alt}/>
      ))}
      <div className={activeImage ? "showActiveImage" : "hideActiveImage"}>
        <img src={activeImage?.src} alt={activeImage?.alt} className={`grid-card ${activeImage?.extraClasses}`}/>
      </div>
    </Section>
  )
}

export default PhotoShowcase
