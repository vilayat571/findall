import React from 'react'
import { useSelector } from 'react-redux'
import Allresult from '../../components/Result/Allresult';

function Result() {

  const data = useSelector((state) => state.searchProductsReducer.data);

  return (
    <div className="bg-[#f7f7f7] px-16 py-8 ">
      <Allresult data={data} />
  
    </div>
  )
}

export default Result
