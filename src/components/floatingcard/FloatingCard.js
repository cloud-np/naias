import React from "react"
import styled from "styled-components"
import night from "../../static/night.jpeg"
import { FaBaby, FaChurch } from "react-icons/fa"
import { BsFillPeopleFill as PeopleIcon } from "react-icons/bs"

const Div = styled.div`
  list-style: none;
  width: calc(100vw - 50px);
  min-height: calc(100vh - 6.25rem);
  /* height: 700px; */
  margin: auto;
  border-radius: 2px;
  background: url(${night}) calc(100% - 53%) calc(100% - 79%) no-repeat;
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

const FloatingCard = () => {
  return (
    <Div>
      <div className="menu__title">
        <FaChurch />
        <h2>Γάμος</h2>
      </div>
      <div className="menu__text">
        <h4 className="menu__text__subtitle">LOVE IT</h4>
        <h3><i>Ονειρική</i> Γαμήλια δεξίωση</h3>
        <p>
          Με γνώμονα τα θέλω σας και πυξίδα την αγάπη σας με σεβασμό και
          υπευθυνότητα θα διοργανώσουμε μια ονειρεμένη δεξίωση γάμου όπως την
          ονειρευτήκατε.
        </p>
        <button>Μάθετε περισσότερα</button>
      </div>
    </Div>
  )
}

export default FloatingCard
