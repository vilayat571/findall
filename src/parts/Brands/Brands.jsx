import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Brandcart from '../../components/Brands/Brandcart';
import "react-multi-carousel/lib/styles.css";
import Title from '../../components/Brands/Title';
import { fetchBrands } from '../../redux/reducers/getBrandsReducer';
import Brandcarusel from '../../components/Brands/Brandcarusel';


function Brands() {

  const products = useSelector((state) => state.getBrandsReducer.brands);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBrands(18));
  }, [dispatch]);



  return (
    <div className='w-full h-auto flex justify-center items-start mb-4'>
      <div className='w-11/12 flex flex-col'>
        <Title text={"Famous brands"} />
        <Brandcarusel>
          {
            products.length > 0 ? products.map((product, index) => {
              return (
                <Brandcart key={index} product={product} />
              )
            }) : 'Loading'
          }
        </Brandcarusel>

      </div>
    </div>
  )
}

export default React.memo(Brands);
