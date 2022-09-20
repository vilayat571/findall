import { Link } from 'react-router-dom';

function Li({ item, text }) {
    return (
        <li className={item.text === text ? "mb-3 text-white tracking-[0.8px]"
            : "mb-3 text-[#999999] text-sm tracking-[0.5px]"} type="none">
            <Link to={item.url}>
                {item.text}
            </Link>
        </li>
    )
}

export default Li;