import React from 'react';
import Link from 'next/link'

export default function Header() {
    return (
        <div>
            <div className="h-1.5 bg-blue-700 absolute top-0 left-0 right-0"/>
            <div className="top">
            <div className="container mx-auto md:mt-20 mt-6 p-2 text-gray-700">
                <p className="text-3xl text-center">@MatteoMaso</p>
            </div>
            <div className="container mx-auto md:mt-1 mt-1 p-2">
                <ul className="flex justify-center text-2xl text-gray-500">
                <li className="mx-1 p-2 hover:transition-colors">
                    <Link href="/">./home</Link>
                </li>
                <li className="mx-1 p-2">
                    <Link href="/cv">./cv</Link>
                </li>  
                </ul>
            </div>
            </div>
        </div>
    );
};
