import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../atoms/Products/Button';
import { getBestSeller } from '../../redux/reducers/getSellerReducer';
import Bestbut from './Bestbut';
import Bestproductdiv from './Bestproductdiv';


function Bestsellerproducts() {

    const dispatch = useDispatch();
    const [count, setCount] = useState(23);
    const data = useSelector((state) => state.getSellerReducer.bestSeller);
    const fileteredData =data.length>0 && data.filter((item) => {
        return item.rating > 4.5
    });

    useEffect(() => {
        dispatch(getBestSeller(count));
    }, [dispatch, count]);

    const increaseLimit = () => {
        setCount(count + 5)
        dispatch(getBestSeller(count));
    };


    return (
        <div className="flex flex-col">
            <Bestproductdiv data={fileteredData} />
            <Bestbut>
                <Button count={0} func={() => increaseLimit()} />
            </Bestbut>
        </div>
    )
}

export default React.memo(Bestsellerproducts);
