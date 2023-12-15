import React, { useState, useEffect } from 'react';
import '../style/culture.css'

const Culture = ({ville}) => {
    const [desc, setDescription] = useState('');
    const [img, setImage] = useState('');
    const [titre, setTitre] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('../../json/region.json');
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        console.log(response);
        const data = await response.json();
        const desc = data[ville].description;
        const img = data[ville].image;
        const titre = data[ville].titre;
        setTitre(titre);
        setDescription(desc);
        setImage(img);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [ville]);
          
  return (
    <div className = 'cultureContainer'>
        <div className = 'cultureSubContainer'>
        <img src ={img}/>
        <p><h1>{titre}</h1>{desc}</p>
        </div>
    </div>
  )
}

export default Culture
