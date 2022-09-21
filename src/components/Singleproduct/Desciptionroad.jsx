import React from 'react';
import Redirecting from '../../atoms/Singleproduct/Redirecting';

function Desciptionroad({ specify }) {

    return (
        <div className='border-b-[1px] lg:flex md:block sm:hidden py-2 w-full justify-start items-center flex h-auto'>
            <div className='flex w-auto justify-between items-center'>
                <Redirecting text={'Main'} url={"/"} />
                <Redirecting text={'Categories'} url={`/categoriespage`} />
                <Redirecting text={`${specify.category}`} url={`/categories/${specify.category}`} />
                <Redirecting text={`${specify.brand}`} url={`/brandspage`} />
                <Redirecting text={`${specify.title}`} url={``} />
            </div>
        </div>
    )
}

export default React.memo(Desciptionroad);
