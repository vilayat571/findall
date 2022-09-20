import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Relatedresult from '../../components/Relatedproducts/Relatedresult';
import Mainpart from '../../components/Singleproduct/Mainpart';
import Layout from '../../layout/Layout';


function Singleproductpage() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [data,id]);




  return (
    <Layout>
      <div className='h-auto '>
        <div className='mt-4'>
          <Mainpart data={data} />
        </div>
        <div>
          <Relatedresult data={data} />
        </div>
      </div>
    </Layout>
  )
}

export default React.memo(Singleproductpage);