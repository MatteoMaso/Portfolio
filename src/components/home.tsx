import React from 'react';
import WhiteButton from './white-button'
import Header from './header';

function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <title>Matteo Maso</title>
      <Header />
      
      <div className="container w-full p-2 mt-1">
        <div className="p-2 grid grid-cols-1 place-items-center">
          <div className="md:w-2/5 m-6">
            <h2 className="text-2xl" >Hey there <span role="img" aria-label="hand waveing" >&#128075;</span></h2>
            <p className="text-justify text-xl tracking-wider mt-5 mb-3">
              Inspired by science to improve people&apos;s life and the
              environment, I&apos;m a software engineer with a wide interest
              range and a background in fast prototyping tech solutions.
            </p>
          </div>
        </div>
      </div>

      <div className="container md:rounded-md  w-screen bg-blue-700 my-5">
        <div className="p-2 grid grid-cols-1 place-items-center">
          <div className="md:w-3/5 m-3 text-white text-3xl text-center grid grid-cols-1 place-items-center tracking-wider">
            <h2>Take a look at my career path</h2>
            <WhiteButton btnContent="CV" btnRef="/cv"/>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home;