import React, { useState } from "react"
import styled from "styled-components"
import { useForm } from "react-hook-form"
import { MdEmail } from "react-icons/md"
import useWindowDimensions from "../../helpers/useWindowDimensions"
import arrowDown from "../../static/arrow-down.svg"

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

  input,
  textarea,
  select {
    margin: 10px 0;
    border: none;
    font-size: 0.7rem;
    padding: 15px 20px;
    width: 300px;
    height: auto;
  }
  textarea {
    height: 100px;
    margin-bottom: 15px;
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

  .closedFormInfo {
    display: flex;
    justify-content: center;
    padding: 5rem;
  }

  .mailIcon {
    vertical-align: -1px;
    margin-left: 3px;
  }

  .select {
    background-position: calc(100% - 1em) center;
    width: 300px;
    appearance: none;
    font-size: 14px;
    letter-spacing: 0.5px;
    color: rgb(64, 66, 63);
    border: none;
    border-radius: 0px;
    box-shadow: none;
    padding: 15px 20px;
    background-color: rgb(255, 255, 255);
    background-size: 24px;
    background-repeat: no-repeat;
  }

  label {
    text-transform: uppercase;
    letter-spacing: 2px;
    width: 100%;
    margin-left: 16px;
  }

  .sameRowInputsCont {
    display: flex;
    margin: 0;
    div {
      display: block;
    }

    > :nth-child(1) {
      margin-right: 10px;
    }

    label {
      margin: 10px;
    }

    input,
    select {
      width: 94%;
      margin-left: 6px;
    }

    #contactUsPeopleNum{
      margin-bottom: 0;
    }

    .underLabel {
      font-size: .7rem;
      text-transform: none;
      letter-spacing: .3px;
    }
  }

  .forLargeInput {
    display: -ms-inline-grid;
    display: -moz-inline-grid;
    display: inline-grid;
  }
  .forLargeInput > input {
    margin-left: 10px;
  }

  @media screen and (min-width: 690px){
    background-color: aliceblue;
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
  const { openForm, setOpenForm } = useState(true)
  const { height, width } = useWindowDimensions()

  return (
    <Section>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="sameRowInputsCont">
            <div>
              <label htmlFor="contactUsFirstName">Ονομα</label>
              <input
                id="contactUsFirstName"
                {...register("firstName")}
                placeholder="Όνομα"
              />
            </div>

            <div>
              <label htmlFor="contactUsLastName">Επιθετο</label>
              <input
                id="contactUsLastName"
                {...register("lastName")}
                placeholder="Επίθετο"
              />
            </div>
          </div>

          <div className="sameRowInputsCont">
            <div className="eventsTypeCont">
              <label htmlFor="contactUsSelect">Δεξιωση</label>
              <select
                id="contactUsSelect"
                style={{ backgroundImage: `url('${arrowDown}')` }}
                className="select"
                {...register("gender")}
              >
                <option value={null}></option>
                <option value="female">Γάμος</option>
                <option value="male">Βάπτιση</option>
                <option value="other">Εκδήλωση</option>
              </select>
            </div>
            <div className="numOfPeopleCont">
              <label htmlFor="contactUsPeopleNum">Ατομα</label>
              <input
                id="contactUsPeopleNum"
                type="number"
                {...register("peopleNum")}
                placeholder="Αριθμός ατόμων"
              />
              <label className="underLabel" htmlFor="contactUsPeopleNum">Κατά προσέγγιση</label>
            </div>
          </div>
          <div className="forLargeInput">
            <label className="labelForLargeInput" htmlFor="contactUsPhone">Τηλεφωνο</label>
            <input
              id="contactUsPhone"
              type="tel"
              {...register("phone")}
              placeholder="Τηλεφωνο (Κινητο)"
            />
          </div>
          <div className="forLargeInput">
            <label htmlFor="contactUsEmail">E-mail</label>
            <input
              id="contactUsEmail"
              type="email"
              {...register("email")}
              placeholder="john@example.com"
            />
          </div>
          <textarea
            id="contactUsComments"
            {...register("comments")}
            placeholder="Σχόλια"
          />
          <button type="submit">Αποστολή</button>
        </form>
      <div className="mapCont">
        <iframe
          width={width <= 768 ? "100%" : "750"}
          height="300"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          id="gmap_canvas"
          src="https://maps.google.com/maps?width=750&amp;height=347&amp;hl=en&amp;q=%CE%9A%CE%A4%CE%97%CE%9C%CE%91%20%CE%9D%CE%91%CE%AA%CE%91%CE%A3,%20Pithagora,%20Koropi,%20Greece%20Athens+(%CE%9A%CF%84%CE%AE%CE%BC%CE%B1%20%CE%9D%CE%91%CE%AA%CE%91%CE%A3)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </Section>
  )
}

export default ContactUsForm
