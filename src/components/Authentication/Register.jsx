import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className='pt-6 text-center font-semibold text-2xl text-primary '>Login your account</h2>
                <form className="card-body">
                    <fieldset className="fieldset">
                        {/* Name */}
                        <label className="label">Name</label>
                        <input type="text" className="input outline-0 " placeholder="Name" />
                        {/* Photo-URL */}
                        <label className="label">Photo-URL</label>
                        <input type="text" className="input outline-0 " placeholder="Photo-URL" />
                        {/* Email */}
                        <label className="label">Email</label>
                        <input type="email" className="input outline-0 " placeholder="Email" />
                        {/* Password */}
                        <label className="label">Password</label>
                        <input type="password" className="input outline-0 " placeholder="Password" />
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