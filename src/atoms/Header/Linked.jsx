import { Link } from "react-router-dom";
import React from 'react'

function Linked({ icon, text, url, adText }) {

    return (
        <>
            {text === 'Carts' ?
                <Link to={url} className="mt-1 flex justify-between items-center text-[13px] font-medium mx-4 ">
                    {icon}
                    {
                        adText && <sup className="rounded-full w-4 h-4 pr-[1px] pt-[0.8px] bg-[#2318ff]
                        text-white flex justify-center items-center text-[10px] mb-1 font-bold ">
                            {text === 'Carts' && adText}
                        </sup>
                    }
                    {
                        !adText && <span className="pl-2 text-[#303030]">
                            {text}
                        </span>
                    }
                </Link> :
                <Link to={url} className="flex justify-between items-center text-[13px] font-medium mx-4 ">
                    {icon}
                    <span className="pl-2 text-[#303030]">
                        {text}
                    </span>
                </Link>}
        </>
    )
}

export default React.memo(Linked);
