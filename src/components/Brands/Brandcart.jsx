import React from 'react'

function Brandcart({ product }) {
    return (
        <div className=' text-[#5c5656] border-[1px] text-sm outline-none mx-2 mb-12 text-center py-2 rounded-full '>
            {
                product.brand.length > 17 ? product.brand.slice(0, 10) : product.brand
            }
        </div>
    )
}

export default Brandcart
