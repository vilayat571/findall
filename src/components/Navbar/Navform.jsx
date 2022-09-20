import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getResult } from '../../redux/reducers/searchProductsReducer';
import Navbut from './Navbut';
import Navinp from './Navinp';

function Navform() {

    const navigate = useNavigate();
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
        <form onSubmit={(e) => handleSubmit(e)} className='w-[97%] relative left-4 flex sm:my-3 md:my-0 '>
            <Navinp val={query} func={(e) => handleChange(e)} />
            <Navbut />
        </form>
    )
}

export default Navform
