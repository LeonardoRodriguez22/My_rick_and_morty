import React from 'react'
import style from "./Card.css"



export default function Card({name, species, gender, image,  onClose}) {
   return (
      <div className= "div">
         <button className='button2' onClick={onClose}>X</button>
         <h2 className='h1'>{name}</h2>
         <h2 className='h2'>{species}</h2>
         <h2 className='h3'>{gender}</h2>
         <img className='img1' src={image} alt={name} />
      </div>
   );
}
