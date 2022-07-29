import React, { useEffect } from "react"
import gsap from "gsap"
import { Power3 } from "gsap"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import AnimatedBtn from "../components/animatedbtn/AnimatedBtn"
import promo from "../assets/naias-promo.mp4"

const ShowcaseVideoContainer = styled.article`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: #fff;
  padding: 0 1.3rem;
  box-sizing: border-box;
  margin: 0;
  line-height: 1.5;
  padding: 0;

  figure {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: var(--primary-color) url("../static/naias-promo-screenshot.png")
      no-repeat center center/cover;
  }

  video {
    min-width: 100%;
    user-select: none;
    min-height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    object-fit: cover;
    -o-object-fit: cover;
    z-index: -2;
  }

  figure:after {
    content: "";
    z-index: -1;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.3);
    position: absolute;
  }

  h3 {
    font-family: var(--caligraphic-font);
    font-weight: 500;
    font-size: 1.7rem;
    position: absolute;
    width: 100%;
    margin-top: 1rem;
    left: 50%;
    color: white;
    transform: translate(-50%, -50%);
  }

  .logo {
    line-height: 1.2;
    margin-bottom: 0.5rem;
  }

  .arrow,
  .arrow:before {
    position: absolute;
    left: 50%;
  }

  .arrow {
    opacity: 0.7;
    width: 40px;
    height: 40px;
    top: 90%;
    margin: -20px 0 0 -20px;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    border-left: none;
    border-top: none;
    border-right: 2px #fff solid;
    border-bottom: 2px #fff solid;
    animation: arrowIn 10s ease-in;
  }
  @keyframes arrowIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .arrow:before {
    content: "";
    width: 20px;
    height: 20px;
    top: 50%;
    margin: -10px 0 0 -10px;
    border-left: none;
    border-top: none;
    border-right: 1px #fff solid;
    border-bottom: 1px #fff solid;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-name: arrow;
  }

  @keyframes arrow {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translate(-10px, -10px);
    }
  }
  
  .left-text {
    height: 500px;
    margin-top: 1rem;
    letter-spacing: 3px;
    text-transform: uppercase;
    font-family: var(--secondary-title-font);
  }
  .btns {
    position: absolute;
    top: 80%;
    .btn {
      padding: 10px 30px;
      font-size: .7rem;
      color: white;
      border: 1px solid white;
      background-color: transparent;
      font-family: var(--secondary-title-font);
      text-transform: uppercase;
      text-decoration: none;
      transition: all .5s ease-in-out;
      :hover {
        cursor: pointer;
        background-color: #fff;
        color: black;
        box-shadow: 2px 4px 8px 2px rgba(117, 117, 117, 0.2), 6px 6px 100px 6px rgba(255, 255, 255, 0.99);
      }
    }
  .active-btn {
    background-color: #fff;
    color: black;
    :hover {
      color: white;
      background-color: transparent;
    }
  }


}
`

const ShowcaseVideo = () => {
  useEffect(() => {
    gsap.to(".animateUpwards", {
      scrollBehavior: "smooth",
      scrollTrigger: {
        trigger: "#videoContainer",
        scrub: 1,
        start: "top 10%",
        end: "bottom",
      },
      y: -70,
      ease: Power3.easeInOut,
      duration: 1,
    })
    gsap.to(".mainText", {
      scrollBehavior: "smooth",
      scrollTrigger: {
        trigger: "#videoContainer",
        scrub: 5,
        start: "top 10%",
        end: "bottom 10%",
      },
      y: -60,
      opacity: 0,
      scale: 2,
      ease: Power3.easeInOut,
      duration: 1,
    })
    gsap.to(".arrow", {
      scrollBehavior: "smooth",
      scrollTrigger: {
        trigger: "#videoContainer",
        scrub: 1,
        start: "top 10%",
        end: "bottom",
      },
      opacity: 0,
      ease: Power3.easeInOut,
      duration: 1,
    })

    gsap.to(".btns", {
      scrollBehavior: "smooth",
      scrollTrigger: {
        trigger: "#videoContainer",
        scrub: 1,
        start: "top 10%",
        end: "bottom",
      },
      opacity: 0,
      scale: 1.5,
      ease: Power3.easeInOut,
      duration: 1,
    })
  }, [])
  const scrollTo = (elID) => {
    document.getElementById(elID).scrollIntoView()
  }
  return (
    <ShowcaseVideoContainer>
      <figure id="videoContainer" className="animateUpwards">
        <video src={promo} type="video/mp4" autoPlay loop muted></video>
      </figure>
      <section className="mainText">
        {/* <h5 className="left-text">Κτήμα Ναϊάς EST - {new Date().getFullYear()}</h5> */}
        <div>
          <StaticImage
            src={"../static/naias-logo-golden.png"}
            alt="Kthma Naias logo"
            formats={["auto", "webp", "avif"]}
            className="logo fade-in-with-scale"
          />
          {/* <h3 className="showcase_content__undertext fade-in"> */}
          <h3 className="fade-in">We make a day to remember</h3>
        </div>
      </section>
      <div className="btns">
        <button className="btn" onClick={() => scrollTo("dreamIt")}>Dream It</button>
        <button className="btn active-btn" onClick={() => scrollTo("contactUs")}>Live It</button>
        <button className="btn" onClick={() => scrollTo("loveIt")}>Love It</button>
      </div>
      {/* <h5 className="left-text">Κτήμα Ναϊάς EST - {new Date().getFullYear()}</h5> */}
      <div className="arrow"></div>
    </ShowcaseVideoContainer>
  )
}

export default ShowcaseVideo