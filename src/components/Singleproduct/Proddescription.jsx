import React from 'react';
import Prices from '../../atoms/Products/Prices';

function Proddescription({ spIfy }) {

    return (
        <div className='lg:mt-0 sm:mt-12 sm:ml-0 lg:ml-20 md:ml-20 flex flex-col justify-between h-90'>
            <span className='text-xl font-bold tracking-[1px]'> {spIfy.title}</span>
            <span className='mt-3 text-sm'>Rating : {spIfy.rating}</span>
            <span className='mt-3 text-sm'>Brand : {spIfy.brand}</span>
            <span className='text-lg mt-4 font-extrabold'> <Prices price={spIfy.price} /></span>
            <span className='mt-4 tracking-[0.8px] font-black w-96'> {spIfy.description}</span>
            <button className='w-full bg-[#333]
            mt-6 border px-2 py-2 text-[#fff]'>Buy</button>
        </div>
    )
}

export default React.memo(Proddescription);
