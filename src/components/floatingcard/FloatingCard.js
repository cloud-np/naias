import React, { useState, useEffect } from "react"
import styled from "styled-components"

const Div = styled.div`
  list-style: none;
  width: calc(100vw - 50px);
  min-height: calc(100vh - 6.25rem);
  /* height: 700px; */
  margin: auto;
  border-radius: 2px;
  transform-origin: center center 0px;
  transition: all 0.5s ease-out;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  max-width: 100%;
  height: 100%;
  color: var(--white-color);
  .menu__title {
    align-self: flex-start;
    margin: 2rem;
    font-weight: 100;
    transition: all 0.5s ease-out;
    svg {
      font-size: 22px;
      margin-right: 1rem;
    }
  }
  .menu__text {
    opacity: 1;
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
    button {
        /* border-style: none; */
        border: 1px solid white;
        color: var(--white-color);
        font-family: var(--greek-paragraph-font);
        border-radius: 25px;
        padding: 14px;
        background: none;
    }
  }
  :hover {
    .menu__text {
      opacity: 1;
    }

    /* background: rgba(0, 0, 0, 0)
        linear-gradient(to bottom, rgba(0, 0, 0, 0) 0px, rgba(0, 0, 0, 0.8) 90%)
        repeat 0 0; */
  }
`

const FloatingCard = ({ givenStyles, title, textSubTitle, mainText }) => {
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
        <button>Μάθετε περισσότερα</button>
      </div>
    </Div>
  )
}

export default FloatingCard
