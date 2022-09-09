import React from 'react'

function Brandcart({ product }) {
    return (
        <div className='bg-[#fff] text-[#242b59] border-none outline-none 
        font-medium mx-2 mb-12 text-center py-2 rounded-full '>
            {
                product.brand.length > 17 ? product.brand.slice(0, 10) : product.brand
            }
        </div>
    )
}

export default Brandcart
