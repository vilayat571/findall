import { Link } from 'react-router-dom'

function Linked({ text, url }) {
    return (
        <Link className={text === 'Contact' || text=== 'Cart' ? 'w-full py-4 px-2  tracking-[0.8px]' : 'w-full py-4 px-2 border-b-[1px]  tracking-[0.8px]'} to={url} >
            {text}
        </Link>
    )
}

export default Linked;