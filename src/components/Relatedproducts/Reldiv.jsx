import React from 'react';
import { useNavigate } from 'react-router-dom';
import Productcart from '../../atoms/Products/Productcart';

function Reldiv({ reProducts }) {

    const navigate = useNavigate();

    const refreshPage = (url) => {

        setTimeout(() => {
            navigate(url)
        }, 10);

        setTimeout(() => {
            window.location.reload();
        }, 100);

    }

    return (
        <div className='gap-2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 mb-10' >
            {
               reProducts!==null && reProducts.map((item) => {
                    return (
                        <form className=' cursor-pointer ' key={item.id}
                            onClick={(e) => refreshPage(`/product/${item.id}`)} >
                            <Productcart product={item} />
                        </form>
                    )
                })
            }
        </div>
    )
}

export default React.memo(Reldiv);
