import RealPrice from './Realprice'

function Prices({ price }) {
  return (
    <span className='font-bold text-[#292929]'>
      {price} ₼ <RealPrice price={price} />
    </span>
  )
}

export default Prices;
