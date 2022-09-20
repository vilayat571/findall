import React from 'react';
import Contlink from '../../atoms/Contact/Contlink';


function Contact() {

  return (
    <div className=' flex lg:flex-row sm:flex-col justify-between w-full items-center mb-16 mt-10'>
      <Contlink text={'Phone number:'} account={"+994-50-890-87-27"} />
      <Contlink text={'Gmail:'} account={"vilayat571@gmail.com"} />
      <Contlink text={'Linkedin:'} account={"Vilayat Safarov"} />
      <Contlink text={'Baku,Narimanov:'} account={"09:00-18:00"} />
    </div>
  )
}

export default React.memo(Contact);
