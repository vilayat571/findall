import React from 'react'
import Allproducts from '../components/Products/Allproducts'
import Title from '../components/Products/Title'

function Products() {
  return (
    <div className='mx-14 pb-10 mt-10 h-auto flex flex-col w-full-20 sm:mt-10 mb-2'>
      <Title text={" Most percentage"} />
      <Allproducts />
    </div>
  )
}

export default Products
