import { useLocation } from 'react-router-dom';
import Fotter from '../parts/Fotter/Fotter';
import Head from '../parts/Head/Head';
import ScrollToTop from "react-scroll-to-top";

function Layout({ children }) {

    const location = useLocation();



    return (
        <div>
            {location.pathname === '/signin' || location.pathname === '/signup' ? '' : <Head />}
            {children}
            <ScrollToTop smooth
            style={{
                borderRadius:'100%',
                display:'flex',
                justifyContent:"center",
                alignItems:"center",
                background:"#000",
            }}
            color={"white"}
            width={16}
            />
            {location.pathname === '/signin' || location.pathname === '/signup' ? '' : <Fotter />}
        </div>
    )
}

export default Layout
