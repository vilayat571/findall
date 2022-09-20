import React from 'react'
import Road from '../../atoms/Fotter/Road'

function Roadmap({ data }) {
    return (
        <div className='md:mb-0 sm:mb-4 md:text-left sm:text-center md:w-auto sm:w-full'>
            {
                data.map((item,index) => (
                    <Road key={index} item={item} />
                ))
            }
        </div>
    )
}

export default React.memo(Roadmap);
