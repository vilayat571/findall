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
      <div className='md:h-auto sm:h-auto sm:mb-20 lg:mb-0 md:mb-0 lg:h-screen '>
          <Mainpart idProd={idProd} />
      </div>
    </Layout>
  )
}

export default React.memo(Singleproductpage);