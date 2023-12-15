import React from 'react'
import img1 from "../images/hassan.jpg";
import '../style/page.css';

const Pagge = () => {
  return (
    <div className='container'>
      <img className='image' src={img1} alt='hassan'/>
      <div className='text'>Casablanca, joyau économique du Maroc, mêle histoire et modernité</div>
    </div>
  )
}

export default Pagge
