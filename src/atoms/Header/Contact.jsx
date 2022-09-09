import React from 'react'
import { useSelector } from 'react-redux';

function Contact({ icon, text }) {

    const open = useSelector((state) => state.changeReducer.open);

    return (
        <div title='icon' id='icon' className={
            open ?  "flex justify-between items-center text-xs font-medium"
            :  "flex justify-between items-center text-xs font-medium mx-4"
        }>
            {icon}
            <span className="px-2 text-[#303030]">{text}</span>
        </div>
    )
}

export default React.memo(Contact);