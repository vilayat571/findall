import React from 'react'
import Li from '../../atoms/Fotter/Li'

function Litags({ data, mainText }) {
    return (
        <div className='md:mb-0 sm:mb-4 md:text-left sm:text-center md:w-auto sm:w-full'>
            {
                data.map((item, index) => (
                    <Li key={index} text={mainText} item={item} />
                ))
            }
        </div>
    )
}

export default React.memo(Litags);
