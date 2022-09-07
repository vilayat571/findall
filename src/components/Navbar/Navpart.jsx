import React from 'react'
import Linked from '../../atoms/Header/Linked'

function Navpart() {
  return (
    <div className="md:w-full 
    relative sm:left-0 md:left-2 justify-between sm:w-auto flex text-light items-center h-14" >
      <Linked icon={<i className="fa-solid fa-user text-[16px] text-[#303030]"></i>}
        url={"/myaccount"}
        text={"My account"} />
      <Linked icon={<i className="fa-solid fa-briefcase-blank fa-solid fa-user
       text-[16px] text-[#303030]"></i>}
        url={"/mycart"}
        text={"My cart"} />
    </div>
  )
}

export default Navpart

