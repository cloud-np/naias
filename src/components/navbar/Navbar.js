import React from "react"
import styled from "styled-components"
import Burger from "./Burger"
import { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"

import './navbar.css'

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  transition: background .3s ease-in-out;
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
    > button{
      margin-right: 2rem;
      color: white;
      background: none;
      font-family: var(--secondary-title-font);
      border: none;
      height: 30px;
      padding: 0 1rem;
      cursor: pointer;
      margin-top: -12px;
      text-align: center;
      border-radius: 5%;
      border: 2px solid white;
      position: relative;

    }
    > button::after{
      background: white;
      content: '';
      position: absolute;
      height: 100%;
      transition: width .3s ease-in-out;
    }
    > button:hover {
      color: blue;
      > button::after{
        width: 100%;
      }
    }
  }
`
const Navbar = () => {
  const [colorChange, setColorchange] = useState(false)
  const changeNavbarColor = () =>  window.scrollY >= 80 ? setColorchange(true) : setColorchange(false)

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

        <button>
          CONTACT
        </button>
        <Burger />
      </div>
    </Nav>
  )
}

export default Navbar
