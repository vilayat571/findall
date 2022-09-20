import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import Butondiv from '../../components/Signin/Butondiv';
import Input from '../../components/Signin/Input';
import Layout from '../../layout/Layout';
import { getLogin } from '../../redux/reducers/loginReducer';

function Signin() {

  const dispatch = useDispatch();

  const [form, setForm] = useState({
    username: "atuny0",
    password: "9uQFF1Lh"
  });

  const handleChange = (e) => {

    setForm({ ...form, [e.target.id]: e.target.value });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    setForm({ username: "", password: "" });

    dispatch(getLogin({ username: form.username, password: form.password }));


  }

  return (
    <Layout>
      <div className='w-full h-screen bg-[#fff] py-16 flex justify-center items-center'>
        <form onSubmit={(e) => handleSubmit(e)}
          className=' w-5/12 pb-12 pt-20 px-4 rounded-sm border-none outline-none 
        shadow-sm bg-[#fff]
        flex flex-col justify-center items-center
        '>
          <div className="w-full flex-flex-col h-84  justify-between items-center">

            <Input value={form.username} id={'username'} placeholder='Username' func={(e) => handleChange(e)} />
            <Input value={form.password} id={'password'} placeholder='Password' func={(e) => handleChange(e)} />
            <Butondiv text={'Sign in'} />
            
          </div>

        </form>
      </div>
    </Layout>
  )
}

export default React.memo(Signin);
