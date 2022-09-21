import React from 'react'
import Linked from "../../atoms/Header/Linked";
function Loglink() {
    return (
        <>
            <Linked 
            icon={<i className="fa-solid fa-arrow-right-to-bracket text-[17px] text-[#303030]"></i>}
                url={"/signin"}
                text={"Sign in"} />
            <Linked 
            icon={<i className="fa-solid fa-right-to-bracket text-[17px] text-[#303030]"></i>}
                url={"/signup"}
                text={"Sign up"} />
        </>
    )
}

export default React.memo(Loglink);
