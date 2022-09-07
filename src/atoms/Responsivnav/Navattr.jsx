import React from 'react'
import {  useSelector } from 'react-redux';
import Logo from '../Navbar/Logo';
import Info from '../../components/Header/Info';
import Adduser from '../../components/Header/Adduser';

function Navattr() {
    const open = useSelector((state) => state.changeReducer.open);
    return (
        <div className='h-screen px-4' >
            <div className='flex justify-between items-center w-full'>
                <Info />
            </div>
            <div className='flex justify-between items-center'>

                <Logo />

            </div>
            <div className='flex flex-col justify-between items-center'>

                <Adduser />

            </div>
        </div>
    )
}

export default Navattr
