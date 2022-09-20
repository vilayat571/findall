import React from 'react'

function Text({ text }) {
    return (
        <span className='text-3xl font-bold text-[#000] mt-12'>
            {text}
        </span>
    )
}

export default React.memo(Text);
