import React from 'react'

const Tab = ({ icon, title, type, placeholder }) => {

    return (
        <div className="Tab">
            <div className="icon">
                <img src={icon} alt={title} />
            </div>
            <div className="data">
                <h6>{title}</h6>
                <input type={type} placeholder={placeholder} />
            </div>
        </div>
    )
}

export default Tab