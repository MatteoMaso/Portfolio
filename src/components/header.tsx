import React from 'react';
import HeaderItem from './HeaderItem';

export default function Header() {
    return (
        <div>
            {/* Blue bar on top */}
            <div className='bg-blue-700 h-2'/>

            {/* Name and bar in the center */}
            <div className='flex justify-center mt-14 mb-4' >
                <div>
                    <div className='p-2 text-4xl text-gray-700'>
                        <p>@MatteoMaso</p>
                    </div>
                    <div className='flex justify-between p-2 text-2xl text-gray-400 mx-9'>
                        <HeaderItem params={{href: '/', text: './home'}}/>
                        <HeaderItem params={{href: '/cv', text: './cv'}}/>
                    </div>
                </div>
            </div>
        </div>
    );
};
