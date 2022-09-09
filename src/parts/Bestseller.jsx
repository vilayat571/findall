import React from 'react'
import Bestsellerproducts from '../components/Bestseller/Bestsellerproducts'
import Title from '../components/Products/Title'

function Bestseller() {
    
    return (
        <div className='w-full h-screen flex justify-center items-start'>
            <div className='w-11/12 flex flex-col px-1'>
                <Title text={'Best seller'} />
                <Bestsellerproducts />
            </div>
        </div>
    )
}

export default Bestseller
