import React from 'react'

const Data = ({ quantity, user }) => {

    return (
        <div className="Data">
            <h6>{quantity}</h6>
            <p>{user}</p>
        </div>
    )
}

export default Data