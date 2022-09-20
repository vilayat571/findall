import React from 'react';
import { Link } from 'react-router-dom';
import Productcart from '../../atoms/Products/Productcart';
import Message from './Message';

function Allresult({ data }) {
    return (
        <div>
            <div className='gap-2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 mt-10'>
                {
                    data.length > 0 ? data.map((product, index) => {
                        return (
                            <Link key={index} to={`/product/${product.id}`}>
                                <Productcart key={index} product={product} />
                            </Link>
                        )
                    }) : <Message />
                }
            </div>
        </div>
    )
}

export default React.memo(Allresult);