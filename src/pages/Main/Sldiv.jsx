import React from 'react';
import { Link } from 'react-router-dom';
import Productcart from '../../atoms/Products/Productcart';

function Sldiv({ products }) {
    return (
        <>
            {
                products !== null ? <div
                    className='mt-4 gap-2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5'>
                    {
                        products.products.map((product, index) => (
                            <Link key={index} to={`/product/${product.id}`}>
                                <Productcart product={product} />
                            </Link>
                        ))
                    }
                </div> : 'Loading..'
            }
        </>
    )
}

export default React.memo(Sldiv);
