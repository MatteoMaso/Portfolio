import { WhiteButton } from '@/components/button/WhiteButton';
import { Metadata } from 'next';
import '@/styles/cv.css'
import CvPlaceHolder from '@/components/cv/Placeholder';

export const metadata: Metadata = {
  title: 'Matteo Maso - CV',
  description: 'Matteo Maso\'s CV',
}

export default function CVPage() {
  return (
    <div>
      <div className="flex flex-col mx-auto">
        <div className='md:p-9 px-1 py-5 md:m-20 m-0'>
          <CvPlaceHolder/>
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
