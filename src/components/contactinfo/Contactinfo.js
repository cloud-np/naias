import React from "react"
import styled from "styled-components"

import { MdEmail } from "react-icons/md"
import { BsFillTelephoneFill as BsTel } from "react-icons/bs"
import { FaMapMarkerAlt } from "react-icons/fa"

const Section = styled.section`
  .info {
    & > div {
      display: flex;
      color: var(--primary-color);
    }
    > p {
      margin-bottom: 0.7rem;
    }
    p > a {
      color: var(--primary-color);
    }
  }
  p {
    margin-top: -0.25rem;
    margin-left: 0.5rem;
  }
  .footerInfo {
    p {
      font-size: .81rem;
      color: var(--grey-color);
    }
    p > a {
      font-family: var(--greek-title-font);
      color: var(--grey-color);
    }
  }
`

const Contactinfo = ({ isForFooter }) => {
  //
  return (
    <Section>
      <div className={`${isForFooter ? "footerInfo" : "otherInfo"} info`}>
        <div>
          <MdEmail />
          <p>
            <a className="underlineLink" href="mailto:%20ktimanaias@gmail.com">ktimanaias@gmail.com</a>
          </p>
        </div>
        <div>
          <BsTel />
          <p>
            <a className="underlineLink" href="tel:+306946958185">6946958185</a> -{" "}
            <a className="underlineLink" href="tel:+306945292453">6945292453</a>
          </p>
        </div>
        <div>
          <FaMapMarkerAlt />
          <p>
           <a className="underlineLink" href="https://www.google.com/maps/place/+/@37.865753,23.873273,15z/data=!4m2!3m1!1s0x0:0x3244617b005751ee?ved=2ahUKEwiwjLnR5ejgAhVBU1AKHS9gAv0Q_BIwE3oECAYQCA">
              Πυθαγόρα 24, 19400, Κορωπί
           </a>
          </p>
        </div>
      </div>
    </Section>
  )
}

export default Contactinfo
