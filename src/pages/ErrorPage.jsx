import React from 'react';
import errorImg from '../assets/error.png';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div>
            <div className='bg-[#F5F5F5]'>
                <div className='max-w-11/12 mx-auto py-[80px]'>
                    <div>
                        <img src={errorImg} alt="" className='mx-auto px-5 ' />
                        <h1 className=' font-semibold text-[#001931] text-[30px] md:text-[48px] text-center mt-2 '>Oops, page not found!</h1>
                        <div className='flex justify-center  items-center mt-6 '>
                            <Link to='/'><button className='btn btn-secondary px-10 py-3 rounded-[4px] cursor-pointer text-white '>Go Back!</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;