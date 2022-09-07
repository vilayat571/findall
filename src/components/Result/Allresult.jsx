import React from 'react'
import { Link } from 'react-router-dom';
import Productcart from '../../atoms/Products/Productcart';

function Allresult({ data }) {
    return (
        <div>
            <div className='mt-10 gap-2 grid xl: grid-cols-1 sm:grid-cols-2 md:grid-cols-5'>
                {
                    data.length > 0 ? data.map((product, index) => {
                        return (
                            <Link key={index} to={`/product/${product.id}`}>
                                <Productcart key={index} product={product} />
                            </Link>
                        )
                    }) : <div className='w-96 relative left-14 py-2 h-auto'>
                        <span className='text-xl text-[#000] font-bold'>We can not find any result {":("}</span>
                    </div>
                }
            </div>
        </div>
    )
}

export default Allresult;