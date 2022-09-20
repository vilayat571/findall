import React from 'react';
import Cartproducts from '../../components/Cart/Cartproducts';
import Layout from '../../layout/Layout'

function Cartdiv({ carts }) {
    return (
        <Layout>
            <div className='bg-[#fff] h-auto pt-10 pb-20 px-14 flex flex-col'>
                {carts ? <Cartproducts carts={carts.products} /> : ''}
            </div>
        </Layout>
    )
}

export default React.memo(Cartdiv);
