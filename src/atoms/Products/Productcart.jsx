import React from 'react';
import Productdiv from './Productdiv';


function Productcart({ product }) {

    return (
        <div className='border-[1px] bg-[#ffffff] col-span-1 rounded-sm h-[400px] py-5 flex flex-col justify-between'>

            <Productdiv product={product} />

        </div >
    )
}

export default React.memo(Productcart);