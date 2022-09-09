import React from 'react'
import RealPrice from './Realprice'

function Prices({price}) {
  return (
    <span  className='font-bold text-[#e91e63]'>
    {price} ₼ <RealPrice price={price} />
  </span>
  )
}

export default Prices
