import type { Metadata } from 'next'
import { WhiteButton } from '@/components/button/WhiteButton';

export const metadata: Metadata = {
  title: 'Matteo Maso',
  description: 'Matteo Maso\'s personal website',
}

export default function HomePage() {
  return (
    <div>
      <div className="flex flex-col items-center justify-between">
      <div className="container w-full p-2 mt-1">
        <div className="p-2 grid grid-cols-1 place-items-center">
          <div className="md:w-2/5 m-6">
            <h2 className="text-2xl" >Hey there <span role="img" aria-label="hand waveing" >&#128075;</span></h2>
            <p className="md:text-justify text-xl tracking-wider mt-5 mb-3">
              Inspired by science to improve people&apos;s life and the
              environment, I&apos;m a software engineer with a wide interest
              range and a background in fast prototyping tech solutions.
            </p>
          </div>
        </div>
      </div>

      <div className="container md:rounded-md  w-screen bg-blue-700 my-5 sticky bottom-0">
        <div className="p-2 grid grid-cols-1 place-items-center">
          <div className="md:w-3/5 m-3 text-white text-3xl text-center grid grid-cols-1 place-items-center tracking-wider">
            <h2 className="hidden md:block">
              Take a look at my career path
            </h2>
            <WhiteButton btnContent="CV" btnRef="/cv"/>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
