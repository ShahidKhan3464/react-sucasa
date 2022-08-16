import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";

const Swipe = () => {

    return (
        <>
            <Swiper
                loop={true}
                slidesPerView={3}
                spaceBetween={30}
                navigation={true}
                slidesPerGroup={1}
                className="mySwiper"
                modules={[Navigation]}
                loopFillGroupWithBlank={true}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },
                    767: {
                        slidesPerView: 2,
                    },
                    1050: {
                        slidesPerView: 3,
                    }
                }}
            >
                <SwiperSlide>
                    <div className="bg-1">
                        <div className="box">
                            <h6>Luxe Room</h6>
                            <div className="detail">
                                <p className="location">United Kingdom</p>
                                <p className="price">$89</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-2">
                        <div className="box">
                            <h6>Luxe Room</h6>
                            <div className="detail">
                                <p className="location">United Kingdom</p>
                                <p className="price">$89</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-3">
                        <div className="box">
                            <h6>Luxe Room</h6>
                            <div className="detail">
                                <p className="location">United Kingdom</p>
                                <p className="price">$89</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-1">
                        <div className="box">
                            <h6>Luxe Room</h6>
                            <div className="detail">
                                <p className="location">United Kingdom</p>
                                <p className="price">$89</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default Swipe