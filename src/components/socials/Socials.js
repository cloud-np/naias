import React from "react"
import styled from "styled-components"
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs"

const Ul = styled.ul`
  list-style: none;
  display: none;
  @media (max-width: 768px) {
    display: flex;
  }
  margin-left: 2rem;
  li {
    margin-left: 2rem;
    color: #fff;
  }
`

const Socials = () => {
  return (
    <Ul>
      <li>
        <a href="https://www.facebook.com/ktimanaiasgr">
          <BsFacebook />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/ktimanaiasgr">
          <BsInstagram />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/ktimanaias">
          <BsTwitter />
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/user/ktimanaiasgr">
          <BsYoutube />
        </a>
      </li>
    </Ul>
  )
}

export default Socials
