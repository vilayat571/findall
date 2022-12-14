import React from 'react';
import Placatcart from '../../atoms/Placat/Placatcart';
import banner1 from '../../assets/images/banner1.png';
import banner2 from '../../assets/images/banner2.png';
import banner3 from '../../assets/images/banner3.png';

function Placat() {
    
    return (
        <div className='sm:w-full md:hidden lg:block sm:hidden md:flex-col
         justify-between items-center sm:flex-row md:w-[29%]'>
            <Placatcart ateq={"/categories/womens-watches"} url={banner1} />
            <Placatcart ateq={"/categories/automotive"} url={banner2} />
            <Placatcart ateq={"/categories/furniture"} url={banner3} />
        </div>
    )
}

export default React.memo(Placat);