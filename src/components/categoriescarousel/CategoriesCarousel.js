import React from "react"
import styled from "styled-components"

import night from "../../static/night.jpeg"
import gamos from "../../images/gamos.jpg"
// import gamos from "../../images/gamos2.jpg"
import baby from "../../images/baby-baptism.jpg"
import eventImg from "../../images/event.jpeg"
import { FaBaby, FaChurch } from "react-icons/fa"
import { BsFillPeopleFill as PeopleIcon } from "react-icons/bs"

import FloatingCard from "../floatingcard/FloatingCard"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay, Parallax } from "swiper"
// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

const Div = styled.div`
  /* display: flex; */
  /* ul {
    display: flex;
    flex-direction: column;
  } */

  h3 {
    font-family: var(--greek-title-font);
  }

  li {
    list-style: none;
  }

  /* @media screen and (max-width: 1200px) {
    width: 75vw;
  } */

  /* .mySlide {
    width
  } */
  .content {
    display: grid;
    place-items: center;
    margin-left: auto;
  }

  .swiper {
    margin-top: 3rem;
    margin: 0 auto;
    /* max-width: 45vw; */
  }
  .mySlide {
    width: 100%;
  }
`

// breakpoints: {
//   "@0.00": {
//     slidesPerView: 1.2,
//   },
//   "@0.75": {
//     slidesPerView: 1.2,
//   },
//   "@1.00": {
//     slidesPerView: 3,
//   },
//   "@1.50": {
//     slidesPerView: 4,
//   },
// },
const Categories = () => {
  const params = {
    modules: [Pagination, Autoplay, Parallax],
    slidesPerView: 1,
    spaceBetween: 1,
    grabCursor: true,
    speed: 1200,
    parallax: true,
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
  }
  return (
    <Div>
      <h4 className="content__subtitle">LIVE IT</h4>
      <h1 className="">Δεξιώσεις</h1>
      <div className="content">
        <Swiper className="swiper" {...params}>
          <SwiperSlide className="mySlide">
            <FloatingCard
              givenStyles={{
                background: `url(${gamos}) calc(100% - 50%) center no-repeat`,
                backgroundSize: "600px",
              }}
              url={`/gamos`}
              title={
                <>
                  <FaChurch />
                  <h2>Γάμος</h2>
                </>
              }
              textSubTitle="DREAM IT"
              mainText={
                <>
                  <h3>
                    <i>Ονειρική</i> Γαμήλια δεξίωση
                  </h3>
                  <p>
                    Με γνώμονα τα θέλω σας και πυξίδα την αγάπη σας με σεβασμό
                    και υπευθυνότητα θα διοργανώσουμε μια ονειρεμένη δεξίωση
                    γάμου όπως την ονειρευτήκατε.
                  </p>
                </>
              }
            />
          </SwiperSlide>
          <SwiperSlide className="mySlide">
            <FloatingCard
              givenStyles={{
                background: `url(${baby}) calc(100% - 53%) calc(100% - 79%) no-repeat`,
                backgroundSize: "600px",
              }}
              url={`/baptism`}
              title={
                <>
                  <FaBaby />
                  <h2>Βάπτιση</h2>
                </>
              }
              textSubTitle="LIVE IT"
              mainText={
                <>
                  <h3>
                    Το μωράκι σας είναι ο <i>κόσμος</i> όλος!
                  </h3>
                  <p>
                    Ελάτε να μιλήσουμε για την πιο elegant δεξίωση βάπτισης, με
                    αίσθημα ευθύνης για την μοναδικότητα της στιγμής.
                  </p>
                </>
              }
            />
          </SwiperSlide>
          <SwiperSlide className="mySlide">
            <FloatingCard
              givenStyles={{
                background: `url(${eventImg}) calc(100% - 53%) calc(100% - 77%) no-repeat`,
                backgroundSize: "555px",
              }}
              url={`/events`}
              title={
                <>
                  <PeopleIcon />
                  <h2>Εκδηλώσεις</h2>
                </>
              }
              textSubTitle="LIVE IT"
              mainText={
                <>
                  <h3>
                    Γνώση, <i>Αγάπη, Τεχνογνωσία</i> και Ευχαρίστηση
                  </h3>
                  <p>
                    Οργάνωση και επαγγελματισμός για οποιαδήποτε ανάγκη
                    εκδήλωση, event, παιδικό πάρτι, κοπή πίτας ή gala.
                  </p>
                </>
              }
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </Div>
  )
}

export default Categories
