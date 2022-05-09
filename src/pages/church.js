import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import church from "../images/church/1.jpg"
import PhotoShowcase from "../components/photoShowcase/PhotoShowcase"

const Church = () => {
  return (
    <Layout>
      <Seo title="Church" />
      <PhotoShowcase givenImages={
        [
          {
            src: church,
            alt: "Church",
            extraClasses: "card-wide card-tall",
          },
          {
            src: "https://images.unsplash.com/photo-1583585635793-0e1894c169bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=913&q=80",
            alt: "Stary Night",
            extraClasses: "card-wide",
          },
          {
            src: "https://images.unsplash.com/photo-1583531172005-814191b8b6c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80",
            alt: "Ship",
            extraClasses: "",
          },
          {
            src: "https://images.unsplash.com/photo-1583426573939-97d09302d76a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80",
            alt: "Elephant",
            extraClasses: "",
          },
          {
            src: "https://images.unsplash.com/photo-1583532452513-a02186582ccd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
            alt: "Egg",
            extraClasses: "",
          },
          {
            src: "https://images.unsplash.com/photo-1583445013765-46c20c4a6772?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
            alt: "Beach",
            extraClasses: "",
          },
          {
            src: "https://images.unsplash.com/photo-1583562835057-a62d1beffbf3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=949&q=80",
            alt: "Sunset",
            extraClasses: "card-tall",
          },
          {
            src: "https://images.unsplash.com/photo-1583483425010-c566431a7710?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80",
            alt: "Snowy Mountain",
            extraClasses: "card-wide card-tall",
          },
          {
            src: "https://images.unsplash.com/photo-1649654078169-889c259ea569?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
            alt: "Photo",
            extraClasses: "",
          },
          {
            src: "https://images.unsplash.com/photo-1583518257225-f9a8081f6a84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
            alt: "Sand",
            extraClasses: "",
          },
          {
            src: "https://images.unsplash.com/photo-1583468323330-9032ad490fed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1955&q=80",
            alt: "Flower",
            extraClasses: "",
          },
          {
            src: "https://images.unsplash.com/photo-1583425423320-2386622cd2e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1980&q=80",
            alt: "Horse",
            extraClasses: "",
          },
        ]
      }/>
    </Layout>
  )
}

export default Church
