import React from 'react'

function Title({text}) {
  return (
    <div className='w-full h-10 mb-4 flex justify-between capitalize items-center '>
      <span className='text-2xl text-[#303030] font-black mt-12'>
       {text}
      </span>
    </div>
  )
}

export default Title
