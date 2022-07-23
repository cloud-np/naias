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

  .nav__body {
    max-width: 75rem;
    margin-right: auto;
    margin-left: auto;
    position: relative;
    display: flex;
    justify-content: space-between;
  }

  .logo {
    width: 4.6rem;
    margin-left: 15px;
  }

  .burger {
    margin: 0;
    font-size: 1rem;
  }

  .changeLang{
    margin-top: -9px;
  }

  .changeLangBtn {
    color: white;
    border: none;
    letter-spacing: .03em;
    border-radius: 1.5625rem;
    line-height: 1.5rem;
    background-color: var(--light-brown);
    font-family: var(--paragraph-font);
    transition: background-color 0.3s;    
    padding: .6rem;
    cursor: pointer;
    display: flex;
  }

  .changeLangIcon {
    color: white;
    font-size: 1.2rem;
    margin-right: .5rem;
    margin-bottom: -10px;
  }

  @media (max-width: 768px) {
    .changeLang {
      display: none;
    }
  }
`
const Navbar = () => {
  const [isScrollingDown, isScrollingUp] = useScrollDirection()

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
        <div className="changeLang" >
          <button className="changeLangBtn" >
            <MdLanguage className="changeLangIcon" />
            English
          </button>
        </div>
      </div>
    </Nav>
  )
}

export default Navbar
