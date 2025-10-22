import React from 'react';

const SkillDetail = ({ details }) => {
    // console.log(details)
    const { image, skillName, rating, price, providerName, providerEmail, slotsAvailable, description, category } = details;
    return (
        <div className=' rounded-t-lg'>
            <h1 className='font-bold text-primary mb-5 text-2xl'>Skill Details Page</h1>
            <div>
                <img src={image} alt={skillName} className='w-full h-[600px] object-cover rounded-t-lg' />
                <div className=''>
                    <h1 className='font-bold text-5xl text-secondary mt-8'>{skillName}</h1>
                    <div className='flex mt-10'>
                        <h1 className='font-medium text-2xl text-primary'>Price :  <span className='text-secondary'>{price} USD</span></h1>
                        <h1 className='font-medium text-2xl text-primary ml-10'>Rating : <span className='text-secondary'>{rating} star</span></h1>
                        <h1 className='font-medium text-2xl text-primary ml-10'>Category : <span className='text-secondary'>{category}</span></h1>
                    </div>

                    <h3 className='text-xl font-medium text-primary mt-6'>Description</h3>
                    <p className='text-accent mt-2'>{description}</p>
                    <div className='flex justify-between items-center '>
                        <div>
                            <h2 className='font-semibold text-primary text-3xl mt-5 '>{providerName} <span className='text-secondary text-xl'>(provider)</span></h2>
                            <p className='text-accent'>Email: {providerEmail}</p>
                        </div>
                        <div>
                            <h3 className='btn btn-outline  '>Available - {slotsAvailable}</h3>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SkillDetail;