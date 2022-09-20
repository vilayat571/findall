import Carttitle from '../../atoms/Cart/Carttitle';
import Cartpr from './Cartpr';

function Cartproducts({ carts }) {

    const total = carts && carts.reduce((total, item) => total = total + item.price, 0)

    return (
        <div className='h-auto w-full'>
            <Carttitle text={`Total price : ${total}₼`} />
            <Cartpr carts={carts} />
        </div>
    )
}

export default Cartproducts
