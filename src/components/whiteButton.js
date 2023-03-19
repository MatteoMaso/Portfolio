import * as React from 'react'

const WhiteButton = ({btnContent, btnRef }) =>
{
    return (
        <div className="m-2 p-1 flex justify-center text-white text-2xl text-center tracking-wider rounded-md border-white border-2 md:w-1/2 w-2/3">
            <a href={btnRef} className=" hover:shadow-2xl"><h2>{btnContent}</h2></a>
        </div>
    )
}

export default WhiteButton

