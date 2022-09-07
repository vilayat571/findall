import React from 'react'

function Title({text}) {
  return (
    <div className='w-full h-12 mb-4 flex justify-between capitalize items-center py-4'>
      <span className='text-3xl text-[#000000] font-black mt-12'>
       {text}
      </span>
    </div>
  )
}

export default Title
