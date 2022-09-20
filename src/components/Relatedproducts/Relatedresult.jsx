import { useState, useEffect } from 'react';
import Title from '../Brands/Title';
import Reldiv from './Reldiv';


function Relatedresult({ data }) {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    fetch(`https://dummyjson.com/products/category/${data !== null && data.category}`)
      .then(res => res.json())
      .then(data => setProducts(data.products));

  }, [data]);


  return (
    <div className='md:mx-14 sm:mx-4 pb-10 lg:mt-24 h-auto flex flex-col sm:mt-10 mb-2 '>
      <Title text={'Similar products'} />
      <Reldiv products={products} />
    </div>
  )
}

export default Relatedresult
