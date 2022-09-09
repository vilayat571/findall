import React from 'react';

function RealPrice({ price }) {
    const realPrice = (((price * 12) / 100) + price).toFixed(2);
    return (
        <s className='text-[#818181] font-bold text-xs ml-3'>
            {realPrice} ₼ 
        </s>
    )
}

export default RealPrice;