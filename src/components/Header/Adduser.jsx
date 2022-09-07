import Linked from "../../atoms/Header/Linked";
import Location from "../../atoms/Header/Location";
import React from 'react'

function Adduser() {
    return (
        <div className="w-auto px-2 flex text-light items-center h-12">
            <Location icon={<i className="fa-solid fa-location-dot text-[17px] text-[#303030]"></i>}
                url={"/about"}
                text={"Store location "} />
            <div className="w-auto px-2 flex text-light items-center h-12">
                <div className="border-[1px] border-[#c0c0c0] h-5"></div>
                <Linked icon={<i className="fa-solid fa-arrow-right-to-bracket text-[17px] text-[#303030]"></i>}
                    url={"/signin"}
                    text={"Sign in"} />
                <div className="border-[1px] border-[#c0c0c0] h-5"></div>
                <Linked icon={<i className="fa-solid fa-right-to-bracket text-[17px] text-[#303030]"></i>}
                    url={"/signup"}
                    text={"Sign up"} />
            </div>
        </div>
    )
}

export default React.memo(Adduser);
