import React, { useEffect } from "react"
import gsap from "gsap"
import styled from "styled-components"
import { Link } from "gatsby"

const Div = styled.div`
  list-style: none;
  width: min(calc(100vw - 50px), 500px);
  /* width: 500px; */
  margin: auto;
  border-radius: 2px;
  transform-origin: center center 0px;
  transition: all 0.5s ease-out;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  /* max-width: 100%; */
  height: 700px;
  color: var(--white-color);
  .menu__title {
    align-self: flex-start;
    opacity: 0;
    margin: 2rem;
    font-weight: 100;
    transition: all 0.5s ease-out;
    svg {
      font-size: 22px;
      margin-right: 1rem;
    }
  }
  .menu__text {
    opacity: 0;
    transform: translateY(100%);
    margin: 3rem;
    position: relative;
    transition: all 0.5s ease-in-out;
    align-self: flex-end;
    p {
      font-size: 0.9rem;
      line-height: 1.2rem;
    }
    h3 {
      margin-bottom: 0.7rem;
      font-size: 1.7rem;
    }
    .menu__text__subtitle{
        margin-bottom: 0.15rem;
        margin-top: 3rem;
        font-size: .6rem;
    }
    a {
        /* border-style: none; */
        border: 1px solid white;
        color: var(--white-color);
        font-family: var(--greek-paragraph-font);
        border-radius: 25px;
        padding: 14px;
        cursor: pointer;
        background: none;
        transition: all .4s ease-in-out;
      :hover{
        color: var(--grey-color);
        background-color: var(--white-color);
      }
    }
  }
  :hover {
    .menu__text {
      opacity: 1;
    }

  }
`

const FloatingCard = ({ givenStyles, title, textSubTitle, mainText, url}) => {
  useEffect(() => {
    gsap.to(".menu__title", {
      opacity: 1,
      ease: "easeInOut",
      duration: 1,
      scrollTrigger: {
        trigger: ".menu__title",
        start: "top center",
        end: "center center",
        scrub: true,
        toggleActions: "restart none none none",
      },
    })
    gsap.to(".menu__text", {
      opacity: 1,
      delay: .5,
      y: "10%",
      duration: 2,
      ease: "easeInOut",
      scrollTrigger: {
        trigger: ".menu__title",
        start: "top center",
        end: "center center",
        scrub: true,
        toggleActions: "restart none none none",
        markers: true,
      },
    })
  }, [])
  return (
    <Div style={givenStyles}>
      <div data-swiper-parallax="-200" className="menu__title">
        {title}
      </div>
      <div data-swiper-parallax="-200" className="menu__text">
        <h4 className="menu__text__subtitle">
          {textSubTitle}
        </h4>
        {mainText}
        <Link to={url}>Μάθετε περισσότερα</Link>
      </div>
    </Div>
  )
}

export default FloatingCard
