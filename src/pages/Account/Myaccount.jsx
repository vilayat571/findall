import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Main from '../Main/Main';
import Accountdiv from './Accountdiv';

function Myaccount() {

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


  return (
    <>
      {
        !token ? <Main /> : <Accountdiv />
      }
    </>

  )
}

export default Myaccount;
