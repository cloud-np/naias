import * as React from "react"
import { useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import promo from "../assets/naias-promo.mp4"
import { Power3 } from "gsap"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import "normalize.css"
import "../css/main.css"
import "../css/home.css"
import "../css/animations.css"


import Layout from "../components/layout"
import Seo from "../components/seo"

gsap.registerPlugin(ScrollTrigger)

const IndexPage = () => {
  useEffect(() => {
    gsap.to("#videoContainer", {
      scrollTrigger: {
        trigger: "#videoContainer",
        scrub: 1,
        start: "top 10%",
        end: "bottom",
        // markers: true,
      },
      y: -70,
      ease: Power3.easeInOut,
      duration: 1,
    })
  }, [])
  return (
    <Layout>
      <Seo title="Home" />
      <section className="showcase">
        <figure className="video_container" id="videoContainer">
          <video
            src={promo}
            type="video/mp4"
            className="video_container__video"
            autoPlay
            loop
            muted
          ></video>
        </figure>
        <div className="showcase_content">
          <StaticImage
            src={"../static/naias-logo-golden.png"}
            alt="Kthma Naias logo"
            formats={["auto", "webp", "avif"]}
            className="showcase_content__logo fade-in-with-scale"
          />
          <h3 className="showcase_content__undertext fade-in">
            We make a day to remember
          </h3>
        </div>
      </section>
      <section className="Dream-it">
        {/* <StaticImage
          src={"../static/footer-clouds.png"}
          alt="cloouds-background"
          formats={["auto", "webp", "avif"]}
          className="Dream-it__clouds"
        /> */}
        <h1 className="Dream-it__title">Dream It</h1>
      </section>
      {/* <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p> */}
    </Layout>
  )
}

export default IndexPage
