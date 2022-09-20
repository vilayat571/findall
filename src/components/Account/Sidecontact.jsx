import React from 'react';
import Linked from '../../atoms/About/Linked';

function Sidecontact() {
  return (
    <div className=' lg:flex sm:hidden mt-1 rounded-sm border-[1px] w-[20%] text-[13px] 
    flex justify-between items-start sm:flex-row lg:flex-col sm:h-auto md:mb-0 sm:mb-6 md:h-40 mr-6 '>
      <Linked text={'Account'} url={"/myaccount"} />
      <Linked text={'Personal data'} url={"/account/details"} />
      <Linked text={'Cart'} url={"/mycart"} />
    </div>
  )
}

export default React.memo(Sidecontact);