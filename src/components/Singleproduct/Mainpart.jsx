import React from 'react';
import Singleproduct from './Singleproduct';
import Desciptionroad from './Desciptionroad';

function Mainpart({ idProd }) {

    return (
        <div className='w-full justify-center items-center flex '>
            <div className=' w-[92%]'>
                {
                    idProd !== null ? <Desciptionroad specify={idProd} /> : 'Loading'
                }
                {
                    idProd !== null ? <Singleproduct specify={idProd} /> : 'Loading'
                }
            </div>
        </div>
    )
}

export default React.memo(Mainpart)