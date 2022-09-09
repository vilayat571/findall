import React from 'react'

function Categorycart({ product }) {
    return (
        <div className='bg-[rgb(255,255,255)] text-[#242b59] border-none outline-none
        capitalize font-medium mx-2 mb-12 text-center py-2 rounded-full '>
            {
             product
            }
        </div>
    )
}

export default Categorycart
