import React from "react"
import styled from "styled-components"
import { v4 as uuidv4 } from "uuid"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "./carousel.css"

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay, Navigation } from "swiper"
import examplePosts from "../../helpers/instagram"

const CarouselContainer = styled.div`
  z-index: 3;
  width: 100%;
  .mySlide {
    height: 30rem;
    width: 100%;
  }
  .instaSlide {
    height: 10rem;
    width: 150px;
  }

  .slideImg {
    object-fit: cover;
    width: inherit;
    height: inherit;
  }
`

const Carousel = ({ photos, isForInsta = false }) => {
  const params = isForInsta
    ? {
        modules: [Pagination, Autoplay, Navigation],
        slidesPerView: 2.6,
        loop: true,
      }
    : {
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
    const carouselPhotos = isForInsta ? examplePosts : photos
  return (
    <CarouselContainer>
      <Swiper {...params}>
        {/* {photos.map((photoObj, index) => 
          <SwiperSlide key={uuidv4()} className="mySlide"> 
            <img src={photoObj.photo} alt={photoObj.alt} className="slideImg"/>
          </SwiperSlide> 
        )} */}
        {carouselPhotos.map((photoObj, index) => (
              <SwiperSlide key={uuidv4()} className={`${isForInsta ? 'instaSlide' : 'mySlide'}`}>
                <a className="slideImg" href={photoObj.url ? photoObj.url : '#'}>
                  <img
                    src={photoObj.photo}
                    alt={photoObj.alt}
                    className='slideImg'
                  />
                </a>
              </SwiperSlide>
            ))}
      </Swiper>
    </CarouselContainer>
  )
}

export default Carousel
