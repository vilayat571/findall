import Imagesection from './Imagesection';
import Proddescription from './Proddescription';
import Prodright from './Prodright';
import React from 'react';

function Singleproduct({ specify }) {

  return (
    <div className='relative lg:top-10 sm:pt-6 md:pt-12 lg:pt-12 sm:mt-0 md:mt-10 lg:mt-10 flex justify-between 
    lg:flex-row md:flex-row sm:flex-col  '>
      <Imagesection spIfy={specify} />
      <Proddescription spIfy={specify} />
      <Prodright spIfy={specify} />
    </div>
  )
}

export default React.memo(Singleproduct);

