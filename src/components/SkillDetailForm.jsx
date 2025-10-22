import React from 'react';
import { toast } from 'react-toastify';

const SkillDetailForm = () => {


    const handleDetails = (event) => {
        event.preventDefault();
        event.target.reset();
        toast("success");
    }

    return (
        <div>
            <h1 className='font-bold text-primary mb-5 text-2xl'>Book Session</h1>

            <div className="card bg-base-200 w-full  shrink-0 shadow-2xl">
                <form onSubmit={handleDetails} className="card-body">
                    <fieldset className="fieldset">
                        <label className="label font-medium text-lg">Name</label>
                        <input type="text" name='name' className="input outline-0 w-full" placeholder="Name" required />
                        <label className="label font-medium  text-lg">Email</label>
                        <input type="email" name='email' className="input outline-0 w-full" placeholder="Email" required />
                        <button className="btn btn-outline btn-primary mt-4">Book Session</button>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default SkillDetailForm;