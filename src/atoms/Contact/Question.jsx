import { Link } from 'react-router-dom';

function Question() {
    return (
        <Link className='text-center border-[1px] border-[#999999] text-[#575757] outline-none
        px-6 text-xs font-semibold py-2 ' to={"/"} >
            Give a question
        </Link>
    )
}

export default Question;