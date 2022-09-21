import React from 'react'
import { Link } from 'react-router-dom'
import Buton from './Buton'

function Butondiv({ text }) {
    return (
        <div className='w-full flex lg:flex-row md:flex-row sm:flex-col sm:justify-between
        md:justify-center lg:justify-center items-center mt-3 '>
            <Buton text={text} />
            <Link className=' flex items-center font-thin
             justify-center lg:w-1/3 sm:w-full  md:w-1/3 rounded-full text-sm
              text-center h-12 text-[#333] border border-[#6b6b6b] outline-none lg:ml-3 sm:ml-0 md:ml-3' to={"/"}>Back</Link>
        </div>
    )
}

export default Butondiv
