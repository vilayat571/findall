import React from 'react'
import Foterendspan from '../../atoms/Fotter/Foterendspan';

function Fotterend() {

    const texts = ['2022 © Findall!', 'Powered by Vilayat Safarov']

    return (
        <div className="flex justify-between items-center h-36">
            {
                texts.map((text,index) => <Foterendspan key={index} text={text} />)
            }
        </div>
    )
}

export default React.memo(Fotterend);