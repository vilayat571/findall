import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../atoms/Products/Button';
import { fetchProducts } from '../../redux/reducers/getProductsReducer';
import Proddiv from './Proddiv';

function Allproducts() {

  const dispatch = useDispatch();
  const [count, setCount] = useState(10);
  const products = useSelector((state) => state.getProductsReducer.products);

  useEffect(() => {
    dispatch(fetchProducts(count));
  }, [dispatch, count]);

  const increaseLimit = () => {
    count <= 25 && setCount(count + 5)
    dispatch(fetchProducts(count));
  };

  return (

    <div className="flex flex-col mt-10">
      <Proddiv products={products} />
      <div className='flex justify-center items-center h-16 mt-4'>
        <Button count={count} func={() => increaseLimit()} />
      </div>
    </div>

  )
}
export default Allproducts;