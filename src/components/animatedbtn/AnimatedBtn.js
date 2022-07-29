import React from "react"
import styled from "styled-components"

const Button = styled.button`
  margin-right: 2rem;
  color: white;
  font-family: var(--secondary-title-font);
  padding: 0 1rem;
  margin-top: -16px;
  text-align: center;
  cursor: pointer;
  background: none;

  position: relative;
  border: 1px solid #fff;
  transition: all 0.4s cubic-bezier(0.42, 0, 0.58, 1);
  text-transform: uppercase;
  height: 35px;

  :hover {
    color: #000 !important;
    background-color: transparent;
    text-shadow: nthree;
  }

  :hover:before {
    left: 0%;
    right: auto;
    width: 100%;
  }

  :before {
    display: block;
    position: absolute;
    top: 0px;
    right: 0px;
    height: 100%;
    width: 0px;
    z-index: -1;
    content: "";
    color: #000 !important;
    background: #fff;
    transition: all 0.4s cubic-bezier(0.42, 0, 0.58, 1);
  }
`

const AnimatedBtn = ({ text, type = null, styles }) => {
  return (
    <Button style={styles} type={type ? type : ""}>
      {text}
    </Button>
  )
}

export default AnimatedBtn
