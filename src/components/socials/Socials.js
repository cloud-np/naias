import React from "react"
import styled from "styled-components"
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs"
import { v4 as uuidv4 } from "uuid"

const Div = styled.div`
  ul > li > a > svg {
    &:hover {
      color: var(--primary-lighter-color);
      /* transform: scale(1.15); */
    }
    transition: all .3s ease-in-out;
  }

  .burgerSocials {
    list-style: none;
    display: none;
    margin-left: 2rem;
    > li {
      margin-left: 1rem;
      color: #fff;
    }
    > li > a > svg {
      color: var(--white-color);
    }
  }
  @media (max-width: 768px) {
    .burgerSocials {
      display: flex;
    }
    margin-left: 1rem;
  }

  .footerSocials {
    display: flex;
    list-style: none;
    > li {
      padding: 0 1rem;
      font-size: 22px;
    }
    > li > a > svg {
      color: var(--primary-color);
    }
  }
`

const Socials = ({ isForFooter }) => {
  const socialsInfo = [
    { link: "https://www.facebook.com/ktimanaiasgr", icon: BsFacebook },
    { link: "https://www.instagram.com/ktimanaiasgr/", icon: BsInstagram },
    { link: "https://twitter.com/ktimanaias", icon: BsTwitter },
    { link: "https://www.youtube.com/user/ktimanaiasgr", icon: BsYoutube },
  ]
  return (
    <Div>
      <ul className={isForFooter ? "footerSocials" : "burgerSocials"}>
        {socialsInfo.map((social, index) => (
          <li key={uuidv4()}>
            <a href={social.link}>
              <social.icon/>
            </a>
          </li>
        ))}
      </ul>
    </Div>
  )
}

export default Socials
