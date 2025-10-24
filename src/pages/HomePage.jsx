import React, { Suspense } from 'react';
import HeroSlider from '../components/HeroSlider';
import SkillCards from '../components/SkillCards';
import TopRatedProvider from '../components/Extrasection/TopRatedProvider';
import HowItWorks from '../components/ExtraSection/HowItWorks';
import UpcomingWorkShop from '../components/ExtraSection/UpcomingWorkShop';

const HomePage = () => {
    return (
        <div>
            <HeroSlider />
            <Suspense fallback={<span className="loading loading-spinner text-error"></span>}>
                <SkillCards></SkillCards>
            </Suspense>
            <section className='bg-base-200'>
                <TopRatedProvider />
            </section>
            <section>
                <HowItWorks></HowItWorks>
            </section>
            <section>
                <UpcomingWorkShop />
            </section>
        </div>
    );
};

export default HomePage;