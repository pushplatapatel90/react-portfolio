import React from 'react';
import '../css/recentworks.css';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import web5 from '../images/web5.png'
import web6 from '../images/web6.png'
import web7 from '../images/web7.png'
import web8 from '../images/web8.png'


const RecentWorks = () => {
    return (
        <>
            <div className="container-lg container-fluid works">
                <div className="heading">
                    <span>Recent Works</span>
                    <span>Portfolio</span>
                </div>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={3}
                    grabCursor={true}
                >
                    <SwiperSlide>
                        <img src={web5} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={web6} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={web7} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={web8} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={web5} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={web6} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={web7} alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default RecentWorks