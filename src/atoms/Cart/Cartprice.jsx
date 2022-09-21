import React from 'react';
import Cartinput from './Cartinput';
import Pr from './Pr';

function Cartprice({ item }) {
    return (
        <div className=' font-black lg:mt-0 md:mt-4 flex items-center md:w-80 sm:w-60 sm:mt-6 lg:w-80 justify-between'>
            <Pr text={item.price} />
            <Cartinput val={item.quantity} />
            <Pr text={item.price} />
        </div>
    )
}

export default React.memo(Cartprice);
