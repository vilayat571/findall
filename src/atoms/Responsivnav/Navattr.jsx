import Logo from '../Navbar/Logo';
import Info from '../../components/Header/Info';
import { Link } from 'react-router-dom';
import Logout from '../../components/Header/Logout';
import Navpart from '../../components/Navbar/Navpart';

function Navattr() {

    const data = localStorage.getItem('userDetails');
    const userDetails = JSON.parse(data);

    const token = userDetails !== null && userDetails !== undefined && userDetails.token;

    return (
        <div className='h-screen px-4' >
            <div className='flex justify-between items-center w-full mb-6'>
                <Info />
            </div>
            <div className='flex justify-between items-center mb-6'>
                <Logo />
            </div>
            <div className='flex flex-col justify-start items-start relative right-3'>
                <Navpart />
                <div className='mt-5 h-14 flex 
                flex-col justify-between '>
                    {
                        token ? <div className='ml-4'><Logout /></div> : <>
                            <Link to={'/signin'} className="flex justify-between items-center text-[13px] font-medium mx-3">
                                <i className="mr-1 fa-solid fa-arrow-right-to-bracket text-[17px] text-[#303030]"></i>
                                <span className="text-[#303030]">
                                    Sign in
                                </span>
                            </Link>
                            <Link to={'/signup'} className="flex justify-between items-center text-[13px] font-medium mx-3">
                                <i className="mr-1 fa-solid fa-arrow-right-to-bracket text-[17px] text-[#303030]"></i>
                                <span className="text-[#303030]">
                                    Sign up
                                </span>
                            </Link>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default Navattr;