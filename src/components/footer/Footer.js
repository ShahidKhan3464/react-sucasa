import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import instagram from '../../assets/images/instagram.png'
import linkedin from '../../assets/images/linkedin.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'
import './style.css'

const Footer = () => {

    return (
        <footer className='Footer'>
            <Container>
                <div className="upper-footer">
                    <Row>
                        <Col lg="5">
                            <div className="image">
                                <img src="http://sucasa.zaptatechnologies.com/public/assets/images/whiteLogo.svg" alt="Sucasa" />
                            </div>
                            <div className="description">
                                <p>
                                    Nor again is there anyone who loves or pursues or desires to obtain pain of itself.Nor
                                    again is there anyone who loves or pursues or desires to obtain pain of itself.
                                </p>
                                <input type="email" placeholder="Enter your email" />
                            </div>
                        </Col>

                        <Col>
                            <h6>Home</h6>
                            <ul>
                                <li><a href="#home">Home</a></li>
                                <li><a href="#home">Features</a></li>
                                <li><a href="#home">FAQs</a></li>
                                <li><a href="#home">Reviews</a></li>
                                <li><a href="#home">Stories</a></li>
                            </ul>
                        </Col>

                        <Col>
                            <h6>Help</h6>
                            <ul>
                                <li><a href="#home">Help Center</a></li>
                                <li><a href="#home">Privacy Policy</a></li>
                            </ul>
                        </Col>

                        <Col>
                            <h6>Contact Us</h6>
                            <div className="contact">
                                <p>+01 234 5684 6545</p>
                                <p>sucasa@gmail.com</p>
                            </div>
                            <div className="social-icons">
                                <a href="#home"><img src={instagram} alt="instagram" /></a>
                                <a href="#home"><img src={linkedin} alt="linkedin" /></a>
                                <a href="#home"><img src={facebook} alt="facebook" /></a>
                                <a href="#home"><img src={twitter} alt="twitter" /></a>
                            </div>
                        </Col>
                    </Row>
                </div>
                <hr style={{ background: 'white', height: '2px', borderTop: 'none' }} />
                <div className="lower-footer">
                    <p>© Copyright 2022 All rights reserved.</p>
                </div>
            </Container>
        </footer>
    )
}

export default Footer