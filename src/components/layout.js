import * as React from 'react'

const Layout = ({pageTitle, children }) =>
{
    return (
        <main>
            <title>Matteo Maso - {pageTitle}</title>
            <top>
                <div className="bg-blue-700 h-2"></div>
                <div className="container mx-auto md:mt-11 mt-14 p-2 text-gray-700">
                    <p className="text-3xl text-center">@MatteoMaso</p>
                </div>
                <div className="container mx-auto md:mt-1 mt-1 p-2">
                    <ul className="flex justify-center text-2xl text-gray-500">
                        <li className="mx-2 p-2 hover:transition-colors">
                            <a href="/">./home</a>
                        </li>
                        <li className="mx-2 p-2">
                            <a href="/cv">./resume</a>
                        </li>  
                    </ul>
                </div>
            </top>
            {children}
        </main>
        
    )
}

export default Layout

