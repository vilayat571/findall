import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Mainpart from '../../components/Singleproduct/Mainpart';


function Singleproductpage() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  });


  return (
    <div className='h-auto'>
      <Mainpart data={data} />
      {/* realeted products will write and comments */}
    </div>
  )
}

export default Singleproductpage
