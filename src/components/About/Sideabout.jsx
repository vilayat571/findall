import Linked from '../../atoms/About/Linked';

function Sideabout() {
  return (
    <div className=' lg:flex sm:hidden mt-1 rounded-sm border-[1px] w-[54%] text-[13px] 
    flex justify-between items-start sm:flex-row lg:flex-col sm:h-auto md:mb-0 sm:mb-6 md:h-28 mr-6 '>
      <Linked text={'About'} url={"/about"} />
      <Linked text={'Contact'} url={"/about/contact"} />
    </div>
  )
}

export default Sideabout;