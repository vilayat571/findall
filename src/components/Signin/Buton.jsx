import React from 'react'

function Buton({ text }) {
    return (
            <button className='md:w-1/3 sm:w-full lg:w-1/3 rounded-full text-sm text-center 
            h-12 text-[#333] border border-[#6b6b6b] outline-none lg:mb-0 md:mb-0 sm:mb-4   lg:mr-3 sm:mr-0 md:mr-3'>{text}</button>

    )
}

export default Buton
