import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import Button from '../../atoms/Products/Button';
import Productcart from '../../atoms/Products/Productcart';
import { fetchProducts } from '../../redux/reducers/getProductsReducer';

function Allproducts() {



  const dispatch = useDispatch();
  const products = useSelector((state) => state.getProductsReducer.products);
  useEffect(() => {
    dispatch(fetchProducts(25));
  }, [dispatch]);

  return (
    <div className="flex flex-col">
      <div className='mt-10 gap-2 grid  sm:grid-cols-1 md:grid-cols-5'>
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
      <div className='border-4 flex justify-center items-center h-16 mt-8'>
        <Button />
      </div>
    </div>
  )
}

export default Allproducts
