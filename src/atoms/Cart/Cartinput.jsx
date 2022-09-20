import React from 'react';
import Sp from './Sp';

function Cartinput({ val }) {
    return (
        <button className='bg-[#fafafa] px-3 text-sm w-24 font-thin 
        rounded-sm border border-[#eaeaea]
         flex justify-between items-center'>
            <Sp text={'-'} />
            <span>{val}</span>
            <Sp text={'+'} />
        </button>
    )
}

export default React.memo(Cartinput);
