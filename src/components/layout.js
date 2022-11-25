import * as React from 'react'
import Navbar from '../components/navbar'

const Layout = ({pageTitle, children }) =>
{
    return (
        <main>
            <title>Matteo Maso - {pageTitle}</title>
            <div className="bg-blue-700 h-2"></div>
            <Navbar></Navbar>
            {children}
        </main>
        
    )
}

export default Layout

