import * as React from 'react'
import Layout from '../components/layout'
import { cvStyle, sheets, sheetsContainer, cvContainer, btnRow, button} from '../styles/cv.module.css'
import cv from '../images/cv.svg'
import cvPDF from '../images/cv.pdf'

const CV = () => {
    return (
        <Layout pageTitle="Resume" className={cvContainer}>
            <div className={sheetsContainer} >
                <div className={sheets} >
                    <img loading="lazy" alt="" className={cvStyle} src={cv}></img>
                </div>
            </div>
            <div className={btnRow}>
                <a href={cvPDF}download><button className={button} >Download</button></a>{` `}
            </div>
        </Layout>
    )
}

export default CV