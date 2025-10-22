import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const HeroSlider = () => {
    return (
        <Swiper
            className='cursor-pointer'
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            navigation
        >
            <SwiperSlide>
                <div className='relative w-full h-[400px] bg-cover'
                    style={{ backgroundImage: `url('https://licklibrary-com-ltd.imgix.net/images/welcome/lesson-home-hero-image.jpg?ixlib=php-3.3.1&s=055b9121fb3c8cb7a7f2b70ef8e6bf4f')` }}>

                    <div className=' flex justify-center items-center h-[400px] flex-col'>
                        <h2 className=' text-secondary font-semibold text-3xl '>Most Popular Skill</h2>
                        <h2 className=' text-base-300 font-extrabold text-6xl mt-3 '>Beginner Guitar Lessons</h2>
                    </div>


                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='relative w-full h-[400px] bg-cover'
                    style={{ backgroundImage: `url('https://img.freepik.com/premium-photo/vintage-camera-parts-black-fabric-background-flat-lay-composition-aig55_31965-679247.jpg?semt=ais_hybrid&w=740&q=80')` }}>

                    <div className=' flex justify-center items-center h-[400px] flex-col'>
                        <h2 className=' text-secondary font-semibold text-3xl '>Most Popular Skill</h2>
                        <h2 className=' text-base-300 font-extrabold text-6xl mt-3 '>Photography for Beginners</h2>
                    </div>

                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='relative w-full h-[400px] bg-cover'
                    style={{ backgroundImage: `url('https://www.yoga2hear.co.uk/cdn/shop/articles/teacher_training_news_1_ae8987e1-ff3a-445d-b162-79cda4231db6_1600x.jpg?v=1696991281')` }}>

                    <div className=' flex justify-center items-center h-[400px] flex-col'>
                        <h2 className=' text-secondary font-semibold text-3xl '>Most Popular Skill</h2>
                        <h2 className=' text-secondary font-extrabold text-6xl mt-3 '>Yoga and Meditation Basics</h2>
                    </div>

                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default HeroSlider;