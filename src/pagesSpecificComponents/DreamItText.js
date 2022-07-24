import React, { useEffect } from "react"
import gsap from "gsap"
import styled from "styled-components"

const Section = styled.div`
  margin: 0 2rem;
  max-width: 500px;
  margin-right: 10vw;
  margin-bottom: 5rem;
  color: var(--white-color);

  align-self: center;
  h4 {
    color: var(--primary-color);
  }
  h2 {
    position: relative;
    font-size: 2rem;
  }
  .prolog {
    font-size: 1.1rem;
    margin-top: 2rem;
  }
`
const DreamItText = () => {
  useEffect(() => {
    gsap.fromTo(
      ".animText",
      {
        autoAlpha: 0,
        y: 30,
      },
      {
        scrollTrigger: {
          trigger: ".animText",
          scrub: 1,
        },
        duration: 1.5,
        autoAlpha: 1,
        y: 0,
      }
    )
  }, [])
  return (
    <Section>
      <h4 className="content__subtitle animText">DREAM IT</h4>
      <h2 className="animText">Κτήμα Ναϊάς</h2>
      <p className="prolog animText">
        Με αγάπη, μεράκι και σεβασμό προς την φύση, δημιουργήσαμε ένα
        παραμυθένιο χώρο από Πέτρα και Ξύλο, που μας χαρίζει την ευχαρίστηση να
        γεμήσουμε τους ανθρώπους αξέχαστες στιγμές.
      </p>
    </Section>
  )
}

export default DreamItText
