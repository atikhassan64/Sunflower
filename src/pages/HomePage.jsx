import React, { Suspense } from 'react';
import HeroSlider from '../components/HeroSlider';
// import { useLoaderData } from 'react-router';
import SkillCards from '../components/SkillCards';

// const skillPromise = fetch("/sunflower_data.json").then((res)=> res.json());

const HomePage = () => {
    // const skills  = useLoaderData();
    

    return (
        <div>
            <HeroSlider />
            <Suspense fallback={<span className="loading loading-spinner text-error"></span>}>
                <SkillCards></SkillCards>
            </Suspense>
            {/* <div>
                {
                    skills.map((skillCard) => <SkillCards
                        key={skillCard.skillId}
                        heroDesign={skillCard}
                    ></SkillCards>)
                }
            </div> */}
        </div>
    );
};

export default HomePage;