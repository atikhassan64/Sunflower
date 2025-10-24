import React from 'react';

const SkillDetail = ({ details }) => {
    const { image, skillName, rating, price, providerName, providerEmail, slotsAvailable, description, category } = details;
    return (
        <div className=' rounded-t-lg'>
            <h1 className='font-bold text-primary mb-5 text-2xl'>Skill Details Page</h1>
            <div>
                <img src={image} alt={skillName} className='w-full  md:h-[400px] lg:h-[500px] object-cover rounded-t-lg' />
                <div className=''>
                    <h1 className='font-semibold text-2xl md:text-3xl lg:text-5xl text-secondary mt-8'>{skillName}</h1>
                    <hr className='text-accent mt-4' />
                    <div className='flex justify-between items-center mt-10'>
                        <h1 className='font-semibold text-2xl text-primary'>Price :  <span className='text-secondary font-light text-xl'>{price} USD</span></h1>
                        <h1 className='font-semibold text-xl text-primary'>Rating : <span className='text-secondary font-light text-xl'>{rating} star</span></h1>
                    </div>
                        <hr className='text-accent mt-2' />
                    <h1 className='font-semibold text-2xl mt-10 text-primary'>Category : <span className='text-secondary font-light'>{category}</span></h1>
                    <hr className='text-accent mt-2' />
                    <h3 className='text-xl font-medium text-primary mt-4'>Description</h3>
                    <p className='text-accent mt-2'>{description}</p>
                    <hr className='text-secondary mt-4' />
                    <div className='flex justify-between items-end mt-10 '>
                        <div>
                            <h2 className='font-semibold text-primary text-lg md:text-2xl lg:text-3xl mt-5 '>{providerName} <span className='text-secondary font-light'>provider</span></h2>
                            <p className='text-accent text-sm lg:text-[16px]'>Email: {providerEmail}</p>
                        </div>
                        <div>
                            <h3 className='btn btn-outline  '>Available - {slotsAvailable}</h3>
                        </div>
                    </div>
                    <hr className='text-secondary mt-4' />
                </div>
            </div>

        </div>
    );
};

export default SkillDetail;