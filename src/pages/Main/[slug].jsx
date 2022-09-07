import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Categorytitle from '../../atoms/Products/Categorytitle';
import Productcart from '../../atoms/Products/Productcart';


function Categoriespage() {

  const { slug } = useParams();

  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${slug}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));



  });

  console.log(products !== null && products.products)
  return (
    <div className='bg-[#f7f7f7] px-16 h-auto pb-4 pt-10 mt-10'>
      <Categorytitle text={`${slug}`} />
      {
        products !== null ? <div 
        className='sm:-mt-2 md:mt-2 gap-2 grid xl: grid-cols-1 sm:grid-cols-2 md:grid-cols-5'>
          {
            products.products.map((product, index) => (
              <Link to={`/product/${product.id}`}>
                <Productcart key={index} product={product} />
              </Link>
            ))
          }
        </div> : 'Loading..'
      }
    </div>
  )
}

export default Categoriespage
