import React from 'react'
import Header from '../../atoms/About/Header';
import Sidecontact from '../../components/Account/Sidecontact';
import Userdata from '../../components/Details/Userdata';
import Layout from '../../layout/Layout'


function Userdetails() {

  return (
          <Layout>
            <div className='flex flex-col sm:px-4 lg:px-14 mt-10 text-[#777] font-normal tracking-wide h-auto pb-20'>
              <div className='h-16 flex items-end'>
                <Header text={"User details"} />
              </div>
              <div className='flex lg:flex-row sm:flex-col mt-8'>
                <Sidecontact />
                <Userdata />
              </div>
            </div>
          </Layout>
  )
}

export default Userdetails
