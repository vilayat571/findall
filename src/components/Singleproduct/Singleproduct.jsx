import Imagesection from './Imagesection';
import Proddescription from './Proddescription';
import Prodright from './Prodright';
import React from 'react';

function Singleproduct({ product }) {

  return (
    <div className='pt-12 mt-10 flex justify-between 
    lg:flex-row md:flex-row sm:flex-col  '>
      <Imagesection product={product} />
      <Proddescription product={product} />
      <Prodright product={product} />
    </div>
  )
}

export default React.memo(Singleproduct);

