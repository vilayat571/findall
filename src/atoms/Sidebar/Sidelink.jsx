import React from 'react'
import { Link } from 'react-router-dom'

function Sidelink({ item }) {
  return (
    <Link style={{ display: 'block' }} className=' capitalize md:mr-0 sm:mr-4 mb-2 '
      to={`/categories/${item}`} >
      <span className='text-[#303030]' >
        {item}
      </span>
    </Link>
  )
}

export default Sidelink
