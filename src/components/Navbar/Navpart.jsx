import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Linked from '../../atoms/Header/Linked'
import { fetchUsercart } from '../../redux/reducers/getCartReducer';


function Navpart() {

  const data = localStorage.getItem('userDetails');
  const userDetails = JSON.parse(data);
  const firstname = userDetails !== null && userDetails !== undefined && userDetails.username;
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.getCartReducer.userCarts)

  useEffect(() => {
    dispatch(fetchUsercart())
  }, [dispatch]);

  return (
    <div className="md:w-full 
    lg:flex-row md:flex-row sm:flex-col
    relative sm:left-0 md:left-2
     justify-between sm:w-auto 
      text-light sm:items-start lg:mr-0 sm:mr-6 flex md:items-center lg:items-center h-14" >

      <Linked icon={<i className="fa-solid fa-user text-[16px] text-[#303030]"></i>}
        url={"/myaccount"} text={firstname ? firstname : 'Account'}
        adText={''} />

      <Linked icon={<i className="fa fa-shopping-bag text-[16px] text-[#303030]"></i>}
        url={"/mycart"} text={"Carts"}
        adText={carts.products !== undefined && carts.products.length} />

    </div>
  )
}

export default React.memo(Navpart)

