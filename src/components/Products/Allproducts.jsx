import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import Productcart from '../../atoms/Products/Productcart';
import { fetchProducts } from '../../redux/reducers/getProductsReducer';

function Allproducts() {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.getProductsReducer.products);
  useEffect(() => {
    dispatch(fetchProducts(10));
  }, [dispatch]);

  return (
    <div className='mt-10 gap-2 grid xl: grid-cols-1 sm:grid-cols-2 md:grid-cols-5'>
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

export default Allproducts
