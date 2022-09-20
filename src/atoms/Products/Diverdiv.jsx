import React from 'react';
import Credit from './Credit';
import Diver from './Diver';
import Name from './Name';
import Percentage from './Percentage';
import Prices from './Prices';



function Diverdiv({ product }) {
    return (
        <>
            <Diver inner={
                <>
                    <Percentage percentage={product.discountPercentage} />
                </>
            } />

            <Diver inner={
                <>
                    <Prices price={product.price} />
                </>
            } />


            <Diver inner={
                <>
                    <Credit price={product.price} />
                </>
            } />

            <Diver inner={
                <>
                    <Name title={product.title} brand={product.brand} />
                </>
            } />
        </>
    )
}

export default React.memo(Diverdiv);
