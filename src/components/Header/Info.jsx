import Contact from "../../atoms/Header/Contact"
import React from 'react'
import { useSelector } from "react-redux";

function Info() {
    const open = useSelector((state) => state.changeReducer.open);
    return (
        <div className={open ?
             "w-full flex text-light items-center py-3 mb-2 justify-between"
            : "w-auto px-2 flex text-light items-center h-12"}>
            <Contact icon={<i className="text-[17px] text-[#303030] fa-solid fa-headset"></i>}
                text={"+994 (50) 890-87-27"} />
            {
                open ? " " : <div className="border-[1px] border-[#303030] h-5">

                </div>
            }
            <Contact icon={<i className="text-[17px] text-[#303030] fab fa-github"></i>}
                text={"vilayat571"} />
        </div>
    )
}

export default React.memo(Info);
