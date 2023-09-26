import React from 'react';

interface CustomWhiteButtonProps {
    btnContent: string;
    btnRef: string;
  }

const WhiteButton: React.FC<CustomWhiteButtonProps> = ({btnContent, btnRef}) =>
{
    return (
        <div className="m-2 p-1 flex justify-center text-white text-2xl text-center tracking-wider md:w-1/3 w-2/3">
            <a href={btnRef} className="hover:shadow-2xl rounded-md border-white border-2 w-full py-2"><h2>{btnContent}</h2></a>
        </div>
    );
}

export default WhiteButton;

