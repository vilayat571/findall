import React from 'react'

function Bestbut({ children }) {
    return (
        <div className='w-full flex mt-4 justify-center items-center'>
            {children}
        </div>
    )
}

export default React.memo(Bestbut);