import React from 'react';
import Action from './Action';
import Credit from './Credit';
import Diver from './Diver';
import Name from './Name';
import Percentage from './Percentage';
import Prices from './Prices';
import Productimg from './Productimg';

function Productcart({ product }) {

    return (
        <div className=' bg-[#ffffff] col-span-1 rounded-sm h-[450px] flex flex-col justify-between'>

            <div className='flex justify-center items-center overflow-hidden py-4 '>

                <Productimg url={product.images[0]} />

            </div>

            <div className='px-4 flex flex-col h-2/3 py-2'>

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
                        <Action text={'Action : The event is over'} />
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

           

            </div>

        </div>
    )
}

export default Productcart;