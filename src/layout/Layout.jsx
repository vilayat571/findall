import React from 'react'
import { useLocation } from 'react-router-dom';
import Fotter from '../parts/Fotter/Fotter'
import Head from '../parts/Head/Head'

function Layout({ children }) {

    const location = useLocation();



    return (
        <div>
            {location.pathname === '/signin' || location.pathname === '/signup' ? '' : <Head />}
            {children}
            {location.pathname === '/signin' || location.pathname === '/signup' ? '' : <Fotter />}
        </div>
    )
}

export default Layout
