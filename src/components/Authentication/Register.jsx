import React from 'react';
import { Link } from 'react-router';

const Register = () => {

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log({name, photo, email, password})
    }

    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className='pt-6 text-center font-semibold text-2xl text-primary '>Login your account</h2>
                <form onSubmit={handleRegister} className="card-body">
                    <fieldset className="fieldset">
                        {/* Name */}
                        <label className="label">Name</label>
                        <input 
                        type="text" 
                        name='name' 
                        className="input outline-0 " 
                        placeholder="Name" />
                        {/* Photo-URL */}
                        <label className="label">Photo-URL</label>
                        <input 
                        type="text" 
                        name='photo' 
                        className="input outline-0 " 
                        placeholder="Photo-URL" />
                        {/* Email */}
                        <label className="label">Email</label>
                        <input 
                        type="email" 
                        name='email' 
                        className="input outline-0 " 
                        placeholder="Email" />
                        {/* Password */}
                        <label className="label">Password</label>
                        <input 
                        type="password" 
                        name='password' 
                        className="input outline-0 " 
                        placeholder="Password" />
                        {/* Signup btn */}
                        <button type='submit' className="btn mt-4 btn-primary">Signup</button>
                    </fieldset>
                    <p className='text-center font-medium text-accent pt-5'>Already Have An Account ? <Link to={`/login`} className='text-secondary font-bold'>Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;