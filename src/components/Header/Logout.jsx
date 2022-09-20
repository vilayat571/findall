import React from 'react'
import { useNavigate } from 'react-router-dom';

function Logout() {

    const navigate = useNavigate();




    const clear = () => {
        localStorage.clear();
        navigate('/signin')
    };

    return (
        <button
            onClick={() => clear()}
            className='text-[13px] flex justify-between items-center sm:px-0 lg:px-5 font-medium text-[#303030]'>
            <i className="fa fa-sign-out text-[16px] mr-1 text-[#303030]"></i>
            Logout</button>
    )
}

export default Logout
