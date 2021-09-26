import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'

function Card({ src, title, description, price}) {
    return (
        <div className='card' >
            <img src={src} alt="" />
            <div className="card__info">
                <h2>{title}</h2>
                <h4>{description}</h4>
                <h3>{price}</h3><br/>
                <button href={"/signin.html"} style={{"color":"white", "backgroundColor":"green", "border":"3px", "border-radius":"3px", "cursor":"pointer", "padding":"10px"}} onClick={()=>{ alert('Added to Calendar'); }}  >Add to Calendar</button>
            </div>
        </div>
    )
}

export default Card
