import React from 'react';
import './Card.css'

function Card1({ src, title, description, price, page }) {
    return (
        <div className='card' >
            <img src={src} alt="" />
            <div className="card__info">
                <h2>{title}</h2>
                <h4>{description}</h4>
                <h3>{price}</h3><br/>
                
            </div>
        </div>
    )
}

export default Card1
