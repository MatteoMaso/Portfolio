import * as React from "react"
import Layout from "../components/layout"
import { avatar, rowIntro, columnLeftIntro, columnRightIntro } from "../css/index.module.css"
import Picture from "../images/profile.jpg" 

const introParagraph = {
  textAlign: "left",
  fontSize: 22,
  letterSpacing: 3
}

const IndexPage = () => {
  return (
    <Layout pageTitle="Portfolio">
    <div className={rowIntro}>
      <div className={columnLeftIntro}>
        <p>Hey there</p>
        <p style={introParagraph}>
          Inspired by science to improve people’s life and the
          environment, I’m a software engineer with a wide interest
          range and a background in fast prototyping tech solutions.
        </p>
      </div>
      <div className={columnRightIntro}>
        <img className={avatar}
          alt="profile picture"
          src={Picture}
        ></img>
        
      </div>
    </div>

    </Layout>
  )
}

export default IndexPage