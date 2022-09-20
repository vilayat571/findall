import React from 'react';
import Cartproduct from './Cartproduct';

function Cartpr({carts}) {
    return (
        <div className='mt-4 gap-3 grid grid-cols-2'>
            {
                carts && carts.map((item) => {
                    return (
                        <Cartproduct key={item.id} item={item} />
                    )
                })
            }
        </div>
    )
}

export default React.memo(Cartpr);