import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import luxury from '../../assets/images/luxury.png'
import Data from '../hotels-data/Data'
import './style.css'

const Hotels = () => {

    return (
        <section className='Hotels'>
            <Container>
                <Row>
                    <Col lg="6">
                        <div className="image">
                            <img src={luxury} alt="luxury-hotel" />
                        </div>
                    </Col>
                    <Col lg="6">
                        <div className="right">
                            <h6>Finest Luxury Hotels & Resort</h6>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                been the industry's standard dummy text ever since the 1500s,
                            </p>
                            <div className="details">
                                <Data quantity="120K+" user="Website User" />
                                <Data quantity="110K+" user="Happy Clients" />
                                <Data quantity="20K+" user="Active Hotels" />
                                <Data quantity="8Y+" user="Company Year" />
                            </div>
                            <button className="exploreBtn">Explore More</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default Hotels