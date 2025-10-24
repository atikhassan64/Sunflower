import React, { use } from 'react';
import SkillCard from './SkillCard';
const skillPromise = fetch("/sunflower_data.json").then((res)=> res.json());

const SkillCards = () => {
    const skills = use(skillPromise);
    // console.log(skills)
    
    return (
        <div className='max-w-11/12 mx-auto mt-15'>
            <h1 className='font-bold text-2xl md:text-3xl text-secondary'>Popular <span className='text-primary'>Skills</span></h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-5 mt-5'>
                {
                    skills.map((card)=> <SkillCard 
                    key={card.skillId} 
                    card={card}
                    ></SkillCard>)
                }
            </div>
        </div>
    );
};

export default SkillCards;