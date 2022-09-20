import React from 'react'
import Productcart from '../../atoms/Products/Productcart';
import { Link } from 'react-router-dom';

function Proddiv({ products }) {
    return (
        <div className='gap-2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5'>
            {
                products.length > 0 ? products.map((product, index) => {
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

export default React.memo(Proddiv);
