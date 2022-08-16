import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import regenids from '../../assets/images/regenids.png'
import bridge from '../../assets/images/bridge.png'
import bridge2 from '../../assets/images/bridge2.png'
import group from '../../assets/images/group.png'
import Card from '../card/CardData'
import './style.css'

const Popular = () => {

    const createData = (img, title, icon, location, reviews, price) => {
        return { img, title, icon, location, reviews, price };
    }

    const cards = [
        createData(regenids, "Hotel Regenids Park", group, "Ujung Genteng, Sukabumi", 4.8, "$230/day"),
        createData(bridge, "London Bridge Hotel", group, "Ujung Genteng, Sukabumi", 4.8, "$230/day"),
        createData(bridge2, "London Bridge Hotel", group, "Ujung Genteng, Sukabumi", 4.8, "$230/day"),
    ];

    return (
        <section className='Popular'>
            <Container>
                <div className="top-portion">
                    <h6>Our most popular Hotels</h6>
                    <button>View All</button>
                </div>
                <Row>
                    {cards.map((card, index) => {
                        return (
                            <Col key={index} lg={4} md={6}>
                                <Card
                                    img={card.img}
                                    title={card.title}
                                    icon={card.icon}
                                    location={card.location}
                                    reviews={card.reviews}
                                    price={card.price}
                                />
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </section>
    )
}

export default Popular