import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import location from '../../assets/images/location.png'
import checkIn from '../../assets/images/check-in.png'
import checkOut from '../../assets/images/check-out.png'
import room from '../../assets/images/room.png'
import search from '../../assets/images/search.png'
import Tab from '../tab/Tab'
import './style.css'

const Hero = () => {

    return (
        <section className='Hero'>
            <Container>
                <Row>
                    <Col lg="6" >
                        <div className="bg-image">
                            <div className="tabs">
                                <Tab icon={location} title="Location" type="text" placeholder="United States" />
                                <Tab icon={checkIn} title="Check In" type="date" placeholder="10 Jun 2021" />
                                <Tab icon={checkOut} title="Check Out" type="date" placeholder="15 Jun 2021" />
                                <Tab icon={room} title="Rooms" type="text" placeholder="2 guests" />
                                <button className="searchBtn">
                                    <img src={search} alt="search" />
                                    Search
                                </button>
                            </div>
                        </div>
                    </Col>

                    <Col lg="6">
                        <div className="text">
                            <h6>Find Your Best Hotel for Deals</h6>
                            <p>
                                There are many variations of passages of Lorem Ipsum available, but the majority have
                                suffered alteration in some form by injected humour.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default Hero