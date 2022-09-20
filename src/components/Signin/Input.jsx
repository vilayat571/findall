import React from 'react';
import Label from './Label';
import Siginp from './Siginp';

function Input({ id, placeholder, func, value }) {
    
    return (
        <>
            <Label placeholder={placeholder} />
            <Siginp id={id} value={value} func={func} />
        </>
    )
}

export default React.memo(Input);