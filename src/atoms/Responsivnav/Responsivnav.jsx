import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeOpen } from '../../redux/reducers/changeReducer';
import Navattr from './Navattr';

function Responsivnav() {
  const open = useSelector((state) => state.changeReducer.open);
  const dispatch = useDispatch();
  const handleChange = () => {
    dispatch(changeOpen(!open))
  };
  
  return (
    <div className={open ? "w-full h-full"
      : 'w-full h-12 flex justify-end items-center'}>
      {
        !open ? <button onClick={() => handleChange()}>
          <i className="fa-solid mt-1 fa-bars text-xl "></i>
        </button> : ''
      }
      {
        open ? <button 
        onClick={() => handleChange()}
        className='w-full'>
           <Navattr /> 
        </button>  : ''
      }
    </div>
  )
}

export default Responsivnav
