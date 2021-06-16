import * as React from 'react'
import { Link } from 'gatsby'
import { 
    container,
    navLinks,
    navLinkItem,
    navLinkText,
    footerContainer,
    footerText
} from '../css/layout.module.css'

const Layout = ({pageTitle, children }) =>
{
    return (
        <main className={container}>
            <title>Matteo Maso - {pageTitle}</title>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <Link className={navLinkText} to="/">Home</Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link className={navLinkText} to="/cv">Resume</Link>
                    </li>
                </ul>
            </nav>
            {children}
            <div className={footerContainer}>
                <p className={footerText}> Made by Matteo Maso. Illustrations by <Link to="https://icons8.com/">icons8.com</Link>.</p>
            </div>
        </main>
        
    )
}

export default Layout

