import icons from './icons.json';
import Span from './Span';

function Socialmedia() {

    return (
        <div className='flex justify-between items-center w-auto px-4'>
            {
                icons.icons.map((icon,index) => {
                    return <Span key={index} text={icon.name} />
                })
            }
        </div>
    )
}

export default Socialmedia;