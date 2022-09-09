import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import Productcart from '../../atoms/Products/Productcart';
import { getBestSeller } from '../../redux/reducers/getSellerReducer';


function Bestsellerproducts() {

    const dispatch = useDispatch();

    const data = useSelector((state) => state.getSellerReducer.data);

    useEffect(() => {

        dispatch(getBestSeller(30));

    }, [dispatch])


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

export default Bestsellerproducts
