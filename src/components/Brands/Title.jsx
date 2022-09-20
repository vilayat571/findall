import React from 'react'

function Title({text}) {
  return (
    <div className='mb-8 mt-8'>
      <span className='text-3xl tracking-[0.8px] font-bold text-[#000000] mt-12'>
       {text}
      </span>
    </div>
  )
}

export default Title