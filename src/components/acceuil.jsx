import React from 'react'
import Slider from './slider.js';
import Culture from './culture.jsx';
import '../style/acceuil.css'

const Acceuil = () => {
  return (
    <>
      <Slider />
      <div className="header" style={{color:'#990909',backgroundColor:'whitesmoke'}}>Découvrez nos villes</div>
      <Culture ville="casablanca" />
      <Culture ville="marrackech" />
      <Culture ville="rabat" />
      <Culture ville="tanger" />
    </>
  )
}

export default Acceuil
