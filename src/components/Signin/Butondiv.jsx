import React from 'react'
import { Link } from 'react-router-dom'
import Buton from './Buton'

function Butondiv({ text }) {
    return (
        <div className='w-full flex justify-center items-center mt-3 '>
            <Buton text={text} />
            <Link className=' flex items-center font-thin justify-center w-1/3 rounded-full text-sm text-center 
            h-12 text-white bg-[#2318ff] ml-3' to={"/"}>Back</Link>
        </div>
    )
}

export default Butondiv
