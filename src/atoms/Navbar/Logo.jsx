import { Link } from 'react-router-dom';

function Logo() {
    return (
        <Link className='text-3xl font-bold md:w-1/5 sm:w-auto' to={"/"}>
            Findall
            <span className='text-[2.5rem] ml-1 text-[#303030]'>
                .
            </span>
        </Link>
    )
}

export default Logo;