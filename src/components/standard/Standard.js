import React from 'react'
import standard1 from '../../assets/images/standard1.png'
import standard2 from '../../assets/images/standard2.png'
import standard3 from '../../assets/images/standard3.png'
import Item from '../standard-item/Item'
import './style.css'

const Standard = () => {

    return (
        <section className='Standard'>
            <div className="title">
                <h6>The Sucasa Standard</h6>
            </div>
            <div className="container">
                <div className="standard-items">
                    <Item img={standard1} title="Word From Anywhere" text="Optimal flexibility to work remotely" />
                    <Item img={standard2} title="Transparent Pricing" text="Low fees & no surprises at checkout" />
                    <Item img={standard3} title="Premium Properties" text="Curated By Sucasa" />
                </div>
            </div>
        </section>
    )
}

export default Standard