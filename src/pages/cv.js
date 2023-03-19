import * as React from 'react'
import Layout from '../components/layout'
import { cvStyle, sheets, sheetsContainer, cvContainer} from '../styles/cv.module.css'
import cv from '../images/cv1.svg'
import cvPDF from '../images/cv1.pdf'
import WhiteButton from '../components/whiteButton'

const CV = () => {
    return (
        <Layout pageTitle="Resume" className={cvContainer}>
            <div className={sheetsContainer} >
                <div className={sheets} >
                    <img loading="lazy" alt="" className={cvStyle} src={cv}></img>
                </div>
            </div>
            <div className='w-full bg-blue-700 sticky bottom-0'>
                <div className='grid grid-cols-1 place-items-center p-3'>
                    <WhiteButton btnContent="Download" btnRef={cvPDF}/>
                </div>
            </div>
        </Layout>
    )
}

export default CV