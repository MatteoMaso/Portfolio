import WhiteButton from '@/components/white-button';
import Header from '@/components/header';
import React from 'react';
import Image from 'next/image';
import '@/styles/cv.css'
import '@/styles/globals.css'

export default function CVPage() {
  return (
    <div>
      <title>Matteo Maso - CV</title>
      <Header />
      <div className="flex flex-col mx-auto ">
        <div className='p-9 m-20'>
          <div className='sheets'>
            <Image loading="lazy" alt="" className='w-full' width={100} height={100} src="cv1.svg"></Image>
          </div>
        </div>
        <div className='w-full bg-blue-700 sticky bottom-0'>
          <div className='grid grid-cols-1 place-items-center p-3'>
            <WhiteButton btnContent="Download" btnRef="cv1.pdf"/>
          </div>
        </div>
      </div>
    </div>
  );
};
