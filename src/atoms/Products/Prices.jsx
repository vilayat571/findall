import React from 'react'
import RealPrice from './Realprice'

function Prices({price}) {
  return (
    <span  className='text-[#303030]'>
    {price} ₼ <RealPrice price={price} />
  </span>
  )
}

export default Prices
