import * as React from "react"
import { useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import promo from "../assets/naias-promo.mp4"
import { Power3 } from "gsap"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { AiFillInstagram } from "react-icons/ai"

// CSS
import "normalize.css"
import "../css/main.css"
import "../css/home.css"
import "../css/animations.css"

// imgs
import cupcakesImg from "../static/cupcakes.jpg"
import ringImg from "../static/ring-photo.png"
import garden from "../images/garden/1.jpg"

// Carousel Images
import aithousa from "../images/aithousa/1.jpg"

// Componets
import Layout from "../components/layout"
import Carousel from "../components/carousel/Carousel"
import Seo from "../components/seo"
import DreamIt from "../pagesSpecificComps/DreamIt"
import Categories from "../components/categoriescarousel/CategoriesCarousel"
import ContactUsForm from "../components/contactusform/ContactUsForm"

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
    gsap.to(".ringImg", {
      scrollTrigger: {
        trigger: ".ringImg",
        scrub: 1,
      },
      y: -20,
      ease: Power3.easeInOut,
      duration: 3,
    })
    gsap.to(".cupcakesImg", {
      scrollTrigger: {
        trigger: ".cupcakesImg",
        scrub: 1,
      },
      y: -10,
      ease: Power3.ease,
      duration: 4,
    })
  }, [])

  const carouselPhotos = [
    { photo: aithousa, alt: "Αίθουσα" },
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
      <DreamIt />
      <section className="Love-it">
        <div className="Love-it__imgs">
          <div className="ringImg">
            <img className="Love-it__ring" src={ringImg} alt="wedding ring" />
          </div>
          <div className="cupcakesImg">
            <img
              className="Love-it__cupcakes"
              src={cupcakesImg}
              alt="wedding cupcakes"
            />
          </div>
        </div>
        {/* <IconsInfo /> */}
        <Categories />
        <h4 className="content__subtitle">LOVE IT</h4>
        <h1 className="Love-it__title">#ktimanaias</h1>
        <h5 className="Love-it__undertitle">
          Follow us
          <AiFillInstagram  style={{position: 'relative', top: '5px', fontSize: '20px', marginLeft: '4px'}} />
          <a style={{marginLeft: '2px', textDecoration: 'underline'}} href="https://www.instagram.com/ktimanaiasgr/">
            @ktimanaias
          </a>
        </h5>
        <div className="Live-it__content">
          <Carousel photos={carouselPhotos} isForInsta={true} />
        </div>
      </section>
      <ContactUsForm />
    </Layout>
  )
}

export default IndexPage
