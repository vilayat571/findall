import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getResult } from '../../redux/reducers/searchProductsReducer';

function Searchbar() {

    const navigate=useNavigate();

    const [query, setQuery] = useState('');

    const dispatch = useDispatch();


    const handleChange = (e) => {
        setQuery(e.target.value);

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getResult(query))
        setQuery('');
        navigate('/result')
    };

    return (
        <div className="md:w-3/5 sm:w-full flex justify-center items-center">
            <form onSubmit={(e) => handleSubmit(e)} className='w-[95%] relative left-4 flex sm:my-3 md:my-0 '>
                <input value={query} type="text"
                    onChange={(e) => handleChange(e)}
                    className=' h-13 py-1 rounded-tl rounded-bl
                 outline-none border-[1px] border-[#e5e5e5] w-full indent-3
                 text-[#303030] text-sm '
                    placeholder='Search Here...'
                />
                <button className='h-12 outline-none bg-[#303030] text-white
            rounded-tr rounded-br w-16'>
                    <i className="font-light fas fa-search"></i>
                </button>
            </form>
        </div>
    )
}

export default Searchbar
