import React from 'react'

function Percentage({ percentage }) {
    return (
        <span className='px-2 py-1 rounded-sm  bg-[#e91e63] text-white text-[10px]'>
            - {Math.trunc(percentage)} %
        </span>
    )
}

export default Percentage
