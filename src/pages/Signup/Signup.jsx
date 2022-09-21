import React, { useState } from 'react';
import Butondiv from '../../components/Signin/Butondiv';
import Input from '../../components/Signin/Input';
import Layout from '../../layout/Layout';

function Signup() {

  const [form, setForm] = useState({
    name: "Terry",
    password: "9uQFF1Lh",
    email: "atuny0@sohu.com",
    phone: "+63 791 675 8914"
  });

  const handleChange = (e) => {

    setForm({ ...form, [e.target.id]: e.target.value });

  };

  const handleSubmit = (e) => {

    e.preventDefault();
    setForm({ name: "", password: "", email: "", phone: "" });

  };


  return (
    <Layout>
      <div className='w-full h-screen bg-[#fff] py-16 flex justify-center items-center'>
        <form onSubmit={(e) => handleSubmit(e)}
          className='sm:w-full md:w-2/3 lg:w-7/12 pb-12 pt-20 px-4 rounded-sm border-none outline-none 
        shadow-sm bg-[#fff]
        flex flex-col justify-center items-center
        '>
          <div className="w-full flex-flex-col h-84  justify-between items-center">
            <Input value={form.name} id={'Name'} placeholder='Username' func={(e) => handleChange(e)} />
            <Input value={form.email} id={'E-mail'} placeholder='E-mail' func={(e) => handleChange(e)} />
            <Input value={form.phone} id={'Phone'} placeholder='Phone' func={(e) => handleChange(e)} />
            <Input value={form.password} id={'Password'} placeholder='Password' func={(e) => handleChange(e)} />
            <Input value={form.password} id={'Repate password'} placeholder='Repeat password' func={(e) => handleChange(e)} />
            <Butondiv text={'Sign up'} />

          </div>

        </form>
      </div>
    </Layout>
  )
}

export default React.memo(Signup);