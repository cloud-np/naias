import React, { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import styled from "styled-components"
import { GrFormClose } from "react-icons/gr"

const Section = styled.section`
  background-color: var(--light-brown);
  padding: 5rem 0;
  justify-content: center;
  display: grid;
  gap: 1rem; 
  grid-auto-rows: 240px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 300px));

  img {
    object-fit: cover;
  }

  @media screen and (min-width: 1500px) {
    padding: 5rem 7rem;
  }

  @media screen and (min-width: 600px) {
    .card-tall {
      grid-row: span 2 / auto;
    }

    .card-wide {
      grid-column: span 2 / auto;
    }
  }

  .img{
    transition: all .2s ease-in;
    cursor: pointer;
  }

  .showActiveImg {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    transition: opacity .4s ease, visibility .4s ease, transform .5s ease-in-out;
    visibility: hidden;
    opacity: 0;
    transform: scale(0);
    overflow: hidden;
    z-index: 999;
  }

  .showActiveImg.open{
    visibility: visible;
    opacity: 1;
    transform: scale(1);
  }

  .showActiveImg img{
    width: auto;
    max-width: 100%;
    height: auto;
    display: block;
    max-height: 100%;
    line-height: 0;
    box-sizing: border-box;
    padding: 20px 0 20px;
    margin: 0 auto;
  }
  .header {
    background-color: var(--light-brown);
    width: 100%;
    padding: 30px;
    position: fixed;
    top: 0;
    left: 0;
  }
  .showActiveImg.open svg{
    position: fixed;
    top: 13px;
    width: 2rem;
    height: 2rem;
    padding: 5px;
    background-color: white;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    right: 10px;
  }
`


const PhotoShowcase = ({ givenImages }) => {
  const [activeImage, setActiveImage] = useState(null);
  const [showActiveImg, setShowActiveImg] = useState(false);

  const handleSetActiveImage = (el) => {
    setShowActiveImg(true);
    setActiveImage({src: el.target.src, alt: el.target.alt, extraClasses: el.target.classList.toString()})
  }

  return (
    <Section>
      <div className={showActiveImg ? "showActiveImg open" : "showActiveImg"}>
        <div className="header">
          <GrFormClose onClick={() => setShowActiveImg(false)}/>
        </div>
        <img src={activeImage?.src} alt={activeImage?.alt} />
      </div>
      {givenImages.map((image, index) => (
        <img onClick={handleSetActiveImage} key={uuidv4()} className={`grid-card img ${image.extraClasses} ${image.src === activeImage?.src ?  'display' : ''}`} src={image.src} alt={image.alt} />
      ))}
    </Section>
  )
}

export default PhotoShowcase
