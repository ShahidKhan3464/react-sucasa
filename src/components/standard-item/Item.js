import React from 'react'

const Item = ({ img, title, text }) => {
    return (
        <div className="Item">
            <div className="image">
                <img src={img} alt="standard" />
            </div>
            <h6>{title}</h6>
            <p>{text}</p>
        </div>
    )
}

export default Item