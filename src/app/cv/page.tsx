import { WhiteButton } from '@/components/button/white-button';
import Header from '@/components/header';
import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import '@/styles/cv.css'

export const metadata: Metadata = {
  title: 'Matteo Maso - CV',
  description: 'Matteo Maso\'s CV',
}

export default function CVPage() {
  return (
    <div>
      <Header />
      <div className="flex flex-col mx-auto">
        <div className='md:p-9 px-1 py-5 md:m-20 m-0'>
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
