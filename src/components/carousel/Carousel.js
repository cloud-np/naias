import React from 'react'
import styled from "styled-components"

import church from '../../images/church/1.jpg'


const CarouselWrapper = styled.div`
    margin-top: 3rem;
    display: flex;
    .imgWrapper{
        margin-left: 1rem;
        width: 600px;
        height: 25rem;
        overflow-x: scroll;
    }

    .img{
        height: inherit;
        object-fit: cover;
    }
`


const Carousel = () => {
    return (
        <CarouselWrapper>
            <div className='imgWrapper'>
                <img className='img' src={church} alt="Εκκλησάκι" />
            </div>
            <div className='imgWrapper'>
                <img className='img' src={church} alt="Εκκλησάκι" />
            </div>
        </CarouselWrapper>
    )
}

export default Carousel
