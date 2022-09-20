import React from 'react';
import { useNavigate } from 'react-router-dom';
import Productcart from '../../atoms/Products/Productcart';

function Reldiv({ products }) {

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
                products.length > 0 && products.map((item) => {
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
