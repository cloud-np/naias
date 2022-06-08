import React, { useState } from "react"
import styled from "styled-components"
import { useForm } from "react-hook-form"
import { MdEmail } from "react-icons/md"
import useWindowDimensions from "../../helpers/useWindowDimensions"
import arrowDown from "../../static/arrow-down.svg"

const Section = styled.section`
  background-color: var(--light-brown);
  font-family: var(--greek-paragraph-font);
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 40px;
    color: white;
    margin: 1rem;
  }

  .formRow {
    display: flex;
    /* margin: 0 1rem; */
    justify-content: space-evenly;
    width: 100%;
  }

  .sameRow {
    margin: 0 1rem;
    width: 100%;
  }

  input,
  textarea,
  select {
    margin: 10px 0;
    border: none;
    font-size: 0.7rem;
    padding: 15px 20px;
    /* width: 50%; */
    height: auto;
  }

  select{
    width: 50%;
  }

  textarea {
    height: 100px;
    margin-bottom: 15px;
    width: 100%;
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

  @media screen and (min-width: 690px) {
    background-color: aliceblue;
  }
`

const ContactUsForm = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm()
  // const onSubmit = data => console.log(data)
  // const { openForm, setOpenForm } = useState(true)
  // const { height, width } = useWindowDimensions()

  // return (
  //   <Section>
  //       <form onSubmit={handleSubmit(onSubmit)}>
  //         <div className="sameRowInputsCont">
  //           <div>
  //             <label htmlFor="contactUsFirstName">Ονομα</label>
  //             <input
  //               id="contactUsFirstName"
  //               {...register("firstName")}
  //               placeholder="Όνομα"
  //             />
  //           </div>

  //           <div>
  //             <label htmlFor="contactUsLastName">Επιθετο</label>
  //             <input
  //               id="contactUsLastName"
  //               {...register("lastName")}
  //               placeholder="Επίθετο"
  //             />
  //           </div>
  //         </div>

  //         <div className="sameRowInputsCont">
  //           <div className="eventsTypeCont">
  //             <label htmlFor="contactUsSelect">Δεξιωση</label>
  //             <select
  //               id="contactUsSelect"
  //               style={{ backgroundImage: `url('${arrowDown}')` }}
  //               className="select"
  //               {...register("gender")}
  //             >
  //               <option value={null}></option>
  //               <option value="female">Γάμος</option>
  //               <option value="male">Βάπτιση</option>
  //               <option value="other">Εκδήλωση</option>
  //             </select>
  //           </div>
  //           <div className="numOfPeopleCont">
  //             <label htmlFor="contactUsPeopleNum">Ατομα</label>
  //             <input
  //               id="contactUsPeopleNum"
  //               type="number"
  //               {...register("peopleNum")}
  //               placeholder="Αριθμός ατόμων"
  //             />
  //             <label className="underLabel" htmlFor="contactUsPeopleNum">Κατά προσέγγιση</label>
  //           </div>
  //         </div>
  //         <div className="forLargeInput">
  //           <label className="labelForLargeInput" htmlFor="contactUsPhone">Τηλεφωνο</label>
  //           <input
  //             id="contactUsPhone"
  //             type="tel"
  //             {...register("phone")}
  //             placeholder="Τηλεφωνο (Κινητο)"
  //           />
  //         </div>
  //         <div className="forLargeInput">
  //           <label htmlFor="contactUsEmail">E-mail</label>
  //           <input
  //             id="contactUsEmail"
  //             type="email"
  //             {...register("email")}
  //             placeholder="john@example.com"
  //           />
  //         </div>
  //         <textarea
  //           id="contactUsComments"
  //           {...register("comments")}
  //           placeholder="Σχόλια"
  //         />
  //         <button type="submit">Αποστολή</button>
  //       </form>
  //     <div className="mapCont">
  //       <iframe
  //         width={width <= 768 ? "100%" : "750"}
  //         height="300"
  //         frameBorder="0"
  //         scrolling="no"
  //         marginHeight="0"
  //         marginWidth="0"
  //         id="gmap_canvas"
  //         src="https://maps.google.com/maps?width=750&amp;height=347&amp;hl=en&amp;q=%CE%9A%CE%A4%CE%97%CE%9C%CE%91%20%CE%9D%CE%91%CE%AA%CE%91%CE%A3,%20Pithagora,%20Koropi,%20Greece%20Athens+(%CE%9A%CF%84%CE%AE%CE%BC%CE%B1%20%CE%9D%CE%91%CE%AA%CE%91%CE%A3)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
  //       ></iframe>
  //     </div>
  //   </Section>
  // )
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
      <div className="row">
        <div className="col-12 text-center">
          <div className="contactForm">
            <form
              id="contact-form"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
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
                <div className="sameRow">
                  <input
                    type="text"
                    name="name"
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Please enter your last name",
                      },
                      maxLength: {
                        value: 30,
                        message: "Please use 30 characters or less",
                      },
                    })}
                    className="form-control formInput"
                    placeholder="Last Name"
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
                    <span className="errorMessage">
                      {errors.subject.message}
                    </span>
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
                    <span className="errorMessage">
                      {errors.subject.message}
                    </span>
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
        </div>
      </div>
    </Section>
  )
}

export default ContactUsForm
