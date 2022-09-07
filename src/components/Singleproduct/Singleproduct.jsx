import React, { useState } from 'react'
import Images from './Images'

function Singleproduct({ product }) {
  const [ind, setInd] = useState(0)
  const chnageIndex = (index) => {
    setInd(index);
  }
  return (
    <div className='mt-10'>
      <div className='flex justify-between items-start md:w-1/4 sm:w-auto'>
        <div className='mt-4'>
          {
            product.images.map((item, index) => (
              <button  key={index} className='flex' onClick={() => chnageIndex(index)}>
                <img className={index === ind ?
                  'border-2 border-[#7c61e2] outline-none w-11 h-10 mb-1 py-1 px-2' :
                  'border-2 border-[#fff] outline-none w-11 h-10 mb-1 p-1 px-2'}
                  src={item} alt="a little appearance" />
              </button>
            ))
          }
        </div>
        <div className='ml-4'>
          <img className='w-60 h-80' src={product.images[ind]} alt="the product appearance" />
        </div>
      </div>
      <div>

      </div>
      <div>

      </div>
    </div>
  )
}

export default Singleproduct

