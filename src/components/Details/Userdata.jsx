import { useState } from 'react';
import Input from '../Signin/Input'

function Userdata() {

    const [form, setForm] = useState({
        name: "Terry",
        password: "9uQFF1Lh",
        email: "atuny0@sohu.com",
        phone: "+63 791 675 8914"
    });

    const handleChange = (e) => {

        setForm({ ...form, [e.target.id]: e.target.value });

    };


    return (
        <div className='w-full flex justify-center items-center relative sm:bottom-0 lg:bottom-6'>
                <div className="w-full flex-flex-col  justify-between items-center">
                    <Input value={form.name} id={'Name'} placeholder='Username' func={(e) => handleChange(e)} />
                    <Input value={form.email} id={'E-mail'} placeholder='E-mail' func={(e) => handleChange(e)} />
                    <Input value={form.phone} id={'Phone'} placeholder='Phone' func={(e) => handleChange(e)} />
                    <Input value={form.password} id={'Password'} placeholder='Password' func={(e) => handleChange(e)} />
                    <Input value={form.password} id={'Repate password'} placeholder='Repeat password' func={(e) => handleChange(e)} />
                </div>
        </div>
    )
}

export default Userdata;