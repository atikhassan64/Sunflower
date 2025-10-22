import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className='pt-6 text-center font-semibold text-2xl text-primary '>Login your account</h2>
                <form className="card-body">
                    <fieldset className="fieldset">
                        {/* Email */}
                        <label className="label">Email</label>
                        <input 
                        type="email" 
                        className="input outline-0 " 
                        placeholder="Email" />
                        {/* Password */}
                        <label className="label">Password</label>
                        <input 
                        type="password" 
                        className="input outline-0 " 
                        placeholder="Password" />
                        {/* Forget btn */}
                        <div><a className="link link-hover">Forgot password?</a></div>
                        {/* Login btn */}
                        <button type='submit' className="btn btn-primary mt-4">Login</button>
                    </fieldset>
                    <p className='text-center font-medium text-accent pt-5'>Don't Have An Account ? <Link to={`/register`} className='text-secondary font-bold'>Signup</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;