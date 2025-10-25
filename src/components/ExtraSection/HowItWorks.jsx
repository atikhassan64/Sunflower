import React from 'react';
import { FaGraduationCap, FaSearch } from 'react-icons/fa';
import { FaMessage } from 'react-icons/fa6';
import { IoBook } from 'react-icons/io5';

const HowItWorks = () => {
    return (
        <div>
            <div className="max-w-11/12 mx-auto mt-15 mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-3 md:mb-4">
                    How It Works
                </h2>
                <p className="text-center text-accent mb-10 text-sm md:text-lg">
                    Start learning and sharing skills in just four simple steps.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
                        <div className="text-4xl mb-4 text-primary flex justify-center"><FaMessage /></div>
                        <h3 className="font-semibold text-[20px] text-primary mb-2">Contact Provider</h3>
                        <p className="text-accent text-[18px]">Get in touch and discuss your learning goals.</p>
                    </div>
                    <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
                        <div className="text-4xl mb-4 flex text-primary justify-center"><FaSearch /></div>
                        <h3 className="font-semibold text-[20px] text-primary mb-2">Browse Skills</h3>
                        <p className="text-accent text-[18px]">Find local experts offering skills you want to learn.</p>
                    </div>
                    <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
                        <div className="text-4xl mb-4 flex text-primary justify-center"><FaGraduationCap /></div>
                        <h3 className="font-semibold text-[20px] text-primary mb-2">Learn & Share</h3>
                        <p className="text-accent text-[18px]">Join the session, learn, and share your own skills later.</p>
                    </div>
                    <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
                        <div className="text-4xl mb-4 flex text-primary justify-center"><IoBook /></div>
                        <h3 className="font-semibold text-primary text-[20px] mb-2">Book Session</h3>
                        <p className="text-accent text-[18px]">Choose a time that works best and confirm your booking.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;