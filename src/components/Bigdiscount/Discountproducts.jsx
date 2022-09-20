import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../atoms/Products/Button';
import { getDiscountProducts } from '../../redux/reducers/getDiscountReducer';
import Disdiv from './Disdiv';


function Discountproducts() {

    const dispatch = useDispatch();
    const [count, setCount] = useState(23);
    const data = useSelector((state) => state.getDiscountReducer.data);
    const fileteredData = data.length>0 && data.filter((item) => {
        return item.discountPercentage > 15
    });

    useEffect(() => {

        dispatch(getDiscountProducts(count));

    }, [dispatch, count]);


    const increaseLimit = () => {
        setCount(count + 5)
        dispatch(getDiscountProducts(count));
    };

    return (
        <div className="flex flex-col">
        <Disdiv data={fileteredData} />
        <div className='w-full flex mt-4 justify-center items-center'>
            <Button count={0} func={() => increaseLimit()} />
        </div>
    </div>
    )
}

export default React.memo(Discountproducts);
