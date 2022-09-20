import React from 'react';
import Contegs from './Contegs';
import Fotdiv from './Fotdiv';
import Litags from './Litags';
import Roadmap from './Roadmap';
import keyWords from './words.json';
function Fottercontext() {
    return (
        <div className="justify-between items-start flex md:flex-row sm:flex-col h-auto">
            <Fotdiv>
                <Roadmap data={keyWords.keywords1} />
            </Fotdiv>
            <Fotdiv>
                <Litags mainText={keyWords.keywords2[0].text} data={keyWords.keywords2} />
            </Fotdiv>
            <Fotdiv>
                <Litags mainText={keyWords.keywords3[0].text} data={keyWords.keywords3} />
            </Fotdiv>
            <Fotdiv>
                <Contegs data={keyWords.keywords4} />
            </Fotdiv>
        </div>
    )
}

export default React.memo(Fottercontext);