import React from 'react'
import Swiper from '../swiper-slider/Swipe'
import "./style.css";

const Rooms = () => {

    return (
        <section className='Rooms'>
            <div className="container">
                <div className="title">
                    <h6>Suggested Rooms</h6>
                </div>
                <div className="top-portion">
                    <p>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                        alteration.
                    </p>
                    <div className="slider">
                        {/* <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div> */}
                    </div>
                </div>
                <Swiper />
            </div>
        </section >
    )
}

export default Rooms