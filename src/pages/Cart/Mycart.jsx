import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { fetchUsercart } from '../../redux/reducers/getCartReducer';
import Main from '../Main/Main';
import Cartdiv from './Cartdiv';


function Mycart() {

  const navigate = useNavigate();

  const data = localStorage.getItem('userDetails');
  const userDetails = JSON.parse(data);


  const token = userDetails !== null && userDetails !== undefined && userDetails.token;

  useEffect(() => {
    if (!token) {

      setTimeout(() => {
        navigate('/')
      }, 1);

    }

  });

  const dispatch = useDispatch();

  const carts = useSelector((state) => state.getCartReducer.userCarts)

  useEffect(() => {
    dispatch(fetchUsercart())
  }, [dispatch])


  return (

    <>
      {
        !token ? <Main /> : <Cartdiv carts={carts} />
      }
    </>

  )
}

export default Mycart
