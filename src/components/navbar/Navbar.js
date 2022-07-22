import React from "react"
import styled from "styled-components"
import Burger from "./Burger"
import AnimatedBtn from "../animatedbtn/AnimatedBtn"
import { useScrollDirection } from "../../hooks/ScrollDirection"
import { MdLanguage } from 'react-icons/md'
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import "./navbar.css"

const Nav = styled.nav`
  height: 100px;
  width: 100%;
  transition: background 0.3s ease-in-out;
  padding: 30px 20px;
  top: 0px;
  z-index: 2;
  position: fixed;
  /* display: flex;
  justify-content: center; */

  .nav__body {
    /* width: max(83%, 1000px); */
    max-width: 75rem;
    margin-right: auto;
    margin-left: auto;
    position: relative;
    display: flex;
    justify-content: space-between;
  }

  .logo {
    width: 4.6rem;
    /* margin-top: -16px; */
    margin-left: 15px;
  }

  .burger {
    margin: 0;
    font-size: 1rem;
  }

  .changeLang {
    color: white;
    border: none;
    border-radius: 1.5625rem;
    line-height: 1.5rem;
    background-color: var(--light-brown);
    transition: background-color 0.3s;    
    letter-spacing: .03em;
    padding: 1rem;
  }

  .changeLangIcon {
    color: white;
    font-size: 1.5rem;
    margin-right: .5rem;
    margin-bottom: -7px;
  }

  @media (max-width: 768px) {
    /* .changeLang {
      display: none;
    } */
  }
`
const Navbar = () => {
  // const [colorChange, setColorchange] = useState(false)
  const [isScrollingDown, isScrollingUp] = useScrollDirection()

  console.log(isScrollingDown)
  // const changeNavbarColor = () => window.scrollY >= 80 ? setColorchange(true) : setColorchange(false)

  // window.addEventListener("scroll", changeNavbarColor)
  return (
    <Nav className={isScrollingDown ? "hideNav" : "showNav bg-dark"}>
      <div className="nav__body">
        <div className="logo">
          <Link to="/">
            <StaticImage
              src={"../static/naias-logo-golden.png"}
              alt="Kthma Naias logo"
              formats={["auto", "webp", "avif"]}
            />
          </Link>
        </div>
        <div className="burger">
          <Burger />
        </div>
        <button className="changeLang" >
          <MdLanguage className="changeLangIcon" />
          English
        </button>
      </div>
    </Nav>
  )
}

export default Navbar
