import { Link } from 'react-router-dom';

function Urls({ words }) {
    return (
        <div className='font-thin flex '>
            {words.map((item, index) => {
                return (
                    <Link className='tracking-[1px] text-[14px]
                    text-[#747474]  flex items-center mr-3' key={index} to={item.url}>
                        {item.name}
                    </Link>
                )
            })}
        </div>
    )
}

export default Urls;