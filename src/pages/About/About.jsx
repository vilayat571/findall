import React from 'react';
import Layout from '../../layout/Layout';
import Context from '../../components/About/Context';
import Sideabout from '../../components/About/Sideabout';
import Header from '../../atoms/About/Header';

function About() {

  return (
    <Layout>
      <div className='flex flex-col sm:px-4 lg:px-14 mb-4 text-[#777] font-normal tracking-wide h-auto'>
        <div className='h-16 flex items-end'>
          <Header text={"About"} />
        </div>
        <div className='flex lg:flex-row sm:flex-col mt-8'>
          <Sideabout />
          <Context />
        </div>
      </div>
    </Layout>
  )
}

export default React.memo(About);
