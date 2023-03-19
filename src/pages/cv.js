import * as React from 'react'
import Layout from '../components/layout'
import { sheets } from '../styles/cv.module.css'
import cv from '../images/cv1.svg'
import cvPDF from '../images/cv1.pdf'
import WhiteButton from '../components/whiteButton'

const CV = () => {
    return (
        <Layout pageTitle="Resume">
            <div className='container p-9' >
                <div className={sheets}>
                    <img loading="lazy" alt="" className='w-full' src={cv}></img>
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