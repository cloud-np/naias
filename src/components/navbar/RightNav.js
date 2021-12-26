import React from 'react';
import styled from 'styled-components';
import Socials from '../socials/Socials';
import { Link } from 'gatsby';

const Ul = styled.ul`
  @import url('https://fonts.googleapis.com/css2?family=Manrope&display=swap');
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  font-family: 'Manrope', sans-serif;
  font-size: .8rem;
  li {
    padding: 10px 20px;
  }
  @media (max-width: 768px) {
    z-index: -1;
    flex-flow: column nowrap;
    background-color: rgb(20, 20, 20);
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    padding-top: 3rem;
    transition: transform 0.3s ease-in-out;
    .first {
      margin-top: 4rem;
    }
    .RightNav__li {
      margin-left: 4rem;
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li className='RightNav__li first'>
        <Link to='/church'>
          {open ? "Εκκλησία" : "ΕΚΚΛΗΣΙΑ" }
        </Link>
      </li>
      <li className='RightNav__li'>
        <Link to='/aithousa'>
          {open ? "Αίθουσα" : "ΑΙΘΟΥΣΑ" }
        </Link>
      </li>
      <li className='RightNav__li'>
        <Link to='/eksoterikos'>
          {open ? "Εξωτερικός Χώρος" : "ΕΞΩΤΕΡΙΚΟΣ ΧΏΡΟΣ" }
        </Link>
      </li>
      <li className='RightNav__li'>
        <Link to='/contact-us'>
          {open ? "Contact Us" : "CONTACT US" }
        </Link>
      </li>
      <Socials />
    </Ul>
  )
}

export default RightNav