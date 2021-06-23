import * as React from 'react'
import { Link } from 'gatsby'
import Navbar from '../components/navbar'
import { 
    container,
    lineTop,
    footerContainer,
    footerText,
} from '../styles/layout.module.css'

const Layout = ({pageTitle, children }) =>
{
    return (
        <main className={container}>
            <title>Matteo Maso - {pageTitle}</title>
            <div className={lineTop}></div>
            <Navbar></Navbar>
            {children}
            <div hidden={true} className={footerContainer}>
                <p className={footerText}> Made by Matteo Maso. Illustrations by <Link hidden={true} to="https://icons8.com/">icons8.com</Link>.</p>
            </div>
        </main>
        
    )
}

export default Layout

