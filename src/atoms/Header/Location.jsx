import { Link } from "react-router-dom";
import React from 'react'

function Location({ icon, text,url }) {
    return (
        <Link to={url} className="flex justify-between items-center text-xs font-medium mx-4 ">
            {icon}
            <span className="px-2 text-[#303030]">{text}</span>
        </Link>
    )
}

export default React.memo(Location);