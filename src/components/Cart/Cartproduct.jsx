import React from 'react';
import Cartprice from '../../atoms/Cart/Cartprice';
import Carttit from '../../atoms/Cart/Carttit';

function Cartproduct({ item }) {
    return (
        <div className=' sm:col-span-2 md:col-span-1 lg:col-span-2 rounded-sm flex
    sm:flex-col md:flex-col lg:flex-row px-10  pb-10 py-2
     justify-between items-center md:h-auto lg:h-32  border'
            key={item.id} >
            <Carttit item={item} />
            <Cartprice item={item} />
        </div>
    )
}

export default React.memo(Cartproduct);
