import React from "react"
import styled from "styled-components"
import { useForm } from "react-hook-form"
import arrowDown from "../../static/arrow-down.svg"

const Section = styled.section`
  background-color: var(--light-brown);
  font-family: var(--greek-paragraph-font);
  max-width: 100%;
  padding: 0 15px;
  margin: 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* padding: 50px 40px; */
    color: white;
    /* margin: 1rem; */
  }

  .formRow {
    display: flex;
    margin: 1rem;
    width: 90%;
  }

  .sameRow {
    display: flex;
    flex-direction: row;
    align-self: flex-end;
    justify-content: flex-start;
    width: 100%;
    margin-right: 1rem;
  }

  input,
  textarea,
  select {
    border: none;
    font-size: 0.7rem;
    padding: 15px 20px;
    height: auto;
    width: 100%;
  }

  select {
  }

  textarea {
    height: 100px;
    margin-bottom: 15px;
    resize: vertical;
  }

  input:focus {
    outline: none;
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

  .select {
    background-position: calc(100% - 1em) center;
    width: 100%;
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

  @media screen and (min-width: 690px) {
    background-color: aliceblue;
  }
`

const ContactUsForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = async data => {
    const { name, email, subject, message } = data

    console.log("Name: ", name)
    console.log("Email: ", email)
    console.log("Subject: ", subject)
    console.log("Message: ", message)
  }

  return (
    <Section>
      <div className="contactForm">
        <form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
          {/* Row 1 of form */}
          <div className="formRow">
            <div className="sameRow">
              <input
                type="text"
                name="name"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Please enter your name",
                  },
                  maxLength: {
                    value: 30,
                    message: "Please use 30 characters or less",
                  },
                })}
                className="form-control formInput"
                placeholder="Name"
              ></input>
              {errors.name && (
                <span className="errorMessage">{errors.name.message}</span>
              )}
            </div>
          </div>
          {/* Row 2 of form */}
          <div className="formRow">
            <div className="sameRow">
              <input
                type="text"
                name="subject"
                {...register("subject", {
                  required: {
                    value: true,
                    message: "Please enter a subject",
                  },
                  maxLength: {
                    value: 75,
                    message: "Subject cannot exceed 75 characters",
                  },
                })}
                className="form-control formInput"
                placeholder="Subject"
              ></input>
              {errors.subject && (
                <span className="errorMessage">{errors.subject.message}</span>
              )}
            </div>
            <div className="sameRow">
              <input
                type="email"
                name="email"
                {...register("email", {
                  required: true,
                  pattern:
                    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                })}
                className="form-control formInput"
                placeholder="Email address"
              ></input>
              {errors.email && (
                <span className="errorMessage">
                  Please enter a valid email address
                </span>
              )}
            </div>
          </div>
          {/* Row 3 of form */}
          <div className="formRow">
            <div className="sameRow">
              <select
                id="contactUsSelect"
                style={{ backgroundImage: `url('${arrowDown}')` }}
                className="select"
                {...register("eventType")}
              >
                <option value={null}></option>
                <option value="wedding">Γάμος</option>
                <option value="baptism">Βάπτιση</option>
                <option value="other">Εκδήλωση</option>
              </select>
              {errors.subject && (
                <span className="errorMessage">{errors.subject.message}</span>
              )}
            </div>
            <div className="sameRow">
              <input
                id="contactUsPhone"
                type="tel"
                {...register("phone")}
                placeholder="Τηλεφωνο (Κινητο)"
              />
            </div>
          </div>
          {/* Row 4 of form */}
          <div className="formRow">
            <div className="sameRow">
              <textarea
                rows={3}
                name="message"
                {...register("message", {
                  required: true,
                })}
                className="form-control formInput"
                placeholder="Message"
              ></textarea>
              {errors.message && (
                <span className="errorMessage">Please enter a message</span>
              )}
            </div>
          </div>
          <button className="submit-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </Section>
  )
}

export default ContactUsForm
