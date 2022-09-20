import React from 'react';
import Redirecting from '../../atoms/Singleproduct/Redirecting';

function Desciptionroad({ product }) {

    return (
        <div className='border-b-[1px] py-2 w-full justify-start items-center flex h-auto'>
            <div className='flex w-auto justify-between items-center'>
                <Redirecting text={'Main'} url={"/"} />
                <Redirecting text={'Categories'} url={`/categoriespage`} />
                <Redirecting text={`${product.category}`} url={`/categories/${product.category}`} />
                <Redirecting text={`${product.brand}`} url={`/brandspage`} />
                <Redirecting text={`${product.title}`} url={``} />
            </div>
        </div>
    )
}

export default React.memo(Desciptionroad);
