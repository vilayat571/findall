import React from 'react'
import Sliderimg from './Sliderimg'

function Slidercart({ url }) {
    return (
        <div className='sm:h-[220px] md:h-[400px]'>
            <Sliderimg url={url} />
        </div>
    )
}

export default Slidercart
