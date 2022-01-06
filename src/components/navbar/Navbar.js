import React from "react"
import styled from "styled-components"
import Burger from "./Burger"
import { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import AnimatedBtn from "../animatedbtn/AnimatedBtn"

import "./navbar.css"

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  transition: background 0.3s ease-in-out;
  padding: 30px 20px;
  top: 0px;
  z-index: 2;
  display: flex;
  position: fixed;
  justify-content: space-between;
  .logo {
    width: 4.6rem;
    margin-top: -18px;
  }

  .leftGroup {
    display: flex;
  }
`

const Navbar = () => {
  const [colorChange, setColorchange] = useState(false)
  const changeNavbarColor = () =>
    window.scrollY >= 80 ? setColorchange(true) : setColorchange(false)

  window.addEventListener("scroll", changeNavbarColor)
  return (
    <Nav className={colorChange ? "bg-dark" : "bg-transp"}>
      <div className="logo">
        <StaticImage
          src={"../static/naias-logo-golden.png"}
          alt="Kthma Naias logo"
          formats={["auto", "webp", "avif"]}
        />
      </div>
      <div className="leftGroup">
        <AnimatedBtn text="Contact" />
        <Burger />
      </div>
    </Nav>
  )
}

export default Navbar
