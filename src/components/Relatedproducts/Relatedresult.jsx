import { useState, useEffect } from 'react';
import Title from '../Brands/Title';
import Reldiv from './Reldiv';


function Relatedresult({ idProd }) {

  const [mehs, setMehs] = useState(null);

  const cat = idProd !== null && idProd.category;

  useEffect(() => {

    const url = `https://dummyjson.com/products/category/${cat}`;

    fetch(url)
      .then(res => res.json())
      .then(veri => setMehs(veri.products));

  }, [cat]);


  return (
    <div className='md:mx-14 sm:mx-4 pb-10 lg:mt-24 h-auto flex flex-col sm:mt-10 mb-2 '>
      <Title text={'Similar products'} />
      <Reldiv reProducts={mehs} />
    </div>
  )
}

export default Relatedresult
