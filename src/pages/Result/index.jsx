import React from 'react'
import { useSelector } from 'react-redux'
import Title from '../../components/Brands/Title';
import Allresult from '../../components/Result/Allresult';
import Layout from '../../layout/Layout';

function Result() {

  const data = useSelector((state) => state.searchProductsReducer.data);

  return (
    <Layout>
      <div className="bg-[#f7f7f7] px-16 py-8 mt-10 ">
        <Title text={`Products matching the search:${data.length}`} />
        <Allresult data={data} />
      </div>
    </Layout>
  )
}

export default React.memo(Result);