import React, { useState } from 'react'

function Imagesection({ spIfy }) {

    const [ind, setInd] = useState(0)
    
    const chnageIndex = (index) => {
        setInd(index);
    };

    return (
        <div className='flex justify-between items-start'>
            <div className='mb-1'>
                {
                    spIfy.images.map((item, index) => (
                        <button key={index} className='flex' onClick={() => chnageIndex(index)}>
                            <img className={index === ind ?
                                'border-2 border-[#9e9e9e] outline-none w-11 h-10 mb-1 py-1 px-2' :
                                'border-2 border-[#fff] outline-none w-11 h-10 mb-1 p-1 px-2'}
                                src={item} alt="a little appearance" />
                        </button>
                    ))
                }
            </div>
            <div className='relative left-14'>
                <img className='w-80 h-80' src={spIfy.images[ind]} alt="the product appearance" />
            </div>
        </div>
    )
}

export default Imagesection;