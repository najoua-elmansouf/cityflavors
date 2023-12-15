import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import '../style/pagerepas.css'


const Pagerepas = () => {
    const { name } = useParams();
    const { ville } = useParams();
    const [repas, setRepas] = useState('');
    const [image, setImage] = useState('');
    const [ingrd, setIngredient] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(../../json/${ville}.json);
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        const desc = data[name].ingredient;
        const img = data[name].image;
        const repas = data[name].nom;
        setRepas(repas);
        setIngredient(desc);
        setImage(img);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [ville]);

    return (
      <div className = 'repasContainer'>
        <div className = 'repasSubContainer'>
        <img src ={image}/>
        <div className = 'texte'>
        <p><h1>{repas}</h1>{ingrd}</p>
        </div>
        </div>
    </div>
    );
}

export default Pagerepas
