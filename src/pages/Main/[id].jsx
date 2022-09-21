import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Mainpart from '../../components/Singleproduct/Mainpart';
import Layout from '../../layout/Layout';


function Singleproductpage() {
  const { id } = useParams();
  const [idProd, setIdProd] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setIdProd(data));
  }, [id]);


  return (
    <Layout>
      <div className='h-auto '>
        <div className='mt-4'>
          <Mainpart idProd={idProd} />
        </div>
      </div>
    </Layout>
  )
}

export default React.memo(Singleproductpage);