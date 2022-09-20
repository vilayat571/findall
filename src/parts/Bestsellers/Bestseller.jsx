import React from 'react';
import Title from '../../components/Products/Title';
import Bestdiv from '../../components/Bestseller/Bestdiv';
import Bestsellerproducts from '../../components/Bestseller/Bestsellerproducts';


function Bestseller() {

    return (
        <div className='w-full flex justify-center'>

            <Bestdiv>
                <Title text={'Best seller'} />
                <Bestsellerproducts />
            </Bestdiv>

        </div>
    )
}

export default React.memo(Bestseller);