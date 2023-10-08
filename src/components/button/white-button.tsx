import React from 'react';

interface CustomWhiteButtonProps {
    btnContent: string;
    btnRef: string;
  }

export const WhiteButton: React.FC<CustomWhiteButtonProps> = ({btnContent, btnRef}) =>
{
    return (
        <div className='text-white text-2xl border-white border-2 p-1.5 rounded-md m-3'>
            <a className='hover:shadow-2xl' href={btnRef}>{btnContent}</a>
        </div>
    );
}
