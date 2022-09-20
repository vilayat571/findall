import React from 'react'

function Carttit({ item }) {
    return (
        <div className='mt-6 flex flex-col tracking-[0.6px] '>
            <span className='mb-2 text-normal'>{item.title}</span>
            <span className='tracking-[0.3px]'>
                <span className='text-[#2f3435] text-sm'>
                    Payment form {" : "}
                </span>
                <span className='text-sm'>
                    full cash payment
                </span>
            </span>
        </div>
    )
}

export default Carttit
