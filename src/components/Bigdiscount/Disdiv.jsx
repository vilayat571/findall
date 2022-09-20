import React from 'react';
import { Link } from 'react-router-dom';
import Productcart from '../../atoms/Products/Productcart';

function Disdiv({ data }) {
    return (
        <div className='mt-10 gap-2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5'>
            {
                data.length > 0 ? data.map((product, index) => {
                    return (
                        <Link key={index} to={`/product/${product.id}`}>
                            <Productcart key={index} product={product} />
                        </Link>
                    )
                }) : 'Loading'
            }
        </div>
    )
}

export default React.memo(Disdiv);