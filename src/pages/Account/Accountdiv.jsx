import React from 'react';
import Header from '../../atoms/About/Header';
import Contexts from '../../components/Account/Contexts';
import Sidecontact from '../../components/Account/Sidecontact';
import Layout from '../../layout/Layout';


function Accountdiv() {
    return (
        <Layout>
            <div className='flex mt-10 flex-col sm:px-4 lg:px-14 mb-4 text-[#777] font-normal tracking-wide h-auto pb-20'>
                <div className='h-16 flex items-end'>
                    <Header text={"Account"} />
                </div>
                <div className='flex lg:flex-row sm:flex-col mt-8'>
                    <Sidecontact />
                    <div className='w-full justify-center '>
                        <Contexts />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default React.memo(Accountdiv)
