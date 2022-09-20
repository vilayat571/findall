import { Link } from 'react-router-dom';

function Promocart({ text, icon ,url}) {
    return (
        <Link className='hover:shadow-xl hover:border-none
        border col-span-2  py-12' to={url}>
            <div className='flex flex-col justify-between items-center'>
                {icon}
                <span className='mt-4 text-[15px] font-medium leading-3 tracking-[0.8px]   text-[#333]'>{text}</span>
            </div>
        </Link>
    )
}

export default Promocart;