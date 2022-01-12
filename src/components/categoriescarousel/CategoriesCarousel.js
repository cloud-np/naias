import React from "react"
import styled from "styled-components"

import FloatingCard from "../floatingcard/FloatingCard"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay, Navigation } from "swiper"
// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

const Div = styled.div`
  /* .imgCont > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    opacity: 1;
    transition: opacity 700ms cubic-bezier(0.26, 1.04, 0.54, 1) 0s;
  } */
  ul {
    display: flex;
    flex-direction: column;
  }

  h3 {
    font-family: var(--greek-title-font);
  }
  li {
    list-style: none;
  }
`

const Categories = () => {
  const params = {
    modules: [Pagination, Autoplay, Navigation],
    slidesPerView: 1.1,
    spaceBetween: 5,
    grabCursor: true,
    speed: 1000,
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
  }
  return (
    <Div>
        <h4 className="content__subtitle">LIVE IT</h4>
        <h1 className="">Δεξιώσεις</h1>
      <Swiper {...params}>
        <SwiperSlide className="mySlide">
          <FloatingCard />
        </SwiperSlide>
        <SwiperSlide className="mySlide">
          <FloatingCard />
        </SwiperSlide>
        <SwiperSlide className="mySlide">
          <FloatingCard />
        </SwiperSlide>
      </Swiper>
    </Div>
  )
}

export default Categories
