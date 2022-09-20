import Logo from '../Navbar/Logo';
import Info from '../../components/Header/Info';
import Adduser from '../../components/Header/Adduser';
import Navpart from '../../components/Navbar/Navpart';

function Navattr() {

    return (
        <div className='h-screen px-4' >
            <div className='flex justify-between items-center w-full mb-6'>
                <Info />
            </div>
            <div className='flex justify-between items-center mb-6'>
                <Logo />
            </div>
            <div className='flex flex-col justify-start items-start relative right-3'>
                <Adduser />
                <Navpart />
            </div>
        </div>
    )
}

export default Navattr;