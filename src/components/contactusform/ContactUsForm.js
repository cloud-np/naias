import React from "react"
import styled from "styled-components"
import { useForm } from "react-hook-form"
import useWindowDimensions from "../../helpers/useWindowDimensions"

import map from "../../static/map.jpg"

const Section = styled.section`
  background-color: var(--light-brown);
  font-family: var(--greek-paragraph-font);
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 40px;
    color: white;
  }
  input {
    margin: 10px 0;
    border: none;
    font-size: 0.7rem;
    padding: 15px 20px;
    width: 300px;
  }
  input:focus {
    outline: none;
  }

  .lastName {
    margin-bottom: 1rem;
  }

  button {
    color: white;
    padding: 0 2rem;
    text-align: center;
    position: relative;
    transition: all 0.3s cubic-bezier(0.42, 0, 0.58, 1);
    height: 40px;
    border: 1px solid var(--light-brown);
    background: var(--primary-color);
    cursor: pointer;
  }

  button:hover {
    background-color: var(--light-brown);
    border: 1px solid #fff;
  }

  .mapCont {
    padding-top: 1rem;
    padding-bottom: 0;
    max-width: 100%;
    height: 300px;
  }
  #gmap_canvas {
    margin: 0;
    padding: 0;
  }
`

const ContactUsForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = data => console.log(data)
  const { height, width } = useWindowDimensions()

  return (
    <Section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName")} placeholder="Όνομα" />
        <input
          className="lastName"
          {...register("lastName")}
          placeholder="Επίθετο"
        />

        <button type="submit">Αποστολή</button>
      </form>
      <div className="mapCont">
        <iframe
          width={width <= 768 ? "100%" : "750"}
          height="300"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          id="gmap_canvas"
          src="https://maps.google.com/maps?width=750&amp;height=347&amp;hl=en&amp;q=%CE%9A%CE%A4%CE%97%CE%9C%CE%91%20%CE%9D%CE%91%CE%AA%CE%91%CE%A3,%20Pithagora,%20Koropi,%20Greece%20Athens+(%CE%9A%CF%84%CE%AE%CE%BC%CE%B1%20%CE%9D%CE%91%CE%AA%CE%91%CE%A3)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </Section>
  )
}

export default ContactUsForm
