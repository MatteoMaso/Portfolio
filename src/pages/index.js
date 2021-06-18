import * as React from "react"
import Layout from "../components/layout"
import { paperShadow,cvLeftColumn, littleCv, btn, rowColored, textIntro, title, avatar, rowIntro, columnLeftIntro, columnRightIntro } from "../styles/index.module.css"
import Picture from "../images/profile.jpg" 
import CV from "../images/cv_v2.svg" 
import { Link } from "gatsby"

const titleName = {
  fontSize: 30,
}

const heyThere = {
  fontSize: 25,
  marginTop: 5,
  marginBottom: 5
}

const textIntroStyle = {
  fontSize: 20,
  letterSpacing: 2,
  marginTop: 10,
  marginBottom: 5
}

const whiteText = {
  fontSize: 30,
  color: "white",
  textAlignment: "left"
}

const IndexPage = () => {
  return (
    <Layout pageTitle="Portfolio">
    <div>
      <p style={titleName}  className={title}>  @MatteoMaso</p>
    </div>
    <div className={rowIntro}>
      <div className={columnLeftIntro}>
        <p style={heyThere}>Hey there <span role="img" aria-label="hand waveing" >&#128075;</span></p>
        <p style={textIntroStyle} className={textIntro} >
          Inspired by science to improve people’s life and the
          environment, I’m a software engineer with a wide interest
          range and a background in fast prototyping tech solutions.
        </p>
      </div>
      <div className={columnRightIntro}>
        <img className={avatar} alt="" src={Picture}/>
      </div>
    </div>

    <div className={rowColored} >
      <div className={cvLeftColumn}>
        <p style={whiteText}>Take a look at my career path</p>
        <a href="/cv" > <button className={btn}>CV &#8594;</button> </a>
      </div>
      <div>
        <img className={littleCv} alt="" src={CV}/>
      </div>
    </div>
    </Layout>
  )
}

export default IndexPage