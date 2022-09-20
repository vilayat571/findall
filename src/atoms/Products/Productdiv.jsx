import React from 'react';
import Diverdiv from './Diverdiv';
import Productimg from './Productimg';

function Productdiv({ product }) {
    return (
        <>
            <div className='flex justify-center items-center overflow-hidden py-4 '>

                <Productimg url={product.images[0]} />

            </div>

            <div className='px-4 flex flex-col h-2/3 py-2'>

                <Diverdiv product={product} />

            </div>
        </>

    )
}

export default React.memo(Productdiv);
