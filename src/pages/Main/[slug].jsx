import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import Categorytitle from '../../atoms/Products/Categorytitle';
import Layout from '../../layout/Layout';
import Sldiv from './Sldiv';


function Categoriespage() {

  const { slug } = useParams();

  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${slug}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));

  }, [slug]);


  return (
    <Layout>
      <div className='md:px-5 sm:px-5 lg:px-14 h-auto py-20 '>
        <Categorytitle text={`${slug}`} />
        <Sldiv products={products} />
      </div>
    </Layout>
  )
}

export default React.memo(Categoriespage);

