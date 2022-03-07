import React from "react"
import Layout from "../components/layout"
import ShowcaseVideo from "../pagesSpecificComps/ShowcaseVideo"
import Carousel from "../components/carousel/Carousel"
import Seo from "../components/seo"
import PhotoShowcase from "../components/photoShowcase/PhotoShowcase"

const Church = () => {
  return (
    <Layout>
      <Seo title="Church" />
      <PhotoShowcase />
    </Layout>
  )
}

export default Church
