import React from 'react'

function Title({text}) {
  return (
    <div className='mb-4 mt-4'>
      <span className='text-2xl font-bold text-[#303030] mt-12'>
       {text}
      </span>
    </div>
  )
}

export default Title