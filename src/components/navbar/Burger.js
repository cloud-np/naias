import React, { useState } from 'react';
import styled from 'styled-components';
import RightNav from './RightNav';

const StyledBurger = styled.div`
  width: 1rem;
  height: 1rem;
  right: 20px;
  margin-top: 10px;
  z-index: 22;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    cursor: pointer;
    :hover {
      span{
        background-color: var(--primary-color);
      }
    }
  }
  span {
    width: 1rem;
    height: .15rem;
    background-color: ${({ open }) => open ? '#ccc' : '#fff'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false)
  
  return (
    <div style={{"marginTop": "-16px"}}>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </StyledBurger>
      <RightNav open={open}/>
    </div>
  )
}

export default Burger