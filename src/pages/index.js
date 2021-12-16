import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import promo from '../assets/naias-promo.mp4';
import "normalize.css"
import "../css/main.css";

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <section className="showcase">
      <figure className="video_container">
        <video src={promo}  type='video/mp4' className='video_container__video' autoPlay loop muted>
        </video>
      </figure>
      <div className="showcase_content">
        <StaticImage 
          src={"../static/naias-logo-golden.png"}
          alt="Kthma Naias logo"
          formats={["auto", "webp", "avif"]}
          className="showcase_content__logo fade-in-with-scale"
        />
				<h3 className="showcase_content__undertext fade-in">We make a day to remember</h3>
				{/* <a href="#about" className="btn">Read More</a> */}
			</div>

    </section>
    {/* <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p> */}
  </Layout>
)

export default IndexPage