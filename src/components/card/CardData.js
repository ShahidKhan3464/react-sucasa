import React from 'react'
import Card from 'react-bootstrap/Card'

const CardData = ({ img, title, icon, location, reviews, price }) => {

    return (
        <>
            <Card>
                <Card.Img src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <div className="card-data">
                        <img src={icon} alt="group" />
                        <p>{location}</p>
                    </div>
                    <div className="rating">
                        <div className="icons">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-o"></i>
                        </div>
                        <div className="reviews">
                            <p>{reviews}</p>
                        </div>
                    </div>
                    <div className="price">
                        <h6>{price}</h6>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}

export default CardData