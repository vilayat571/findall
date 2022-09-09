import React from 'react'
import { Link } from 'react-router-dom'

function Placatim({ url, ateq }) {
    return (
        <Link to={ateq}>
            <img
                alt={"this is product appearance "}
                className='h-full w-full rounded-sm '
                src={url} />
        </Link>
    )
}

export default Placatim
