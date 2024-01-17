import type { Metadata } from 'next'
import { WhiteButton } from '@/components/button/WhiteButton';

export const metadata: Metadata = {
  title: 'Matteo Maso',
  description: 'Matteo Maso\'s personal website',
}

export default function HomePage() {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <div className="mb-auto">
        <div className="container w-full p-2 mt-1">
          <div className="p-2 grid grid-cols-1 place-items-center">
            <div className="md:w-2/5 m-6 md:text-left text-xl tracking-wider mt-5 mb-3">
              <h2 className="text-3xl">Hey there <span role="img" aria-label="hand waveing">&#128075;</span></h2>
              <p className="py-5">
                My name is Matteo Maso. 
                I was born as a curious problem solver and trained as a software engineer.
              </p>
              <p className="pb-5">
                I&apos;m currently developing Backend and Cloud applications 
                at <a className="text-blue-700" href="https://sensirion-connected.com/" target="_blank" rel="noopener noreferrer">Sensirion Connected Solutions</a>.
              </p>
              <p>
                In life I love using technology to solve meaningful problem and I&apos;m always looking for new challenges.
              </p>  
            </div>
          </div>
        </div>

        <div className="container w-full my-5">
          <div className="p-2 grid grid-cols-1 place-items-center">
            <div className="md:w-3/5 m-3 p-4 sm:rounded-md text-white text-3xl text-center grid grid-cols-1 place-items-center tracking-wider bg-blue-700">
              <h2 className="hidden md:block">
                Take a look at my career path
              </h2>
              <WhiteButton btnContent="CV" btnRef="/cv"/>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-4 w-full flex flex-col items-center justify-between">
        <div className="border-t border-blue-100 md:w-2/5 w-full">
          <div className="m-5 md:text-xl text-md">
            <p className="text-center">
              <span>&#169;</span> 2024, Matteo Maso. Based in Berlin <span role="img">🇩🇪</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
