import React, { useEffect } from "react"
import { FaBaby, FaChurch } from "react-icons/fa"
import { BsFillPeopleFill as PeopleIcon } from "react-icons/bs"
import styled from "styled-components"
import gsap from "gsap"

const Ul = styled.ul`
  display: flex;
  color: white;
  flex-direction: column;
  > li {
    margin: 0 2rem;

  }
  margin-top: 4rem;
  text-align: left;
  font-family: var(--greek-paragraph-font);

  .infoCont {
    margin-bottom: 4rem;
    display: flex;
  }

  svg {
    font-size: 7.2rem;
    margin-right: 2rem;
    margin-top: 1rem;
    color: var(--primary-ligher-color);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  h3 {
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 0;
  }

  .iconCont {
    width: 150px;
    margin-right: 3rem;
    position: relative;
  }

  .churchIcon {
    width: 40px;
    /* margin-right: 1.7rem; */
    margin-left: 0.5rem;
  }
  .babyIcon {
    width: 40px;
  }
  .usersIcon {
    width: 40px;
  }
`

const IconsInfo = () => {
  useEffect(() => {
    gsap.fromTo(
      ".infoCont", {
        autoAlpha: 0,
        y: 50,
      },
      {
        scrollTrigger: {
          trigger: ".middleCont",
          once: true,
        },
        duration: 2,
        autoAlpha: 1,
        y: 0,
      }
    )
  }, [])

  return (
    <Ul>
      <li className="infoCont">
        <div className="iconCont">
          <FaChurch className="churchIcon" />
        </div>

        <div>
          <h3>Γάμος</h3>
          <p>
            Με γνώμονα τα θέλω σας και πυξίδα την αγάπη σας με σεβασμό και
            υπευθυνότητα θα διοργανώσουμε μια ονειρεμένη δεξίωση γάμου όπως την
            ονειρευτήκατε.
          </p>
        </div>
      </li>

      <li className="infoCont middleCont">
        <div className="iconCont">
          <FaBaby className="babyIcon" />
        </div>
        <div>
          <h3>Βάπτιση</h3>
          <p>
            Το μωράκι σας είναι ο κόσμος όλος! Ελάτε να μιλήσουμε για την πιο
            elegant δεξίωση βάπτισης, με αίσθημα ευθύνης για την μοναδικότητα
            της στιγμής.
          </p>
        </div>
      </li>

      <li className="infoCont">
        <div className="iconCont">
          <PeopleIcon className="usersIcon" />
        </div>
        <div>
          <h3>Εκδηλώσεις</h3>
          <p>
            Παρέχοντας οργάνωση και αξιοπιστεία αναλαμβάνουμε μεγάλη γκάμα
            εκδηλώσεων όπως: event, παιδικά πάρτι, κοπές πίτας ή gala.
          </p>
        </div>
      </li>
    </Ul>
  )
}

export default IconsInfo
