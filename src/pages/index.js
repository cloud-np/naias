import * as React from "react"
import { useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import promo from "../assets/naias-promo.mp4"
import { Power3 } from "gsap"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

// CSS
import "normalize.css"
import "../css/main.css"
import "../css/home.css"
import "../css/animations.css"

// imgs
import cupcakesImg from "../static/cupcakes.jpg"
import ringImg from "../static/ring-photo.png"

// Carousel Images
import church from "../assets/images/church/1.jpg"
import aithousa from "../assets/images/aithousa/1.jpg"

// Componets
import Layout from "../components/layout"
import Carousel from "../components/carousel/Carousel"
import Seo from "../components/seo"

gsap.registerPlugin(ScrollTrigger)

const IndexPage = () => {
  useEffect(() => {
    gsap.to("#videoContainer", {
      scrollBehavior: "smooth",
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
    gsap.to(".responsive-img", {
      scrollTrigger: {
        trigger: ".responsive-img",
        scrub: 1,
      },
      y: -10,
      ease: Power3.easeInOut,
      duration: 3,
    })
  }, [])

  const carouselPhotos = [
    { photo: church, alt: "Εκκλησάκι" },
    { photo: aithousa, alt: "Αίθουσα" },
    { photo: church, alt: "Εκκλησάκι" },
    { photo: church, alt: "Εκκλησάκι" },
  ]
  return (
    <Layout>
      <Seo title="Home" />
      <article className="showcase">
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
         <section className="showcase_content">
          <StaticImage
            src={"../static/naias-logo-golden.png"}
            alt="Kthma Naias logo"
            formats={["auto", "webp", "avif"]}
            className="showcase_content__logo fade-in-with-scale"
          />
          {/* <h3 className="showcase_content__undertext fade-in"> */}
          <h3 className="showcase_content__undertext fade-in">
            We make a day to remember
          </h3>
        </section>
      </article>
      <article className="Dream-it">
        <section className="Dream-it__content">
          <h4 className="content__subtitle">DREAM IT</h4>
          <h1 className="Dream-it__title">Γνώση, αγάπη και τεχνογνωσία</h1>
          <p>
            Με γνώμονα τα θέλω σας και πυξίδα την αγάπη σας με σεβασμό και
            υπευθυνότητα θα διοργα- νώσουμε μια ονειρεμένη δεξίωση γάμου όπως
            την ονειρευτήκατε.
          </p>
        </section>
      </article>
      <section className="Live-it">
        <div className="Live-it__imgs">
          <div className="responsive-img">
            <img className="Live-it__ring" src={ringImg} alt="wedding ring" />
          </div>
          <div className="responsive-img">
            <img
              className="Live-it__cupcakes"
              src={cupcakesImg}
              alt="wedding cupcakes"
            />
          </div>
        </div>
        <h4 className="content__subtitle">LIVE IT</h4>
        <h1 className="Live-it__title">
          Live your <i style={{ fontWeight: "normal" }}>dream</i>
        </h1>
        <div className="Live-it__content">
          <Carousel photos={carouselPhotos} />
        </div>
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
