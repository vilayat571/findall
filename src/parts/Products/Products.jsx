import React from 'react'
import Allproducts from '../../components/Products/Allproducts'
import Title from '../../components/Products/Title'


function Products() {
  return (
    <div className='md:mx-14 sm:mx-4 pb-10 mt-10 h-auto flex flex-col sm:mt-10 mb-2'>
      <Title text={"Most viewed"} />
      <Allproducts />
    </div>
  )
}

export default Products
