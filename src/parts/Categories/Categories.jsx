import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "react-multi-carousel/lib/styles.css";
import { fetchCategories } from '../../redux/reducers/getCategoriesReducer';
import { Link } from 'react-router-dom';
import Title from '../../components/Brands/Title';
import Categorycart from '../../components/Categories/Categorycart';
import Catcarousel from '../../components/Categories/Catcarousel';

function Categories() {

  const categories = useSelector((state) => state.getCategoriesReducer.categories);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);


  return (
    <div className='w-full h-auto flex justify-center items-start '>
      <div className='w-11/12 flex flex-col'>

        <Title text={"Famous categories"} />
        <Catcarousel>
          {
            categories.length > 0 ? categories.map((product, index) => {
              return (
                <Link key={index} to={`/categories/${product}`} >
                  <Categorycart key={index} product={product} />
                </Link>
              )
            }) : 'Loading'
          }
        </Catcarousel>

      </div>
    </div>
  )
}

export default Categories
