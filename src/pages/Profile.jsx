import React, { use, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import toast from 'react-hot-toast';

const Profile = () => {
    const { user, updateUser, setUser } = use(AuthContext);
    const [updateInfo, setUpdateInfo] = useState();
    const { photoURL, displayName, email } = user;

    const handleUpdate = (e) => {
        setUpdateInfo(e);

    };

    const handleUpdateInfo = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        updateUser({ displayName: name, photoURL: photo })
            .then(() => {
                setUser({ ...user, displayName: name, photoURL: photo });
                e.target.reset();
            })
            .catch((error) => {
                toast.error(error.message);
                setUser(user);
            })

            
    }

    return (
        <div className='max-w-11/12 mx-auto mt-15 mb-10 animate__animated animate__slideInRight '>
            <div className='shadow-lg rounded-lg px-5 md:px-10 py-10 md:py-16'>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                        <img src={photoURL} alt={displayName} className='h-15 w-15 object-cover rounded-full' />
                        <div className='ml-5'>
                            <h2 className='font-semibold md:font-bold text-xl md:text-2xl text-primary'>{displayName}</h2>
                            <p className='text-accent text-sm md:text-[16px] mt-1'>{email}</p>
                        </div>
                    </div>
                    <div className='hidden md:flex'>
                        <button onClick={handleUpdate} className="btn md:btn btn-sm bg-base-200 text-primary">Update Profile</button>
                    </div>
                </div>
                <div className='mt-10'>
                    <div className='flex justify-between items-center border-accent py-8 border-t-[1.5px]'>
                        <h2 className='font-semibold md:font-bold text-xl md:text-2xl text-primary'>Name</h2>
                        <h4 className='font-medium text-sm md:text-lg text-accent'>{displayName}</h4>
                    </div>
                    <div className='flex justify-between items-center border-accent py-8 border-y-[1.5px]'>
                        <h2 className='font-semibold md:font-bold text-xl md:text-2xl text-primary'>Email Account</h2>
                        <h4 className='font-medium text-sm md:text-lg text-accent'>{email}</h4>
                    </div>
                    <div className='md:hidden'>
                        <button onClick={handleUpdate} className="btn mt-8 w-full bg-base-200 text-primary">Update Profile</button>
                    </div>
                </div>
            </div>
            <div >
                {
                    updateInfo ?
                        <div className='flex justify-center items-center mt-20 max-w-11/12 mx-auto'>
                            <div className="card bg-base-100 w-full md:max-w-sm shrink-0 shadow-2xl">
                                <h2 className='pt-6 text-center font-semibold text-2xl text-primary '>Update Profile Info</h2>
                                <form onSubmit={handleUpdateInfo} className="card-body">
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

                                        {/* Signup btn */}
                                        <button type='submit' className="btn mt-4 btn-primary">Update</button>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                        :
                        ''
                }
            </div>

        </div>
    );
};

export default Profile;