import React from 'react';
import { MdOutlineStarPurple500 } from 'react-icons/md';

const TopRatedProvider = () => {
    return (
        <div className='max-w-11/12 mx-auto mt-15 py-10'>
            <h2 className='mb-3 md:mb-5 font-bold text-2xl md:text-3xl text-primary text-center'>Top Rated Providers</h2>
            <p className="text-center mb-10 text-accent text-sm md:text-lg">
                Our Top Rated Providers stand out for their skills, ratings, and commitment to excellence. 
            </p>
            <section className='grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3'>
                {/* 1st */}
                <div className=" bg-white shadow-sm rounded-2xl overflow-hidden hover:shadow-lg transition duration-300"
                >
                    <img
                        src={'https://media.istockphoto.com/id/1465326232/photo/happy-female-photographer-holding-photo-camera-taking-pictures-standing-indoors.jpg?s=612x612&w=0&k=20&c=vR935PBBxhECMBjDSF8PnGc5PZSiNYKcnhKS39H0a2M='}
                        alt=''
                        className="w-full h-[250px] rounded-t-2xl object-cover"
                    />
                    <div className="p-5 text-left">
                        <h3 className="text-xl font-semibold text-primary">
                            Photography for Beginners
                        </h3>
                        <p className="text-accent mt-1">By Hearts of Taras</p>
                        <div className="flex justify-between items-center mt-4">
                            <h2 className="text-secondary font-semibold flex items-center gap-2"><MdOutlineStarPurple500 size={16} /> 5 star </h2>
                            <span className="text-primary font-bold">
                                $24/hr
                            </span>
                        </div>
                    </div>
                </div>
                {/* 2nd */}
                <div className="bg-white shadow-sm rounded-2xl overflow-hidden hover:shadow-lg transition duration-300">
                    <img
                        src={'https://www.csinow.edu/wp-content/uploads/2025/02/computersystemsinstitute-355913-man-laptop-coding-blogbanner-1-1.jpg'}
                        alt=''
                        className="w-full h-[250px] object-cover"
                    />
                    <div className="p-5 text-left">
                        <h3 className="text-xl font-semibold text-primary">
                            Basic Web Development
                        </h3>
                        <p className="text-accent mt-1">By Dazzle Healer</p>
                        <div className="flex justify-between items-center mt-4">
                            <h2 className="text-secondary font-semibold flex items-center gap-2"><MdOutlineStarPurple500 size={16} /> 4 star </h2>
                            <span className="text-primary font-bold">
                                $18/hr
                            </span>
                        </div>
                    </div>
                </div>
                {/* 3rd */}
                <div className="bg-white shadow-sm rounded-2xl overflow-hidden hover:shadow-lg transition duration-300">
                    <img
                        src={'https://img.freepik.com/free-photo/senior-woman-teaching-english-lessons-home_23-2149019834.jpg'}
                        alt={''}
                        className="w-full h-[250px] object-cover"
                    />
                    <div className="p-5 text-left">
                        <h3 className="text-xl font-semibold text-primary">
                            Spoken English Practice
                        </h3>
                        <p className="text-accent mt-1">By Crystal Maiden</p>
                        <div className="flex justify-between items-center mt-4">
                            <h2 className="text-secondary font-semibold flex items-center gap-2"><MdOutlineStarPurple500 size={16} /> 4.5 star </h2>
                            <span className="text-primary font-bold">
                                $24/hr
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TopRatedProvider;