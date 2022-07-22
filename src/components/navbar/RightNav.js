import React from "react"
import styled from "styled-components"
import Socials from "../socials/Socials"
import { Link } from "gatsby"

const Ul = styled.ul`
  @import url("https://fonts.googleapis.com/css2?family=Manrope&display=swap");
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  font-family: var(--greek-title-font);
  font-size: 0.8rem;
  li {
    padding: 10px 20px;
  }
  @media (max-width: 768px) {
    z-index: -1;
    flex-flow: column nowrap;
    background-color: rgb(20, 20, 20);
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    padding-top: 6rem;
    transition: transform 0.3s ease-in-out;
    .first {
      margin-top: 5rem;
    }
    .RightNav__li {
      margin-left: 4rem;
      font-size: 2rem;
      line-height: 2rem;
      color: var(--white-color);
      text-transform: uppercase;
    }
  }
`

const RightNav = ({ isOpen }) => {
  return (
    <Ul open={isOpen}>
      <li className="RightNav__li first">
        <Link to="/church">Εκκλησάκι</Link>
      </li>
      <li className="RightNav__li">
        <Link to="/aithousa">Αίθουσα</Link>
      </li>
      <li className="RightNav__li">
        <Link to="/eksoterikos">Εξωτερικός Χώρος</Link>
      </li>
      <li className="RightNav__li">
        <Link to="/contact-us">Contact Us</Link>
      </li>
      {/* <li className='RightNav__li first'>
        <Link to='/church'>
          {open ? "Εκκλησάκι" : "ΕΚΚΛΗΣΑΚΙ"}
        </Link>
      </li>
      <li className='RightNav__li'>
        <Link to='/aithousa'>
          {open ? "Αίθουσα" : "ΑΙΘΟΥΣΑ" }
        </Link>
      </li>
      <li className='RightNav__li'>
        <Link to='/eksoterikos'>
          {open ? "Εξωτερικός Χώρος" : "ΕΞΩΤΕΡΙΚΟΣ ΧΏΡΟΣ" }
        </Link>
      </li>
      <li className='RightNav__li'>
        <Link to='/contact-us'>
          {open ? "Contact Us" : "CONTACT US" }
        </Link>
      </li> */}
      <Socials />
    </Ul>
  )
}

export default RightNav
