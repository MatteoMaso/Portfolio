import * as React from 'react'
import Layout from '../components/layout'
import { cvStyle, sheets, cvContainer, btnRow, button} from '../styles/cv.module.css'
import cv from '../images/cv_v2.svg'
import cvPDF from '../images/cvv2.pdf'

const CV = () => {
    return (
        <Layout pageTitle="Resume" className={cvContainer}>
            <div style={{marginBottom: "30px"}} >
                <div className={sheets} >
                    <img alt="" className={cvStyle} src={cv}></img>
                </div>
            </div>

            <div className={btnRow}>
                <a href={cvPDF}download><button className={button} >Download</button></a>{` `}
            </div>
        </Layout>
    )
}

export default CV