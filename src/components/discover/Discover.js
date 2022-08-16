import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import discover from '../../assets/images/discover.png'
import './style.css'

const Discover = () => {

    return (
        <section className='Discover'>
            <div className="title">
                <h6>Discover our History</h6>
            </div>
            <div className="discover-underground">
                <Container>
                    <Row>
                        <Col lg="6">
                            <div className="left">
                                <h6>Discover our underground</h6>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s.
                                </p>
                                <button className="startBtn">Start Now</button>
                            </div>
                        </Col>
                        <Col lg="6">
                            <div className="image">
                                <img src={discover} alt="discover" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    )
}

export default Discover