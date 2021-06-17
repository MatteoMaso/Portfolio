import * as React from "react"
import Layout from "../components/layout"
import { rowColored, textIntro, title, avatar, rowIntro, columnLeftIntro, columnRightIntro } from "../css/index.module.css"
import Picture from "../images/profile.jpg" 

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

const IndexPage = () => {
  return (
    <Layout pageTitle="Portfolio">
    <div>
      <p style={titleName}  className={title}>  @MatteoMaso</p>
    </div>
    <div className={rowIntro}>
      <div className={columnLeftIntro}>
        <p style={heyThere}>Hey there &#128075;</p>
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

    
    </Layout>
  )
}

export default IndexPage