import React from 'react';
import Singleproduct from './Singleproduct';
import Desciptionroad from './Desciptionroad';

function Mainpart({ data }) {
    return (
        <div className='w-full justify-center items-center flex'>
            <div className=' w-[92%]   h-screen'>
            {
                data !== null ? <Desciptionroad product={data} /> : 'Loading'
            }
            {
                data !== null ? <Singleproduct product={data} /> : 'Loading'
            }
        </div>
        </div>
    )
}

export default Mainpart
