import React from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidelink from '../../atoms/Sidebar/Sidelink';
import { fetchCategories } from '../../redux/reducers/getCategoriesReducer';

function Sidebar() {

  const dispatch = useDispatch();

  const data = useSelector((state) => state.getCategoriesReducer.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);


  return (
    <div className='sm:h-auto sm:w-full md:h-[410px] no-scrollbar md:w-1/5 ml-1 justify-between
     flex md:flex-col sm:flex-row md:items-start sm:items-center overflow-auto'>
      {
        data.length > 0 ? data.map((item, index) => (<Sidelink key={index} item={item} />)) : 'Loading..'
      }
    </div>
  )
}

export default React.memo(Sidebar);