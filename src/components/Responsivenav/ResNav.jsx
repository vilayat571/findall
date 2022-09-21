import { useSelector } from 'react-redux';
import Logo from '../../atoms/Navbar/Logo';
import Responsivnav from '../../atoms/Responsivnav/Responsivnav';

function ResNav() {
  
    const open = useSelector((state) => state.changeReducer.open);

  return (
    <div className={open ? 
        'border-b-[1px] border-[#e5e5e5] flex items-center justify-between h-screen' : 
    'border-b-[1px] py-1 border-[#e5e5e5] flex items-center justify-between px-8'
     }>
      {!open ?   <Logo /> : ''}
      <Responsivnav />
    </div>
  )
}

export default ResNav;