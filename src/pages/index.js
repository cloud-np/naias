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
import IconsInfo from "../components/iconsinfo/IconsInfo"
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
    gsap.fromTo(
      ".animText",
      {
        autoAlpha: 0,
        y: 50,
      },
      {
        scrollTrigger: {
          trigger: ".animText",
          scrub: 1,
        },
        duration: 2,
        autoAlpha: 1,
        y: 0,
      }
    )
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
          <header className="Dream-it__header">
            <h4 className="Dream-it__subtitle content__subtitle">DREAM IT</h4>
            <h1 className="Dream-it__title">Γνώση, αγάπη και τεχνογνωσία</h1>
            <blockquote className="Dream-it__quote">
              <p>
                <i>
                  &ldquo;Η ζωή είναι ένα λουλούδι κι ο έρωτας το μέλι
                  του.&rdquo;
                </i>
                {/* <i>&ldquo;Μια αστραπή η ζωή μας... μα προλαβαίνουμε&rdquo;</i> */}
              </p>
            </blockquote>
            {/* <figcaption style={{float: "right", marginTop: "-.8rem"}}>—Νίκος Καζαντζάκης</figcaption> */}
            <figcaption style={{ float: "right", marginTop: "-.8rem" }}>
              —Βίκτωρ Ουγκώ
            </figcaption>
          </header>
          <div className="Dream-it__carousel">
            <Carousel photos={carouselPhotos} />
          </div>
          <main className="Dream-it__main">
            <p className="Dream-it__prolog animText">
              Με αγάπη, μεράκι και σεβασμό προς την φύση, δημιουργήσαμε ένα
              παραμυθένιο χώρο από Πέτρα και Ξύλο, που μας χαρίζει την
              ευχαρίστηση να γεμήσουμε τους ανθρώπους αξέχαστες στιγμές.
            </p>
            <p className="animText">
              Η εκπληκτική minimal αίθουσα δεξιώσεων με μοντέρνα αρχιτεκτονική,
              σας περιμένει ακόμα και τους πιο κρύους χειμώνες να απολαύσετε.
            </p>
          </main>
        </section>
      </article>
      <section className="Live-it">
        <div className="Live-it__imgs">
          <div className="ringImg">
            <img className="Live-it__ring" src={ringImg} alt="wedding ring" />
          </div>
          <div className="cupcakesImg">
            <img
              className="Live-it__cupcakes"
              src={cupcakesImg}
              alt="wedding cupcakes"
            />
          </div>
        </div>
        <IconsInfo />
        <h4 className="content__subtitle">LIVE IT</h4>
        <h1 className="Live-it__title">
          Live your <i style={{ fontWeight: "normal" }}>dream</i>
        </h1>
        <div className="Live-it__content">
          <Carousel photos={carouselPhotos} isForInsta={true}/>
        </div>
      </section>
      <ContactUsForm />
    </Layout>
  )
}

export default IndexPage
