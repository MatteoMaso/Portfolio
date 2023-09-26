import WhiteButton from '@/components/white-button';
import React from 'react';
import '@/styles/cv.css'

export default function CVPage() {
  return (
    <div className="flex flex-col container mx-auto">
      <div className='p-9 m-20'>
        <div className=''>
          <div className='sheets'>
            <img loading="lazy" alt="" className='w-full' src="cv1.svg"></img>
          </div>
        </div>
      </div>
      <div className='w-full bg-blue-700 sticky bottom-0'>
        <div className='grid grid-cols-1 place-items-center p-3'>
          <WhiteButton btnContent="Download" btnRef="cv1.pdf"/>
        </div>
      </div>
    </div>
  );
};
