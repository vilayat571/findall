import React from 'react';
import Title from '../components/Products/Title';
import Discountproducts from '../components/Bigdiscount/Discountproducts';

function Bigdiscount() {
    return (
        <div className='w-full h-screen flex justify-center items-start border  '>
            <div className='w-11/12 flex flex-col px-1'>
                <Title text={'Big discount'} />
                <Discountproducts />
            </div>
        </div>
    )
}

export default Bigdiscount
