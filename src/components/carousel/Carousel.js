import React from "react"
import styled from "styled-components"
import {v4 as uuidv4} from 'uuid';


// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "./carousel.css"

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay, Navigation } from "swiper"

const CarouselContainer = styled.div`
  z-index: 3;
  width: 100%;
  .mySlide{
    height: 30rem;
    width: 100%;
  }

  .slideImg{
    object-fit: cover;
    width: inherit;
    height: inherit;
  }
` 

const Carousel = ({ photos }) => {
  const params = {
    modules: [Pagination, Autoplay, Navigation],
    slidesPerView: "auto",
    grabCursor: true,
    navigation: true,
    speed: 1900,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  }

  return (
    <CarouselContainer>
      <Swiper {...params}>
        {photos.map((photoObj, index) => 
          <SwiperSlide key={uuidv4()} className="mySlide"> 
            <img src={photoObj.photo} alt={photoObj.alt} className="slideImg"/>
          </SwiperSlide> 
        )}
      </Swiper>
    </CarouselContainer>
  )
}

export default Carousel
