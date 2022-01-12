import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"


import Header from "./header"
import Footer from "../components/footer/Footer"
import Navbar from "./navbar/Navbar"
import "./layout.css"


const Span = styled.span`
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: black;
  z-index: 999;
  transform: translate3d(-100%, 0px, 0px);
  /* animation: fadeScreenIn 2s linear forwards; */
  /* -webkit-animation: fadeInWithScale 4s;
  -moz-animation: fadeInWithScale 4s;
  -o-animation: fadeInWithScale 4s;
  -ms-animation: fadeInWithScale 4s; */
  @keyframes fadeScreenIn {
    0%{
      width: 100vw;
    }
    70%{
      width: 95vw;
    }
    100%{
      width: 0;
    }
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Span className="landing animation"></Span>
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <Footer />
        {/* © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a> */}
      </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
