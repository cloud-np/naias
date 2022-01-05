import React from "react"
import styled from "styled-components"
import Socials from "../socials/Socials"
import Contactinfo from "../contactinfo/Contactinfo"

import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const FooterContainer = styled.footer`
  padding-top: 3rem;
  padding-bottom: 14rem;
  background-color: var(--white-color);
  height: 15rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;

  .upperBound, .lowerBound {
    display: flex;
    justify-content: space-between;
    margin: 0 1rem;
  }

  .lowerBound{
    display: flexbox;
    display: -ms-flexbox;

    color: var(--primary-color);
    margin-top: 5vh;
  }

  ul {
    list-style: none;
    font-family: var(--greek-title-font);
    font-size: 0.8rem;
    > li {
      margin-bottom: 0.6rem;
    }
    > li > a {
      color: var(--grey-color);
    }
  }

  h4 {
    color: var(--primary-lighter-color);
    margin-bottom: 0.6rem;
  }

  .underline {
    width: 130px;
    height: 1px;
    margin-left: 1px;
    border-radius: 7%;
    background-color: var(--primary-color);
    display: block;
    margin-bottom: 1.45rem;
    transition: width 0.3s ease-in-out;
  }

  .footerLogo {
    width: 100px;
    margin-top: -.8rem;
  }

  .contactInfo {
    margin-left: 2rem;
  }
`

const Footer = () => {
  return (
    <FooterContainer>
      <div className="upperBound">
        <ul>
          <h4>Menu</h4>
          <span className="underline"></span>
          <li>
            <Link className="underlineLink" to="/church">
              Εκκλησάκι
            </Link>
          </li>
          <li>
            <Link className="underlineLink" to="/aithousa">
              Αίθουσα
            </Link>
          </li>
          <li>
            <Link className="underlineLink" to="/eksoterikos">
              Εξωτερικός Χώρος
            </Link>
          </li>
          <li>
            <Link className="underlineLink" to="/contact-us">
              Contact Us
            </Link>
          </li>
        </ul>
        <div className="contactInfo">
          <h4>Contact Info</h4>
          <span className="underline"></span>
          <Contactinfo isForFooter={true} />
        </div>
      </div>
      <div className="lowerBound">
        <StaticImage
          src={"../../static/naias-logo.png"}
          alt="Kthma Naias logo"
          formats={["auto", "webp", "avif"]}
          className="footerLogo"
        />
        <Socials isForFooter={true} className="socials" />
      </div>
      {/* © {new Date().getFullYear()}, Built from <p>cloud-np</p> */}
    </FooterContainer>
  )
}

export default Footer
