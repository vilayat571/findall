import React from 'react'
import Conli from '../../atoms/Fotter/Conli'

function Contegs({ data }) {
    return (
        <div className='md:mb-0 sm:mb-4 md:text-left sm:text-center md:w-auto sm:w-full'>
            {
                data.map((item,index) => (
                    <Conli key={index} item={item} />
                ))
            }
        </div>
    )
}

export default React.memo(Contegs);
