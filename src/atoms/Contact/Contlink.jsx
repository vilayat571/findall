function Contlink({text,account}) {
  return (
    <div className='flex flex-col text-[#333333] text-center lg:mb-0 sm:mt-8 font-thin text-sm tracking-[1px]'>
      <span className='mb-2'>{text}</span>
      <span>{account}</span>
    </div>
  )
}

export default Contlink
