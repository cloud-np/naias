import * as React from "react"
import { useEffect } from "react"
import { Power3 } from "gsap"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

// CSS
import "normalize.css"
import "../css/main.css"
import "../css/home.css"
import "../css/animations.css"

// Componets
import Layout from "../components/layout"
import ShowcaseVideo from "../pagesSpecificComponents/ShowcaseVideo"
import Seo from "../components/seo"
import DreamIt from "../pagesSpecificComponents/DreamIt"
import LoveIt from "../pagesSpecificComponents/LoveIt"
import ContactUsForm from "../components/contactusform/ContactUsForm"

gsap.registerPlugin(ScrollTrigger)

const IndexPage = () => {
  useEffect(() => {
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

  return (
    <Layout>
      <Seo title="Home" />
      <ShowcaseVideo />
      <DreamIt />
      <LoveIt />
      <ContactUsForm />
    </Layout>
  )
}

export default IndexPage
